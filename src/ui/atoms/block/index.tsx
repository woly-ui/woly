import * as React from 'react';
import styled from 'styled-components';

type BlockProps = { className?: string };

export const Block: React.FC<BlockProps> = ({ className, children }) => {
  return <WolyBlock className={className}>{children}</WolyBlock>;
};

const WolyBlock = styled.div`
  padding: 30px 42px;
  border-radius: 3px;
  box-shadow: 0 3px 12px -3px var(--border-color);
  border: 1px solid var(--border-color);
  background-color: #ffffff;
`;
