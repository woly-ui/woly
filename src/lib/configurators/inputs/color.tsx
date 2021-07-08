import React from 'react';
import Tippy from '@tippyjs/react';
import rgba from 'color-rgba';
import styled from 'styled-components';
import { RgbaColorPicker } from 'react-colorful';

import { InputProps } from './types';

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

function fromString(anyColor: string): RGBA {
  const parsed = rgba(anyColor);
  if (!parsed) return { r: 0, g: 0, b: 0, a: 0 };
  const [r, g, b, a] = parsed;
  return { r, g, b, a };
}

function toString(rgba: RGBA): string {
  const { r, g, b, a } = rgba;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

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
          <RgbaColorPicker
            color={fromString(value)}
            onChange={(rgba) => onChange(toString(rgba))}
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

const Wrapper = styled.button`
  position: relative;

  width: 24px;
  height: 24px;
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
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
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  width: 100%;
  height: 100%;
`;
