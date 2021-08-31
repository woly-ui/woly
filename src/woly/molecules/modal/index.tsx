import * as React from 'react';
import styled from 'styled-components';
import { Backdrop, ButtonIcon, Heading, Surface } from 'ui/atoms';
import { IconClose } from 'static/icons';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

import { useScrollLock } from './use-scroll-lock';

type BaseModalProps = React.BaseHTMLAttributes<HTMLDivElement> & Priority;

export type ModalProps = BaseModalProps & {
  onClose?: React.EventHandler<React.SyntheticEvent>;
  title?: string;
  visible: boolean;
};

// TODO: solve the ref forwarding problem [31-08-2021]
const ModalBase = ({
  children,
  onClose,
  priority = 'secondary',
  title,
  visible = false,
  ...rest
}: ModalProps) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const { disableScroll, enableScroll } = useScrollLock();

  React.useEffect(() => {
    if (!modalRef.current) return;

    if (visible) {
      disableScroll(modalRef.current);
    } else {
      enableScroll();
    }
  }, [visible]);

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
    <div ref={modalRef} data-priority={priority} data-visible={visible} tabIndex={-1} {...rest}>
      <Backdrop onClick={onClose} />
      <Shape data-priority={priority}>
        <div data-element="header">
          <Heading data-element="title" size={2}>
            {title}
          </Heading>
          {onClose && (
            <div data-button="modal-close">
              <ButtonIcon
                onClick={onClose}
                icon={<IconClose />}
                priority="default"
                weight="transparent"
              />
            </div>
          )}
        </div>
        <div data-element="content">{children}</div>
      </Shape>
    </div>
  );
};

const Shape = styled(Surface)`
  /* TODO: rewrite formulas [13.07.21]*/
  --local-inset-padding: 36px;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  min-width: calc((100% - (var(--local-inset-padding) * 2)) / 3);
  max-width: calc((100% - (var(--local-inset-padding) * 2)) / 3 * 2);

  max-height: 100%;
`;

export const Modal = styled(ModalBase)<ModalProps>`
  ${box};

  /* TODO: rewrite formulas [13.07.21]*/
  --local-gap: calc(3px * var(--woly-component-level) * var(--woly-main-level));
  --local-inset-padding: 36px;
  --local-vertical: calc(var(--woly-const-m) * (var(--woly-component-level) + 1));

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-height: 100vh;

  padding: var(--local-inset-padding);

  visibility: hidden;
  opacity: 0;

  &[data-visible='true'] {
    visibility: visible;
    opacity: 1;
  }

  [data-button='modal-close'] {
    --woly-component-level: 1;
    flex-shrink: 0;
  }

  [data-element='header'] {
    display: flex;
    align-items: center;
    width: 100%;
  }

  [data-element='title'] {
    flex: 1;

    & + [data-button='modal-close'] {
      margin-left: var(--local-gap);
    }
  }

  [data-element='content'] {
    padding-top: var(--local-gap);
    overflow: auto;
  }
`;
