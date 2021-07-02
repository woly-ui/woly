import styled, { StyledComponent } from 'styled-components';
import { box, boxVertical } from 'ui/elements/box';

const levelDec = () => ({ 'data-woly-component-level-dec': true });

export const Box = styled.div.attrs(levelDec)`
  ${box}
` as StyledComponent<'div', Record<string, unknown>>;

export const BoxVertical = styled.div.attrs(levelDec)`
  ${boxVertical}
` as StyledComponent<'div', Record<string, unknown>>;
