import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Variant } from 'lib/types';

interface CheckboxProps {
  className?: string;
  disabled?: boolean;
  icon: React.ReactNode;
  id: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  text?: string;
  color?: string;
}

const CheckboxBase: React.FC<CheckboxProps & Variant> = ({
  className,
  color,
  disabled,
  icon,
  id,
  isChecked,
  onChange,
  text,
  variant = 'default',
}) => (
  <label htmlFor={id} className={className} data-variant={variant}>
    <div data-block="container" data-disabled={disabled}>
      <input type="checkbox" onChange={onChange} id={id} checked={isChecked} />
      <span data-block="checkmark" data-color={color}>{icon}</span>
    </div>
    {text && <span>{text}</span>}
  </label>
);

export const Checkbox = styled(CheckboxBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );

  display: flex;
  padding: var(--woly-vertical, 6.4px) var(--woly-horizontal, 6.4px);

    align-items: center;
    display: flex;
    flex-direction: row;
    user-select: none;

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  
  [data-block="checkmark"]{
    fill: none;
    stroke: ${(props) => (props.color || "#fff")};
    stroke-width: 1px;
    visibility: ${(props) => (props.isChecked ? "visible" : "hidden")};
    
    position: absolute;

    left: 3px;
    top: -1px;
    
    width: 8px;
    height: 4px;
  }
    
  [data-block="container"]{
    position: relative;

    height: 18px;
    width: 18px;
    flex: 18px 0 0;
    
    background: ${(p) => (p.isChecked ? "var(--woly-canvas, #b0A3f4)": "transparent")};
    border: solid 1px;
    border-color: ${(p) => (p.isChecked ? "var(--woly-border, #b0A3f4)" : "var(--woly-border, #c4c4c4)")};
    border-radius: 3px;
    
    cursor: pointer;
    margin-right: var(--woly-gap, 9px);
    
    transition: all 150ms;

   &:hover {
    background: ${(p) => (p.isChecked ? "var(--woly-canvas, #683aef)" : "transparent")};
    border-color: ${(p) => (p.isChecked ? "var(--woly-border, #683aef)" : "var(--woly-canvas, #000000)")};
  }

    &[data-disabled='true']{
      background: var(--woly-background-disabled, #E4E4E4);
      border-color: var(
        --woly-border-disabled,
          var(--woly-background-disabled, #E4E4E4)
        );
      cursor: not-allowed;
    }

  span{
    font-size: var(--woly-font-size, 12px);
    line-height: var(--woly-line-height, 24px);

    color: var(--woly-color, #000000);
  }
}
`as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;


export const CheckboxSecondVariant = styled(CheckboxBase)`
  --woly-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level)
  );
  --woly-horizontal: calc(
    var(--woly-const-m) + (1px * var(--woly-main-level)) + var(--woly-vertical)
  );
  --woly-gap: calc(
    (1px * var(--woly-main-level)) +
      (1px * var(--woly-main-level) * var(--woly-component-level))
  );
  
  display: flex;
  padding: var(--woly-vertical, 6.4px) var(--woly-horizontal, 6.4px);
  

  [data-block="container"]{
    display: flex;
    align-items: center;

    position: relative;
    margin-right: var(--woly-gap, 6px);

    cursor: pointer;

    transition: all 150ms;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
  }

  input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  [data-block="checkmark"]{
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    
    border: solid #C4C4C4;
    border-width: 1.5px;
    border-radius: 3px;
  }
  
  /* On mouse-over, add a grey background color */
  [data-block="container"]:hover input ~ [data-block="checkmark"] {
    border: solid #ccc;
    border-width: 2px;
  }
  
  /* When the checkbox is checked, add a blue background */
  [data-block="container"] input:checked ~ [data-block="checkmark"] {
    background-color: #B0A3F4;
    border: solid #B0A3F4;
    border-width: 1.5px;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  [data-block="checkmark"]:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  [data-block="container"] input:checked ~ [data-block="checkmark"]:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  [data-block="container"] [data-block="checkmark"]:after {
    left: 4px;
    top: 5px;
    
    width: 8px;
    height: 4px;
    
    border: solid white;
    border-width: 0 0 1.5px 1.5px;
    
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
` as StyledComponent<'div', Record<string, unknown>, CheckboxProps & Variant>;
