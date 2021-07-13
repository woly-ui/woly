import * as React from 'react';
import styled from 'styled-components';
import { Button } from 'ui/atoms';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Priority } from 'lib/types';

interface ButtonUploaderProps {
  accept?: DropzoneOptions['accept'];
  children?: never;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  maxFiles?: DropzoneOptions['maxFiles'];
  maxSize?: DropzoneOptions['maxFiles'];
  multiple?: DropzoneOptions['multiple'];
  onChange: DropzoneOptions['onDrop'];
  onDrop: never;
  validator?: DropzoneOptions['validator'];
  outlined?: boolean;
  text: string;
}

export const ButtonUploaderBase: React.FC<ButtonUploaderProps & Priority> = ({
  accept,
  className,
  disabled,
  icon,
  maxFiles,
  maxSize,
  multiple = false,
  onChange,
  outlined,
  text,
  priority = 'secondary',
  validator,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    disabled,
    maxFiles,
    maxSize,
    multiple,
    noDrag: true,
    onDrop: onChange,
    validator,
  });

  return (
    <div className={className} {...getRootProps()}>
      <Button text={text} disabled={disabled} icon={icon} outlined={outlined} priority={priority} />
      <input data-file {...getInputProps()} />
    </div>
  );
};

export const ButtonUploader = styled(ButtonUploaderBase)`
  outline: none;

  input[data-file] {
    display: none;
  }
`;
