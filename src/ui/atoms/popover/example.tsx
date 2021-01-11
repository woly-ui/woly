import * as React from 'react';
import styled from 'styled-components';
import { Button, Popover, Surface } from 'ui';
import { Global, block } from 'box-styles';

export const PopoverExample: React.FC = () => {
  const [isOpen, onClick] = React.useReducer((is) => !is, false);
  return (
    <>
      <Global>
        <Popover isOpen={isOpen} variant="base">
          <Surface>
            <Content>
              Popover is open
              <ButtonWrapper>
                <Button
                  text="close popover"
                  onClick={onClick}
                  variant="primary"
                />
              </ButtonWrapper>
            </Content>
          </Surface>
        </Popover>
        <block.S>
          <Button text="toggle popover" onClick={onClick} variant="primary" />
        </block.S>
      </Global>
    </>
  );
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled(block.S)`
  max-width: 300px;
  padding-top: 30px;
`;
