import * as React from 'react';
import styled from 'styled-components';

import { Branch } from '../../../lib/branch';
import { closedEyeIcon, openEyeIcon } from '../../../static/icons';

type InputProps = {
  value: HTMLInputElement['value'];
  placeholder?: string;
  type?: HTMLInputElement['type'];
  name?: string;
  disabled?: boolean;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  type = 'text',
  name,
  disabled,
  className,
  onChange,
}) => {
  const [isPassVisible, showPass] = React.useState(false);
  const togglePass = React.useCallback(() => showPass((is) => !is), []);

  return (
    <ButtonWrap>
      <WolyInput
        className={className}
        disabled={disabled}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={isPassVisible && type === 'password' ? 'text' : type}
        value={value}
      />
      <Branch if={type === 'password'}>
        <ShowPass data-visible={isPassVisible} onClick={togglePass} />
      </Branch>
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  position: relative;
  display: block;
`;

const ShowPass = styled.div`
  background-image: url(${closedEyeIcon});
  background-size: cover;
  bottom: -6px;
  cursor: pointer;
  height: 24px;
  margin: auto 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;

  &[data-visible='true'] {
    background-image: url(${openEyeIcon});
  }
`;

const WolyInput = styled.input`
  box-sizing: border-box;
  color: var(--text-color);
  font-size: var(--input-font-size);
  line-height: var(--input-line-height);
  width: 100%;

  &::placeholder {
    color: var(--conch);
  }
`;
