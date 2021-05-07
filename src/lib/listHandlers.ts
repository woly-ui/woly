const LI_TAG = 'LI';

export const onKeyDown = (listNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document.activeElement?.nextElementSibling as HTMLElement)?.focus();
  } else {
    (listNode?.firstChild as HTMLElement)?.focus();
  }
};

export const onKeyUp = (listNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document?.activeElement?.previousElementSibling as HTMLElement)?.focus();
  } else {
    (listNode.lastChild as HTMLElement)?.focus();
  }
};

const onItemEnter = (listNode: HTMLElement) => () => {
  if (document.activeElement?.tagName === LI_TAG) {
    (document?.activeElement as HTMLElement).click();
  } else {
    (listNode?.lastChild as HTMLElement).focus();
  }
};

export const keyHandlerList = ({ listNode }: any) => ({
  arrowDown: onKeyDown(listNode),
  arrowUp: onKeyUp(listNode),
  enter: onItemEnter(listNode),
});
