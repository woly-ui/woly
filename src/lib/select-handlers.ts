interface GetSelectHandlersProps extends EnterProps {
  dropdownNode: HTMLElement;
}

interface EnterProps {
  isOpen: boolean;
  selectNode: HTMLElement;
  setIsOpen: () => void;
  onChange: React.EventHandler<React.SyntheticEvent>;
  event: React.KeyboardEvent;
}

const LI_TAG = 'LI';

const onArrowDown = (dropdownNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document.activeElement.nextElementSibling as HTMLElement)?.focus();
  } else {
    (dropdownNode.firstChild as HTMLElement)?.focus();
  }
};

const onArrowUp = (dropdownNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document.activeElement?.previousElementSibling as HTMLElement)?.focus();
  } else {
    (dropdownNode.lastChild as HTMLElement)?.focus();
  }
};

const onEnter = ({ isOpen, selectNode, setIsOpen, onChange, event }: EnterProps) => () => {
  if (isOpen && document.activeElement?.tagName === LI_TAG) {
    onChange(event);
  }

  setIsOpen();
  selectNode.focus();
};

export const selectHandlersGet = ({
  selectNode,
  dropdownNode,
  setIsOpen,
  isOpen,
  onChange,
  event,
}: GetSelectHandlersProps) => ({
  onArrowDown: onArrowDown(dropdownNode),
  onArrowUp: onArrowUp(dropdownNode),
  onEnter: onEnter({ isOpen, setIsOpen, selectNode, onChange, event }),
  onShiftArrowDown: setIsOpen,
});
