import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

const map = (properties: Priority) => ({
  'data-priority': properties.priority || 'secondary',
});

export const Surface = styled.div.attrs(map)`
  background-color: var(--woly-shape-text-default);
  border-radius: var(--woly-rounding);
  box-shadow: var(--woly-box-shadow, 3px 3px 8px rgba(11, 31, 53, 0.04));
` as StyledComponent<'div', Record<string, unknown>, Priority>;
