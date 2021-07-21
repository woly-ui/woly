import styled, { StyledComponent } from 'styled-components';
import { LevelDecrement } from 'ui/elements';
import { box, boxVertical } from 'ui/elements/box';

export const Box = styled(LevelDecrement)`
  ${box}
` as StyledComponent<'div', Record<string, unknown>>;

export const BoxVertical = styled(LevelDecrement)`
  ${boxVertical}
` as StyledComponent<'div', Record<string, unknown>>;
