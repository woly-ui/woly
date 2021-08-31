/* eslint-disable react/button-has-type */
import * as React from 'react';
import styled from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';
import { forwardRef } from 'react';

export type ButtonPriorities =
  | 'secondary'
  | 'primary'
  | 'default'
  | 'transparent'
  | 'danger'
  | 'accent'
  | 'success';
export type ButtonSizes = 'default' | 'small';

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Priority;

export type ButtonProps = BaseButtonProps & {
  children?: never;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  outlined?: boolean;
  text: React.ReactNode;
};

const ButtonBase = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      fullWidth = false,
      icon,
      outlined = false,
      priority = 'secondary',
      text,
      type = 'button',
      ...rest
    },
    buttonRef,
  ) => (
    <button
      ref={buttonRef}
      type={type}
      data-full-width={fullWidth}
      data-outlined={outlined}
      data-priority={priority}
      {...rest}
    >
      {icon && (
        <span data-element="icon" data-box-role="icon">
          {icon}
        </span>
      )}
      <span data-element="text">{text}</span>
    </button>
  ),
);

export const Button = styled(ButtonBase)<ButtonProps>`
  ${box};

  --local-text-color: var(--woly-shape-text-default);
  --local-shape-color: var(--woly-shape-default);
  --local-border-color: transparent;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  box-sizing: border-box;
  padding: 0;

  color: var(--local-text-color);
  font-size: var(--woly-font-size);
  line-height: var(--woly-line-height);

  background-color: var(--local-shape-color);
  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);
  outline: none;

  &[data-outlined='true'] {
    --local-border-color: var(--local-shape-color);

    color: var(--local-shape-color);

    background: transparent;

    svg > path {
      fill: var(--local-shape-color);
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  [data-element='icon'] {
    --local-icon-size: var(--woly-line-height);
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }

  svg > path {
    fill: var(--local-text-color);
  }

  &:hover {
    --local-text-color: var(--woly-shape-text-hover);
    --local-shape-color: var(--woly-shape-hover);
  }

  &:active {
    --local-text-color: var(--woly-shape-text-active);
    --local-shape-color: var(--woly-shape-active);
  }

  &:focus {
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }

  &:disabled {
    --local-text-color: var(--woly-shape-text-default);
    --local-shape-color: var(--woly-shape-disabled);
  }
`;
