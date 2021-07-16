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
        <Wrapper ref={forwardedRef}>
          <Menu show={show} hide={hide} />
          <Tab />
          {stylesheets.render()}
        </Wrapper>
      </LocalConfiguratorsStateProvider>
    );
  },
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  resize: vertical;
`;

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

type TabProps = React.HTMLAttributes<HTMLDivElement>;

const TabView: React.FC<TabProps> = ({ ...rest }) => {
  const { active, stylesheets } = useLocalConfiguratorsState();
  if (!active) return null;

  const { title, Component } = mapNameToOptions[active];

  const reset = () => {
    stylesheets.reset({ configurator: active });
  };

  return (
    <div {...rest}>
      <div data-tab-header={true}>
        <h3 data-tab-title={true}>{title}</h3>
        <ResetButton onClick={reset}>Reset</ResetButton>
      </div>
      <div data-tab-content={true}>
        <Component />
      </div>
    </div>
  );
};

const Tab = styled(TabView)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  min-width: 240px;
  max-height: 400px;
  overflow: auto;

  color: black;

  background-color: white;

  border: 2px solid rgb(246, 248, 250);
  border-top-width: 0;
  border-bottom-width: 0;

  & [data-tab-header] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;

    user-select: none;
  }

  & [data-tab-title] {
    margin: 0;
    padding: 0;

    font-size: 16px;
  }

  & [data-tab-content] {
    flex-grow: 1;
    padding: 0 20px 20px;
    overflow-y: auto;
  }
`;

const ResetButton = styled.button`
  padding: 4px 8px;

  color: white;

  font-size: 14px;
  line-height: 1.25;

  background: #b92843;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background: #a72039;
  }

  &:active {
    background: #971d34;
  }
`;

type MenuProps = React.HTMLAttributes<HTMLUListElement> & {
  show: (name: ConfiguratorName) => void;
  hide: () => void;
};

const MenuView: React.FC<MenuProps> = ({ show, hide, ...rest }) => {
  const { active, configurators } = useLocalConfiguratorsState();

  return (
    <ul {...rest}>
      {configurators.map((name) => {
        const { Icon } = mapNameToOptions[name];
        const isActive = name === active;

        const handleClick = () => {
          if (isActive) hide();
          else show(name);
        };

        return (
          <li data-menu-item={true} key={name} onClick={handleClick}>
            <Icon />
          </li>
        );
      })}
    </ul>
  );
};

const Menu = styled(MenuView)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;

  color: black;

  list-style: none;

  background-color: #dedede;

  & [data-menu-item] {
    padding: 8px;

    font-size: 0;

    cursor: pointer;

    & svg {
      font-size: 20px;
    }
  }
`;
