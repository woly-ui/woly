import styled from 'styled-components';
import React, { forwardRef, useState } from 'react';
import { IconColorPalette } from 'static/icons';

import { ColorConfigurator } from './color';
import { ConfiguratorName } from './types';
import {
  LocalConfiguratorsState,
  LocalConfiguratorsStateProvider,
  useLocalConfiguratorsState,
} from './context';
import { useStylesheets } from './stylesheet';

interface Props {
  id: string;
  for?: ConfiguratorName[];
}

export const Configurators = forwardRef<HTMLDivElement, Props>(
  ({ id, for: configurators = [] }, forwardedRef) => {
    const [active, setActive] = useState<ConfiguratorName | null>(null);
    const stylesheets = useStylesheets(id);

    if (configurators.length === 0) {
      return null;
    }

    const state: LocalConfiguratorsState = {
      id,
      configurators,
      active,
      stylesheets,
    };

    const show = (name: ConfiguratorName) => setActive(name);
    const hide = () => setActive(null);

    return (
      <LocalConfiguratorsStateProvider value={state}>
        <Wrapper ref={forwardedRef} data-is-open={Boolean(active)}>
          <Tab />
          <Menu show={show} hide={hide} />
          {stylesheets.render()}
        </Wrapper>
      </LocalConfiguratorsStateProvider>
    );
  },
);

interface ConfiguratorOptions {
  title: string;
  Icon: React.FC;
  Component: React.FC;
}

const mapNameToOptions: Record<ConfiguratorName, ConfiguratorOptions> = {
  color: {
    title: 'Color palette',
    Icon: IconColorPalette,
    Component: ColorConfigurator,
  },
};

const Tab: React.FC = () => {
  const { active, stylesheets } = useLocalConfiguratorsState();
  if (!active) return null;

  const { title, Component } = mapNameToOptions[active];

  const reset = () => {
    stylesheets.reset({ configurator: active });
  };

  return (
    <TabWrapper data-active={active}>
      <Header>
        <TabTitle>{title}</TabTitle>
        <ResetButton onClick={reset}>Reset</ResetButton>
      </Header>
      <TabContent>
        <Component />
      </TabContent>
    </TabWrapper>
  );
};

const Menu: React.FC<{
  show: (name: ConfiguratorName) => void;
  hide: () => void;
}> = ({ show, hide }) => {
  const { active, configurators } = useLocalConfiguratorsState();

  return (
    <MenuWrapper>
      {configurators.map((name) => {
        const { Icon } = mapNameToOptions[name];
        const isActive = name === active;

        const handleClick = () => {
          if (isActive) hide();
          else show(name);
        };

        return (
          <MenuItemWrapper key={name} onClick={handleClick}>
            <Icon />
          </MenuItemWrapper>
        );
      })}
    </MenuWrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;

  &[data-is-open='true'] {
    min-height: 300px;
  }
`;

const ResetButton = styled.button`
  font-size: 14px;
  border: none;
  border-radius: 2px;
  padding: 4px 8px;
  line-height: 1.25;
  color: white;
  background: #b92843;
  cursor: pointer;

  &:hover {
    background: #a72039;
  }

  &:active {
    background: #971d34;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  user-select: none;
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 240px;
  height: 100%;
  background-color: black;
  color: white;
`;

const TabTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const TabContent = styled.div`
  flex-grow: 1;
  padding: 0 20px 20px;
  overflow-y: auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
`;

const MenuItemWrapper = styled.div`
  padding: 8px;
  cursor: pointer;
  font-size: 20px;
  color: white;
`;
