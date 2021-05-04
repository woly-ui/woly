import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Backdrop, Heading, Surface } from 'ui/atoms';
import { CloseIcon } from 'icons';
import { Variant } from 'lib/types';

interface ModalProps {
  className?: string;
  onClose?: React.EventHandler<React.SyntheticEvent>;
  title?: string;
  visible: boolean;
}

const ModalBase: React.FC<ModalProps & Variant> = ({
  children,
  className,
  onClose,
  title,
  variant = 'secondary',
  visible = false,
}) => {
  let icon = null;

  if (onClose) {
    icon = <CloseIcon onClick={onClose} data-icon />;
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
    <div className={className} data-variant={variant} data-visible={visible} tabIndex={-1}>
      <Backdrop onClick={onClose} />
      <Surface data-variant={variant}>
        {icon}
        <Heading size={2}>{title}</Heading>
        <div data-content>{children}</div>
      </Surface>
    </div>
  );
};

export const Modal = styled(ModalBase)`
  --local-icon-size: var(--woly-line-height);
  --local-icon-position: calc(1px * var(--woly-component-level) * var(--woly-main-level));
  --local-icon-padding: calc(1px * var(--woly-component-level) * var(--woly-main-level));

  --local-gap: calc(5px * var(--woly-component-level) * var(--woly-main-level));
  --local-padding: calc(var(--local-gap) - 1px * var(--woly-main-level));
  --local-padding-top: calc(
    var(--woly-const-m) * (var(--woly-component-level)+1) + var(--local-padding)
  );

  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  &[data-visible='true'] {
    visibility: visible;
    opacity: 1;
  }

  ${Surface} {
    z-index: 1;
    padding: var(--local-padding-top) var(--local-padding) var(--local-padding);

    width: fit-content;
    position: relative;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 100vh;
    overflow: scroll;
    box-sizing: border-box;
  }

  [data-icon] {
    position: absolute;
    width: var(--local-icon-size);
    height: var(--local-icon-size);
    top: var(--local-icon-position);
    right: var(--local-icon-position);
    padding: var(--local-icon-padding);
  }

  [data-content] {
    padding-top: var(--local-gap);
  }
` as StyledComponent<'div', Record<string, unknown>, ModalProps & Variant>;
