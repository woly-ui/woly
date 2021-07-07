import ColorLib from 'color';
import React from 'react';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';

import { InputProps } from './types';

type ColorInstance = ReturnType<typeof ColorLib.xyz>;

interface ColorObject {
  r: number;
  g: number;
  b: number;
  a?: number;
}

function toColorObject(color: ColorInstance): ColorObject {
  const { r, g, b, alpha } = color.rgb().object();
  return { r, g, b, a: alpha ?? 1 };
}

function fromColorObject(object: ColorObject): ColorInstance {
  const { r, g, b, a } = object;
  return ColorLib({ r, g, b, alpha: a ?? 1 });
}

const rgba = (value: string): ColorObject => {
  if (value === 'transparent') {
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  return toColorObject(ColorLib.xyz(value));
};

export const ColorInput: React.FC<InputProps> = ({ value, onChange }) => {
  // wrap in div for better a11y
  return (
    <div>
      <Tippy
        trigger="click"
        interactive={true}
        animation={false}
        appendTo={document.body}
        content={
          <StyledChromePicker
            color={rgba(value)}
            onChange={(result) => {
              const instance = fromColorObject(result.rgb);
              const string = instance.hsl().percentString();
              onChange(string);
            }}
          />
        }
      >
        <Wrapper>
          <Background />
          <Fill style={{ background: value }} />
        </Wrapper>
      </Tippy>
    </div>
  );
};

const StyledChromePicker = styled(ChromePicker)`
  & .saturation-black + div {
    pointer-events: none;
  }
`;

const Wrapper = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Background = () => {
  return (
    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '50%',
          height: '50%',
          background: 'white',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '50%',
          background: '#b1b1b1',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '50%',
          height: '50%',
          background: 'white',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '50%',
          height: '50%',
          background: '#b1b1b1',
        }}
      />
    </div>
  );
};

const Fill = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;
