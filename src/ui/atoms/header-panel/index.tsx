import styled from 'styled-components';
import { Variant } from 'lib/types';

const map = (properties: Variant) => ({
  'data-variant': properties.variant || 'default',
});

export const HeaderPanel = styled.div.attrs(map)`
  display: flex;
  align-items: center;

  height: 100%;
  width: 100%;

  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-box-shadow: 3px 3px 9px rgba(57, 57, 57, 0.12);
  
  padding: var(--local-vertical) var(--local-horizontal);

  background-color: var(--woly-background);
  border: var(--woly-border-width) solid var(--woly-background);
  border-radius: var(--woly-rounding);
  box-shadow: var(--local-box-shadow);
`;
