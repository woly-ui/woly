import styled from 'styled-components';

const Surface = styled.div`
  background-color: var(--surface-background, #ffffff);
  padding: var(--padding, 1rem);
  border-radius: var(--rounding, 3px);
  border-width: var(--surface-border-width, 0);
  border-color: var(--surface-border-color, #000000);
  box-shadow: var(--surface-box-shadow, none);
`;

export const Base = styled(Surface)`
  --surface-background: var(--surface-background);
  --surface-border-width: var(--surface-border-width);
  --surface-border-color: var(--surface-border-color);
  --surface-box-shadow: var(--surface-box-shadow);
`;
