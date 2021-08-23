import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { ButtonIcon, Chip } from 'ui/atoms';
import { IconClose } from 'static/icons';
import { InputContainerBase, InputContainerProps } from 'ui/elements/input-container';
import { InputElement } from 'ui/elements';
import { Priority } from 'lib/types';
import { levelDowngrade } from 'lib/level-downgrade';

type MultiSelectOptions = React.OptionHTMLAttributes<HTMLOptionElement>;

interface InputChipProps {
  className?: string;
  disabled: boolean;
  leftIcon: React.ReactNode;
  name?: string;
  onBlur?: (value?: unknown) => void;
  onChange?: React.EventHandler<React.SyntheticEvent>;
  onChipClose: React.EventHandler<React.SyntheticEvent>;
  onClick: React.EventHandler<React.SyntheticEvent>;
  onFocus?: (value?: unknown) => void;
  options: Array<MultiSelectOptions>;
  rightIcon: React.ReactNode;
}

export const InputChipBase: React.FC<InputChipProps & Priority> = ({
  className,
  disabled = false,
  leftIcon,
  name = 'multiselect-input',
  onBlur,
  onChange,
  onChipClose,
  onClick,
  onFocus,
  options = [],
  priority = 'secondary',
  rightIcon,
}) => {
  if (!options) {
    return null;
  }

  let inputField = (
    <EmptyBox>
      <InputElement onChange={() => {}} name={name} type="text" disabled />
    </EmptyBox>
  );

  if (onChange) {
    inputField = <InputElement onChange={onChange} name={name} type="text" />;
  }

  return (
    <ChipsContainer
      className={className}
      disabled={disabled}
      leftIcon={leftIcon}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      priority={priority}
      rightIcon={rightIcon}
    >
      {options.map(({ id, label }) => (
        <div key={id} data-element="input-chip" {...levelDowngrade.setup()}>
          <Chip
            key={id}
            text={label}
            priority={priority}
            rightIcon={
              <ButtonIcon
                data-id={id}
                icon={<IconClose />}
                onClick={onChipClose}
                priority={priority}
              />
            }
            {...levelDowngrade.use({ diff: 2 })}
          />
        </div>
      ))}
      <div>{inputField}</div>
    </ChipsContainer>
  );
};

export const InputChip = styled(InputChipBase)`` as StyledComponent<
  'div',
  Record<string, unknown>,
  InputChipProps & Priority
>;

export const ChipsContainer = styled(InputContainerBase)`
  --local-gap: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-vertical: calc(
    1px * var(--woly-component-level) * var(--woly-main-level) - var(--woly-border-width)
  );
  --local-component-gap: calc(var(--woly-const-m) - var(--woly-border-width));

  [data-element='input'] {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: var(--local-component-gap);
  }

  & > * {
    padding: 0 var(--local-vertical);
  }

  [data-element='input-chip'] {
    padding-top: var(--local-component-gap);
    padding-right: var(--local-component-gap);
  }

  & > [data-box-role='icon']:first-child:not(:only-child) {
    padding-right: 0;
    padding-left: var(--local-vertical);
  }

  & > :not(:first-child) {
    padding-left: var(--local-gap);
  }
  & > [data-box-role='icon']:last-child:not(:only-child) {
    padding-right: var(--local-vertical);
    padding-left: 0;
  }
` as StyledComponent<'div', Record<string, unknown>, InputContainerProps & Priority>;

const EmptyBox = styled.div`
  width: 0;
`;
