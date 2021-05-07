import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';
import { keyboardEventHandle } from 'lib';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  cols?: number;
  disabled?: boolean;
  maxLength?: number;
  minlength?: number;
  name: string;
  onChange: React.EventHandler<React.SyntheticEvent>;
  overflow?: boolean;
  placeholder?: string;
  ref?: any;
  resize?: boolean;
  rows?: number;
  value?: string;
  wrap?: string;
}

const TextAreaBase: React.FC<TextAreaProps & Variant> = ({
  className,
  cols,
  disabled,
  maxLength,
  minlength,
  name,
  onChange,
  overflow,
  placeholder,
  ref,
  resize,
  rows,
  value,
  variant = 'secondary',
  wrap,
  ...p
}) => {
  const textAreaRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  const tabIndex = disabled ? -1 : 0;

  return (
    <div
      className={className}
      data-disabled={disabled}
      data-variant={variant}
      tabIndex={tabIndex}
      data-overflow={overflow}
      data-resize={resize}
      ref={textAreaRef}
    >
      <textarea
        cols={cols}
        data-variant={variant}
        maxLength={maxLength}
        minLength={minlength}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value}
        wrap={wrap}
        {...p}
      />
    </div>
  );
};

export const TextArea = styled(TextAreaBase)`
  --local-vertical: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--local-vertical)
  );

  --local-border-color: var(--woly-canvas-text-hover);
  --local-background-color: var(--woly-canvas-default);
  --local-value-color: var(--woly-canvas-text-default);

  width: 100%;
  box-sizing: border-box;
  outline: none;

  font-size: var(--woly-font-size, 15px);
  line-height: var(--woly-line-height, 21px);

  textarea {
    padding: var(--local-vertical) var(--local-horizontal);

    outline: none;

    background-color: var(--local-background-color);
    color: var(--local-value-color);

    border: var(--woly-border-width) solid var(--local-border-color);
    border-radius: var(--woly-rounding);

    overflow: hidden;
    resize: none;

    &::placeholder {
      color: var(--woly-canvas-text-disabled);
    }
  }

  &:focus > textarea {
    --local-border-color: var(--woly-focus);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    outline: none;
  }

  &:active > textarea {
    --local-border-color: var(--woly-focus);
    box-shadow: 0 0 0 var(--woly-border-width) var(--woly-focus);
    outline: none;
  }

  &:hover > textarea {
    --local-border-color: var(--woly-shape-hover);
  }

  &[data-disabled='true'] {
    pointer-events: none;

    textarea {
      --local-background-color: var(--woly-canvas-disabled);
      --local-border-color: var(--woly-shape-disabled);
      --local-value-color: var(--woly-canvas-text-disabled);
    }
  }

  &[data-overflow='true'] > textarea {
    overflow: auto;
  }

  &[data-resize='true'] > textarea {
    resize: both;
  }
` as StyledComponent<'textarea', Record<string, unknown>, TextAreaProps & Variant>;
