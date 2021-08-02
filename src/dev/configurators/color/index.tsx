import { SCOPES } from './scopes';
import { useSectionsJSX } from '../common/sections';

export const ColorConfigurator: React.FC = () => {
  return useSectionsJSX('color', SCOPES);
};
