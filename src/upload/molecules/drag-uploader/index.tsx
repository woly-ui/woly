import * as React from 'react';
import styled from 'styled-components';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { Priority } from 'lib/types';

import { UploadArea } from '../../elements';

interface DragUploaderProps extends DropzoneOptions {
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

export const DragUploaderBase: React.FC<DragUploaderProps & Priority> = ({
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
      className={className}
      {...rootProps}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <UploadArea center={center} content={content} focus={focus} priority={priority} />
      <input data-file {...getInputProps()} />
    </div>
  );
};

export const DragUploader = styled(DragUploaderBase)`
  width: 100%;
  height: 100%;

  outline: none;

  input[data-file] {
    display: none;
  }
`;
