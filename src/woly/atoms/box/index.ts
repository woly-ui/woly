import styled, { StyledComponent } from 'styled-components';
import { box, boxVertical } from 'ui/elements/box';

export const Box = styled.div`
  ${box}
` as StyledComponent<'div', Record<string, unknown>>;

export const BoxVertical = styled.div`
  ${boxVertical}
` as StyledComponent<'div', Record<string, unknown>>;
