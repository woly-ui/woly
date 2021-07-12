import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Backdrop, ButtonIcon, Heading, Surface } from 'ui/atoms';
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
        <div data-header>
          <Heading data-title size={2}>
            {title}
          </Heading>
          {onClose && (
            <div data-button="modal-close">
              <ButtonIcon onClick={onClose} icon={<IconClose />} />
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
  min-width: 20%;
  max-width: 70%;
  max-height: 100%;

  padding: var(--local-vertical) var(--local-horizontal);
`;

export const Modal = styled(ModalBase)`
  --local-gap: calc(3px * var(--woly-component-level) * var(--woly-main-level));
  --local-horizontal: calc(var(--local-gap) - 1px * var(--woly-main-level));
  --local-vertical: calc(var(--woly-const-m) * (var(--woly-component-level) + 1));

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-height: 100vh;
  padding: 20px;

  visibility: hidden;
  opacity: 0;

  -webkit-overflow-scrolling: touch;

  &[data-visible='true'] {
    visibility: visible;
    opacity: 1;
  }

  [data-button='modal-close'] {
    --woly-component-level: 1;
    margin-left: auto;
  }

  [data-header] {
    display: flex;
    width: 100%;
    padding-right: calc(var(--local-compensate) * 2 + var(--woly-line-height));
  }

  [data-title] {
    max-width: calc(36px * var(--woly-component-level) * var(--woly-main-level));

    & + [data-button='modal-close'] {
      margin-left: var(--local-gap);
    }
  }

  [data-content] {
    padding-top: var(--local-gap);
    overflow-x: hidden;
    overflow-y: auto;
  }
` as StyledComponent<'div', Record<string, unknown>, ModalProps & Priority>;
