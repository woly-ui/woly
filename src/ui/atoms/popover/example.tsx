import * as React from 'react';
import styled from 'styled-components';

import { button, popover, surface } from '..';

export const PopoverExample: React.FC = () => {
  const [isOpen, onClick] = React.useReducer((is) => !is, false);
  return (
    <>
      <Popover isOpen={isOpen}>
        <surface.Base>
          <Content>
            Popover is open
            <ButtonWrapper>
              <button.Primary text="close popover" onClick={onClick} />
            </ButtonWrapper>
          </Content>
        </surface.Base>
      </Popover>
      <button.Primary text="toggle popover" onClick={onClick} />
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

const Popover = styled(popover.Base)`
  --popover-position-top: 0;
  --popover-position-right: 0;
  --popover-position-left: 0;
  --popover-position-bottom: 0;
  --popover-background: #00000063;
  --popover-spacing-vertical: 300px;
  --popover-spacing-horizontal: 300px;
`;
