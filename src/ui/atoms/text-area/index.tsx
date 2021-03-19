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
  disabled?: boolean;
  label?: React.ReactNode;
  maxLength?: number;
  minlength?: number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => unknown;
  overflow?: string;
  placeholder?: string;
  resize?: string;
  rows?: number;
  textError?: string;
  textareaRef?: any;
  value?: string;
  wrap?: string;
}

const TextAreaBase: React.FC<TextAreaProps & Variant> = ({
  className,
  cols,
  disabled,
  label,
  maxLength,
  minlength,
  name,
  onChange,
  onKeyDown,
  overflow,
  placeholder,
  resize,
  rows,
  textError,
  textareaRef,
  value,
  variant = 'default',
  wrap,
  ...p
}) => {
  return (
    <TextAreaWrapper
      data-overflow={overflow}
      data-resize={resize}
      data-variant={variant}
     >
      {label && <span>{label}</span>}
      <textarea
        className={className}
        cols={cols}
        data-variant={variant}
        disabled={disabled}
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
        {...p}
      />
      <Containrer>
        {textError && <span>{textError}</span>}
        {maxLength && (
          <p>
            {value?.length}/{maxLength}
          </p>
        )}
      </Containrer>
    </TextAreaWrapper>
  );
};

export const TextAreaWrapper = styled.div`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );

  --woly-width: 100%;
  width: var(--woly-width);

  padding: var(--woly-vertical, 16px) 0;
`;

export const Containrer = styled.div`
  display: flex;
  justify-content: flex-end;

  p {
    margin: 0;

    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 15px);

    color: var(--woly-count-color, #000000);
  }

  span {
    flex-grow: 1;

    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 15px);

    color: var(--woly-error-text, #000000);
  }
`;

export const TextArea = styled(TextAreaBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );

  padding: var(--woly-vertical, 16px) var(--woly-horizontal, 6.4px);
  resize: ${(p) => p.resize};

  color: var(--woly-color, #000000);

  overflow: ${(p) => p.overflow};

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

  &:focus,
  &:active {
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
` as StyledComponent<'textarea',Record<string, unknown>,TextAreaProps & Variant>;
