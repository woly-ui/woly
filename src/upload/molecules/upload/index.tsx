import * as React from 'react';
import styled from 'styled-components';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Priority } from 'lib/types';

import { UploadArea } from '../../elements';

interface UploadProps extends DropzoneOptions {
  accept?: DropzoneOptions['accept'];
  center?: boolean;
  className: string;
  content: React.ReactNode;
  disabled?: DropzoneOptions['disabled'];
  maxFiles?: DropzoneOptions['maxFiles'];
  maxSize?: DropzoneOptions['maxSize'];
  multiple?: DropzoneOptions['multiple'];
  onDrop?: DropzoneOptions['onDrop'];
  validator?: DropzoneOptions['validator'];
}

export const UploadBase: React.FC<UploadProps & Priority> = ({
  accept,
  center = false,
  className,
  content,
  disabled = false,
  maxFiles,
  maxSize,
  multiple,
  onDrop,
  validator,
  priority = 'secondary',
}) => {
  const [focus, setFocus] = React.useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    disabled,
    maxFiles,
    maxSize,
    multiple,
    onDrop,
    validator,
  });

  const { ref, ...rootProps } = getRootProps();

  return (
    <div
      data-area
      className={className}
      {...rootProps}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <UploadArea
        center={center}
        className={className}
        content={content}
        focus={focus}
        priority={priority}
      />
      <input data-file {...getInputProps()} />
    </div>
  );
};

export const Upload = styled(UploadBase)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  outline: none;

  &[data-area] {
    width: 100%;
    height: 100%;
  }

  input[data-file] {
    display: none;
  }
`;