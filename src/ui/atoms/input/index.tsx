import * as React from 'react';
import styled from 'styled-components';

import { closedEyeIcon, openEyeIcon } from '../../../static/icons';

type InputProps = {
  value: string;
  placeholder?: string;
  type?: string;
  name?: string;
  className?: string;
  onChange?: (e: React.SyntheticEvent) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  type,
  name,
  className,
  onChange,
}) => {
  const [isPassVisible, showPass] = React.useState(false);

  return (
    <ButtonWrap>
      <WolyInput
        value={value}
        type={isPassVisible ? 'text' : type}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      {type === 'password' && (
        <ShowPass
          isVisible={isPassVisible}
          onClick={() => showPass(!isPassVisible)}
        />
      )}
    </ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  position: relative;
  display: inline-block;
`;

const ShowPass = styled.div<{ isVisible: boolean }>`
  background-image: url(${(p) => (p.isVisible ? openEyeIcon : closedEyeIcon)});
  background-size: cover;
  position: absolute;
  height: 24px;
  width: 24px;
  right: 0;
  margin: auto 0;
  top: 0;
  bottom: -6px;
  cursor: pointer;
`;

const WolyInput = styled.input`
  font-size: 3.6rem;
  line-height: 48px;
  font-weight: 300;
  color: var(--text-color);

  &::placeholder {
    color: var(--conch);
  }
`;
