interface GetSelectHandlersProps extends EnterProps {
  dropdownNode: HTMLElement;
}

interface EnterProps {
  isOpen: boolean;
  onChange: React.EventHandler<React.SyntheticEvent>;
  selectNode: HTMLElement;
  setIsOpen: () => void;
}

const LI_TAG = 'LI';

const onArrowDown = (dropdownNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document.activeElement.nextElementSibling as HTMLElement).focus();
  } else {
    (dropdownNode.firstChild as HTMLElement).focus();
  }
};

const onArrowUp = (dropdownNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document.activeElement.previousElementSibling as HTMLElement).focus();
  } else {
    (dropdownNode.lastChild as HTMLElement).focus();
  }
};

const onEnter = ({ isOpen, onChange, selectNode, setIsOpen }: EnterProps) => (
  event: React.SyntheticEvent<Element, Event>,
) => {
  if (isOpen && document.activeElement?.tagName === LI_TAG) {
    onChange(event);
  }
  setIsOpen();
  selectNode.focus();
};

export const keyHandlerGet = ({
  dropdownNode,
  isOpen,
  onChange,
  selectNode,
  setIsOpen,
}: GetSelectHandlersProps) => ({
  arrowDown: onArrowDown(dropdownNode),
  arrowUp: onArrowUp(dropdownNode),
  enter: onEnter({ selectNode, setIsOpen, isOpen, onChange }),
});
