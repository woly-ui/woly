import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'ui/atoms';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Priority } from 'lib/types';

interface UploadButtonProps {
  accept?: DropzoneOptions['accept'];
  children?: never;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  maxFiles?: DropzoneOptions['maxFiles'];
  maxSize?: DropzoneOptions['maxFiles'];
  onChange: DropzoneOptions['onDrop'];
  onDrop: never;
  validator?: DropzoneOptions['validator'];
  outlined?: boolean;
  text: React.ReactNode;
}

export const UploadButtonBase: React.FC<UploadButtonProps & Priority> = ({
  accept,
  className,
  disabled,
  icon,
  maxFiles,
  maxSize,
  onChange,
  outlined,
  text,
  priority = 'secondary',
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    disabled,
    maxFiles,
    maxSize,
    noDrag: true,
    onDrop: onChange,
  });

  return (
    <div className={className} {...getRootProps()}>
      <Button text={text} disabled={disabled} icon={icon} outlined={outlined} priority={priority} />
      <input data-file {...getInputProps()} />
    </div>
  );
};

export const UploadButton = styled(UploadButtonBase)`
  outline: none;

  input[data-file] {
    display: none;
  }
`;
