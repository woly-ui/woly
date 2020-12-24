import * as React from 'react';
import styled from 'styled-components';

import { Button, Popover, Surface } from '..';
import { Global } from '../../../lib/box-styles';

export const SurfaceExample: React.FC = () => {
  const [isOpen, onClick] = React.useReducer((is) => !is, false);

  return (
    <Global>
      <Popover isOpen={isOpen} variant="primary">
        <Surface>
          <Content>
            This is surface
            <ButtonWrapper>
              <Button text="close" onClick={onClick} />
            </ButtonWrapper>
          </Content>
        </Surface>
      </Popover>
      <Button text="show surface" onClick={onClick} variant="primary" />
    </Global>
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
