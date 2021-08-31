import styled from 'styled-components';
import React, { forwardRef } from 'react';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

type BaseTextAreaProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type TextAreaProps = BaseTextAreaProps & {
  cols?: number;
  disabled?: boolean;
  maxLength?: number;
  minlength?: number;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  overflow?: boolean;
  placeholder?: string;
  resize?: boolean;
  rows?: number;
  value?: string;
  wrap?: string;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
};

const TextAreaBase = forwardRef<HTMLDivElement, TextAreaProps>(
  (
    {
      cols,
      disabled,
      maxLength,
      minlength,
      name,
      onChange,
      overflow,
      placeholder,
      priority = 'secondary',
      inputRef,
      resize,
      rows,
      value,
      wrap,
      ...rest
    },
    textAreaRef,
  ) => {
    const tabIndex = disabled ? -1 : 0;

    return (
      <div
        ref={textAreaRef}
        data-disabled={disabled}
        data-priority={priority}
        data-overflow={overflow}
        data-resize={resize}
        {...rest}
      >
        <textarea
          ref={inputRef}
          cols={cols}
          maxLength={maxLength}
          minLength={minlength}
          name={name}
          tabIndex={tabIndex}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          value={value}
          wrap={wrap}
          disabled={disabled}
        />
      </div>
    );
  },
);

export const TextArea = styled(TextAreaBase)<TextAreaProps>`
  --local-border-color: var(--woly-shape-default);
  --local-background-color: var(--woly-canvas-default);
  --local-text-color: var(--woly-canvas-text-default);
  ${box}

  textarea {
    box-sizing: border-box;
    width: 100%;

    color: var(--local-text-color);

    font-size: var(--woly-font-size);
    line-height: var(--woly-line-height);

    background-color: var(--local-background-color);
    border: none;
    outline: none;

    resize: none;

    &::placeholder {
      color: var(--woly-canvas-text-default);

      opacity: 50%;
    }
  }

  box-sizing: border-box;

  width: 100%;

  overflow: hidden;

  background-color: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);

  outline: none;

  &:focus-within {
    --local-border-color: var(--woly-shape-active);
    outline: none;
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus-color);
  }

  &:active {
    --local-border-color: var(--woly-shape-active);
    outline: none;
  }

  &:hover {
    --local-border-color: var(--woly-shape-hover);
  }

  &[data-disabled='true'] {
    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-canvas-disabled);
    --local-text-color: var(--woly-canvas-text-default);

    opacity: 50%;

    pointer-events: none;

    &::placeholder {
      color: var(--woly-canvas-text-disabled);
    }
  }

  &[data-overflow='true'] > textarea {
    overflow: auto;
  }

  &[data-resize='true'] {
    resize: both;
  }
`;
