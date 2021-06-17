import React from 'react';
import styled from 'styled-components';
import { IconProfile } from 'static/icons';

import { useImageLoad } from './use-image-load';

const AvatarContainer = styled.div`
  --local-size: calc((var(--woly-component-level) + 2) * 2 * var(--woly-const-m));

  width: var(--local-size);
  height: var(--local-size);

  & > * {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
`;

interface AvatarProps {
  alt?: string;
  src?: string;
  srcSet?: string;
  children?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ alt, src, srcSet, children: childrenProp }) => {
  const loadFailed = useImageLoad({ src, srcSet });
  const hasImg = src || srcSet;
  let children = null;

  if (hasImg && !loadFailed) {
    children = <img alt={alt} src={src} srcSet={srcSet} />;
  } else if (childrenProp) {
    children = childrenProp;
  } else {
    // render fallback if image loading failed or no src attributes / children provided
    children = <IconProfile />;
  }

  return <AvatarContainer>{children}</AvatarContainer>;
};
