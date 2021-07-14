import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Backdrop, ButtonIcon, Heading, Surface } from 'ui/atoms';
import { IconClose } from 'static/icons';
import { Priority } from 'lib/types';
import { box } from 'ui/elements/box';

import { useScrollLock } from './use-scroll-lock';

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
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const { disableScroll, enableScroll, isScrollBlocked } = useScrollLock();

  React.useEffect(() => {
    if (!modalRef.current) return;

    if (visible) {
      disableScroll(modalRef.current);
    } else if (isScrollBlocked) {
      enableScroll();
    }
  }, [visible, isScrollBlocked]);

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
    <div
      className={className}
      data-priority={priority}
      data-visible={visible}
      tabIndex={-1}
      ref={modalRef}
    >
      <Backdrop onClick={onClose} />
      <Shape data-priority={priority}>
        <div data-header>
          <Heading data-title size={2}>
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
        <div data-content>{children}</div>
      </Shape>
    </div>
  );
};

const Shape = styled(Surface)`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  min-width: calc((100% - (var(--local-inset-padding) * 2)) / 3);
  max-width: calc((100% - (var(--local-inset-padding) * 2)) / 3 * 2);

  max-height: 100%;

  padding: var(--local-vertical) var(--local-horizontal);
`;

export const Modal = styled(ModalBase)`
  ${box}

  /* TODO: rewrite formulas [13.07.21]*/
  --local-gap: calc(3px * var(--woly-component-level) * var(--woly-main-level));
  --local-vertical: calc(var(--woly-const-m) * (var(--woly-component-level) + 1));
  --local-inset-padding: 36px;

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
  padding: --local-inset-padding;

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

  [data-header] {
    display: flex;
    align-items: center;
    width: 100%;
  }

  [data-title] {
    flex: 1;

    & + [data-button='modal-close'] {
      margin-left: var(--local-gap);
    }
  }

  [data-content] {
    padding-top: var(--local-gap);
    overflow: auto;
  }
` as StyledComponent<'div', Record<string, unknown>, ModalProps & Priority>;
