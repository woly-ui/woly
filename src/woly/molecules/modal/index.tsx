import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Backdrop, Heading, Surface } from 'ui/atoms';
import { IconClose } from 'static/icons';
import { Priority } from 'lib/types';

interface ModalProps {
  className?: string;
  onClose?: React.EventHandler<React.SyntheticEvent>;
  title?: string;
  visible: boolean;
}

const ModalBase: React.FC<ModalProps & Priority> = ({
  children,
  className,
  onClose,
  priority = 'secondary',
  title,
  visible = false,
}) => {
  let icon = null;

  if (onClose) {
    icon = <IconClose onClick={onClose} data-icon="modal-close" />;
  }

  const onKeyDown = React.useCallback(
    (event) => {
      if (visible && onClose && event.key === 'Escape') {
        onClose(event);
      }
    },
    [visible],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className={className} data-priority={priority} data-visible={visible} tabIndex={-1}>
      <Backdrop onClick={onClose} />
      <Shape data-priority={priority}>
        {icon}
        <Heading size={2}>{title}</Heading>
        <div data-content>{children}</div>
      </Shape>
    </div>
  );
};

const Shape = styled(Surface)`
  position: relative;
  top: 50%;

  left: 50%;
  z-index: 1;

  box-sizing: border-box;

  width: fit-content;
  max-height: 100vh;
  padding: var(--local-padding-top) var(--local-padding) var(--local-padding);
  overflow: scroll;

  transform: translate(-50%, -50%);
`;

export const Modal = styled(ModalBase)`
  --local-icon-size: var(--woly-line-height);
  --local-icon-position: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-icon-padding: calc(1px * var(--woly-component-level) * var(--woly-main-level));

  --local-gap: calc(5px * var(--woly-component-level) * var(--woly-main-level));
  --local-padding: calc(var(--local-gap) - 1px * var(--woly-main-level));
  --local-padding-top: calc(
    var(--woly-const-m) * (var(--woly-component-level) + 1) + var(--local-padding)
  );
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  visibility: hidden;
  opacity: 0;

  &[data-visible='true'] {
    visibility: visible;
    opacity: 1;
  }

  [data-icon='modal-close'] {
    position: absolute;
    top: var(--local-icon-position);
    right: var(--local-icon-position);

    width: var(--local-icon-size);
    height: var(--local-icon-size);
    padding: var(--local-icon-padding);
  }

  [data-content] {
    padding-top: var(--local-gap);
  }
` as StyledComponent<'div', Record<string, unknown>, ModalProps & Priority>;
