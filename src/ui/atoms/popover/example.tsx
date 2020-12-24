import * as React from 'react';
import styled from 'styled-components';

import { Button, Popover, Surface } from '..';
import { Global } from '../../../lib/box-styles';

export const PopoverExample: React.FC = () => {
  const [isOpen, onClick] = React.useReducer((is) => !is, false);
  return (
    <>
      <Global>
        <Popover isOpen={isOpen} variant="primary">
          <Surface>
            <Content>
              Popover is open
              <ButtonWrapper>
                <Button text="close popover" onClick={onClick} />
              </ButtonWrapper>
            </Content>
          </Surface>
        </Popover>
        <Button text="toggle popover" onClick={onClick} variant="primary" />
      </Global>
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
