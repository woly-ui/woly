import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { IconProfile } from 'static/icons';

import { useImageLoad } from './use-image-load';

interface AvatarProps {
  alt?: string;
  src?: string;
  srcSet?: string;
  children?: React.ReactNode;
}

const AvatarBase: React.FC<AvatarProps> = ({
  alt,
  children: childrenProp,
  src,
  srcSet,
  ...props
}) => {
  const loadFailed = useImageLoad({ src, srcSet });
  const hasImg = src || srcSet;
  let children = null;

  if (hasImg && !loadFailed) {
    children = <img alt={alt} src={src} srcSet={srcSet} />;
  } else if (childrenProp) {
    children = childrenProp;
  } else {
    // render fallback if image loading failed or no src attributes / children provided
    children = <Fallback />;
  }

  return <div {...props}>{children}</div>;
};

const Fallback = styled(IconProfile)`
  > circle:first-of-type {
    fill: var(--woly-text);
    fill-opacity: 0.1;
  }
`;

export const Avatar = styled(AvatarBase)`
  --local-size: calc((var(--woly-component-level) + 2) * 2 * var(--woly-const-m));

  width: var(--local-size);
  height: var(--local-size);

  & > * {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
` as StyledComponent<'div', Record<string, unknown>, AvatarProps>;
