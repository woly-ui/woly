import styled from 'styled-components';
import React, { useState } from 'react';
import { IconArrowDown } from 'static/icons';

import { Scope } from '../types';
import { VariableField } from './variable-field';
import { getInitialVariableValue } from '../stylesheet';
import { useLocalConfiguratorsState } from '../context';

const Section: React.FC<{ name: string }> = ({ name, children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((is) => !is);

  return (
    <SectionWrapper>
      <SectionNameWrapper onClick={toggle}>
        <StyledArrowIcon data-reversed={isOpen} />
        <SectionName>{name}</SectionName>
      </SectionNameWrapper>
      {isOpen && <SectionContent>{children}</SectionContent>}
    </SectionWrapper>
  );
};

export function useSectionsJSX(scopes: Scope[]) {
  const { id } = useLocalConfiguratorsState();

  const sections = scopes.map((scope) => {
    const inputs = scope.variables
      .map((variable) => {
        const initialValue = getInitialVariableValue(id, {
          selector: scope.selector,
          variable: variable.name,
        });

        if (!initialValue) {
          // there is no element using this variable inside
          return null;
        }

        return <VariableField key={variable.name} scope={scope} variable={variable} />;
      })
      .filter(Boolean);

    if (inputs.length === 0) {
      return null;
    }

    return (
      <Section key={scope.selector} name={scope.displayName}>
        {inputs}
      </Section>
    );
  });

  return <>{sections}</>;
}

const SectionNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 6px 0;
  padding: 6px 0;

  cursor: pointer;

  user-select: none;
`;

const SectionName = styled.span`
  margin-left: 12px;
`;

const StyledArrowIcon = styled(IconArrowDown)`
  & path {
    fill: currentColor;
  }

  &[data-reversed='true'] {
    transform: rotate(180deg);
  }
`;

const SectionWrapper = styled.section`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionContent = styled.div`
  margin: 12px 0;
`;
