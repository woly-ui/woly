import styled from 'styled-components';
import { Priority } from 'lib/types';

type BaseHeaderPanelProps = Priority;
export type HeaderPanelProps = BaseHeaderPanelProps;

const map = (props: HeaderPanelProps) => ({
  'data-priority': props.priority || 'secondary',
});

export const HeaderPanel = styled.div.attrs(map)<HeaderPanelProps>`
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
`;
