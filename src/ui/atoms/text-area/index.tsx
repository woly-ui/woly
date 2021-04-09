import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

/**
 * --woly-font-size
 * --woly-rounding
 * --woly-line-height
 * --woly-background
 * --woly-background-disabled
 * --woly-border
 * --woly-border-focus
 * --woly-border-disabled
 * --woly-color
 * --woly-color-disabled
 *
 */
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  cols?: number;
  isDisabled?: boolean;
  maxLength?: number;
  minlength?: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => unknown;
  overflow?: string;
  placeholder?: string;
  resize?: string;
  rows?: number;
  textareaRef?: any;
  value?: string;
  wrap?: string;
}

const TextAreaBase: React.FC<TextAreaProps & Variant> = ({
  className,
  cols,
  isDisabled,
  maxLength,
  minlength,
  name,
  onChange,
  onKeyDown,
  overflow,
  placeholder,
  resize,
  rows,
  textareaRef,
  value,
  variant = 'default',
  wrap,
}) => (
  <div
    className={className}
    data-overflow={overflow}
    data-resize={resize}
    data-variant={variant}
  >
    <textarea
      cols={cols}
      data-variant={variant}
      disabled={isDisabled}
      maxLength={maxLength}
      minLength={minlength}
      name={name}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      ref={textareaRef}
      rows={rows}
      value={value}
      wrap={wrap}
    />
  </div>
);

export const TextArea = styled(TextAreaBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  --woly-width: 100%;

  width: var(--woly-width);

  textarea {
    padding: var(--woly-vertical, 12px) var(--woly-horizontal, 21px);

    border: none;
    outline: none;

    font-size: var(--woly-font-size, 15px);
    line-height: var(--woly-line-height, 21px);

    background: var(--woly-background, transparent);
    border-color: var(--woly-border, #000000);
    border-style: solid;
    border-width: var(--woly-border-width, 1.5px);
    border-radius: var(--woly-rounding, 3px);
  }

  resize: ${(p) => p.resize};

  color: var(--woly-color, #000000);

  overflow: ${(p) => p.overflow};

  textarea:focus,
  textarea:active {
    border-color: var(--woly-border-focus, #000000);
    outline: none;
  }

  textarea:disabled {
    pointer-events: none;

    color: var(--woly-color-disabled, #c0c0c0);
    background: var(--woly-background-disabled, #f5f5f5);
    border-color: var(--woly-border-disabled, #c0c0c0);
  }
` as StyledComponent<
  'textarea',
  Record<string, unknown>,
  TextAreaProps & Variant
>;
