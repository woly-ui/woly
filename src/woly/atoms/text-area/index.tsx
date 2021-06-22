import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Priority } from 'lib/types';
import { box } from 'ui/elements';

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

const TextAreaBase: React.FC<TextAreaProps & Priority> = ({
  className,
  cols,
  disabled,
  maxLength,
  minlength,
  name,
  onChange,
  overflow,
  placeholder,
  priority = 'secondary',
  ref,
  resize,
  rows,
  value,
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
      data-priority={priority}
      tabIndex={tabIndex}
      data-overflow={overflow}
      data-resize={resize}
      ref={textAreaRef}
    >
      <textarea
        cols={cols}
        data-priority={priority}
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
  --local-border-color: var(--woly-shape-default);
  --local-background-color: var(--woly-canvas-default);
  --local-text-color: var(--woly-canvas-text-default);
  ${box}

  textarea {
    width: 100%;
    padding: 0;

    color: var(--local-text-color);

    font-size: var(--woly-font-size);
    line-height: var(--woly-line-height);

    background-color: var(--local-background-color);

    border: none;
    outline: none;

    &::placeholder {
      color: var(--woly-neutral);
    }
  }

  box-sizing: border-box;

  width: 100%;

  overflow: hidden;

  background-color: var(--local-background-color);

  border: var(--woly-border-width) solid var(--local-border-color);
  border-radius: var(--woly-rounding);

  outline: none;

  resize: none;

  &:focus {
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
    pointer-events: none;

    --local-background-color: var(--woly-canvas-disabled);
    --local-border-color: var(--woly-canvas-disabled);
    --local-text-color: var(--woly-canvas-text-disabled);
  }

  &[data-overflow='true'] > textarea {
    overflow: auto;
  }

  &[data-resize='true'] > textarea {
    resize: both;
  }
` as StyledComponent<'textarea', Record<string, unknown>, TextAreaProps & Priority>;
