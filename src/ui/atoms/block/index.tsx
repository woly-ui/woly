import * as React from 'react';
import styled from 'styled-components';

type BlockProps = { className?: string };

export const Block: React.FC<BlockProps> = ({ className, children }) => (
  <WolyBlock className={className}>{children}</WolyBlock>
);

const WolyBlock = styled.div`
  padding: var(--block-padding);
  border-radius: var(--block-border-radius);
  box-shadow: var(--block-shadow);
  border: var(--block-border);
  background-color: var(--block-bg);
`;
