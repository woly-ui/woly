import * as React from 'react';
import styled from 'styled-components';

import { Button, Popover, Surface } from '..';

export const PopoverExample: React.FC = () => {
  const [isOpen, onClick] = React.useReducer((is) => !is, false);
  return (
    <>
      <PopoverPrimary isOpen={isOpen}>
        <Surface>
          <Content>
            Popover is open
            <ButtonWrapper>
              <Button text="close popover" onClick={onClick} />
            </ButtonWrapper>
          </Content>
        </Surface>
      </PopoverPrimary>
      <Button text="toggle popover" onClick={onClick} />
    </>
  );
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ButtonWrapper = styled.div`
  max-width: 300px;
  padding-top: 30px;
`;

const PopoverPrimary = styled(Popover)`
  --popover-position-top: 0;
  --popover-position-right: 0;
  --popover-position-left: 0;
  --popover-position-bottom: 0;
  --popover-background: #00000063;
  --popover-spacing-vertical: 300px;
  --popover-spacing-horizontal: 300px;
`;
