import { createContext, useContext } from 'react';

import { ConfiguratorName, Stylesheets } from './types';

export interface LocalConfiguratorsState {
  id: string;
  configurators: ConfiguratorName[];
  active: ConfiguratorName | null;
  stylesheets: Stylesheets;
}

const Context = createContext<LocalConfiguratorsState>({} as LocalConfiguratorsState);

export function useLocalConfiguratorsState() {
  return useContext(Context);
}

export const LocalConfiguratorsStateProvider = Context.Provider;
