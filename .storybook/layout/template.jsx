import * as React from 'react';
import styled from 'styled-components';

export const Wrap = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  padding: 24px;
`;
