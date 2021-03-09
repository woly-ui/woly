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
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  className?: string;
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => unknown;
  placeholder?: string;
  rows?: number;
}

const TextAreaBase: React.FC<TextAreaProps & Variant> = ({
  className,
  name,
  onChange,
  variant = 'default',
  disabled,
  onKeyDown,
  placeholder,
  rows,
  ...p
}) => (
  <textarea
    className={className}
    data-variant={variant}
    name={name}
    onChange={onChange}
    disabled={disabled}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    rows={rows}
    {...p}
  />
);

export const TextArea = styled(TextAreaBase)`
  --woly-textarea-width: 100%;
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  box-sizing: border-box;

  width: var(--woly-textarea-width);
  padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);
  resize: none;

  color: var(--woly-color, #000000);

  font-size: var(--woly-font-size, 16px);
  line-height: var(--woly-line-height, 24px);

  background: var(--woly-background, transparent);
  border-color: var(--woly-border, var(--woly-background, #000000));
  border-style: solid;

  border-width: var(--woly-border-width, 1px);
  border-radius: var(--woly-rounding, 3px);

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: var(--woly-color, #000000);
    font-size: var(--woly-font-size, 16px);
    padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);
  }

  &:focus {
    border-color: var(--woly-border-focus, #000000);
    outline: none;
  }

  &:disabled {
    color: var(--woly-color-disabled, #ffffff);

    background: var(--woly-background-disabled, #ffffff);
    border-color: var(
      --woly-border-disabled,
      var(--woly-background-disabled, #000000)
    );
  }
` as StyledComponent<
  'textarea',
  Record<string, unknown>,
  TextAreaProps & Variant
>;
