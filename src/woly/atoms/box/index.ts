import styled, { StyledComponent } from 'styled-components';
import { box, boxVertical, lineBox } from 'ui/elements/box';

export const Box = styled.div`
  ${box}
` as StyledComponent<'div', Record<string, unknown>>;

export const LineBox = styled.div`
  ${lineBox}
` as StyledComponent<'div', Record<string, unknown>>;

export const BoxVertical = styled.div`
  ${boxVertical}
` as StyledComponent<'div', Record<string, unknown>>;
