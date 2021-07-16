import Tippy from '@tippyjs/react';
import rgba from 'color-rgba';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
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
        <ColorIndicator value={value} />
      </Tippy>
    </div>
  );
};

const ColorIndicator = forwardRef<HTMLButtonElement, { value: string }>(({ value }, ref) => {
  return (
    <Wrapper ref={ref}>
      <TransparencyWrapper>
        <rect y="0" x="0" fill="#cccccc" />
        <rect y="50%" x="50%" fill="#cccccc" />
        <rect y="0" x="50%" fill="#fcfcfc" />
        <rect y="50%" x="0" fill="#fcfcfc" />
      </TransparencyWrapper>
      <Fill style={{ background: value }} />
    </Wrapper>
  );
});

const Wrapper = styled.button`
  position: relative;

  width: 24px;
  height: 24px;
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TransparencyWrapper = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})`
  ${background}

  & > rect {
    width: 50%;
    height: 50%;
    stroke-width: 0;
  }
`;

const Fill = styled.div`
  ${background}
`;
