import styled from 'styled-components';
import React, { useState } from 'react';
import { IconArrowDown } from 'static/icons';

import { ConfiguratorName, Scope } from '../types';
import { VariableField } from './variable-field';
import { getInitialVariableValue } from '../stylesheet';
import { useLocalConfiguratorsState } from '../context';

type SectionProps = React.HTMLAttributes<HTMLElement> & { name: string };

const SectionView: React.FC<SectionProps> = ({ name, children, ...rest }) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen((is) => !is);

  return (
    <section {...rest}>
      <div data-name-wrapper={true} onClick={toggle}>
        <IconArrowDown data-arrow-icon={true} data-reversed={isOpen} />
        <span data-section-name={true}>{name}</span>
      </div>
      {isOpen && <div data-section-content={true}>{children}</div>}
    </section>
  );
};

export const Section = styled(SectionView)`
  &:last-of-type {
    margin-bottom: 0;
  }

  & [data-name-wrapper] {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 6px 0;
    padding: 6px 0;

    cursor: pointer;

    user-select: none;
  }

  & [data-arrow-icon] {
    & path {
      fill: currentColor;
    }

    &[data-reversed='true'] {
      transform: rotate(180deg);
    }
  }

  & [data-section-name] {
    margin-left: 12px;
  }

  & [data-section-content] {
    margin: 12px 0;
  }
`;

export function useSectionsJSX(configurator: ConfiguratorName, scopes: Scope[]) {
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

        return (
          <VariableField
            key={variable.name}
            configurator={configurator}
            scope={scope}
            variable={variable}
          />
        );
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
