import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';

const map = (properties: Priority) => ({
  'data-priority': properties.priority || 'secondary',
});

export const HeaderPanel = styled.div.attrs(map)`
  display: flex;
  align-items: center;
  width: 100%;

  height: 100%;

  padding: var(--local-vertical) var(--local-horizontal);

  background-color: var(--woly-background);
  border: var(--woly-border-width) solid var(--woly-background);
  border-radius: var(--woly-rounding);
  box-shadow: var(--woly-shadow);

  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );
` as StyledComponent<'div', Record<string, unknown>, Priority>;
