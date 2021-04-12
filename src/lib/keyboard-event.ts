import React from 'react';

interface KeyboardEventProps {
  event: React.KeyboardEvent;
  eventHandlers: EventHandlersProps;
}

interface EventHandlersProps {
  onArrowDown: () => void;
  onArrowUp: () => void;
  onEnter: () => void;
  onShiftArrowDown: () => void;
}

interface HandlerType {
  [key: string]: () => void;
}

const camelCase = (string: string) => string.charAt(0).toLowerCase() + string.slice(1);

export const keyboardEventHandle = ({ event, eventHandlers }: KeyboardEventProps) => {
  const { shiftKey } = event;
  const key = camelCase(event.key);
  const { onArrowDown, onArrowUp, onEnter, onShiftArrowDown } = eventHandlers;

  const keyHandler: HandlerType = {
    arrowDown: onArrowDown,
    arrowUp: onArrowUp,
    enter: onEnter,
  };

  const shiftKeyHandler: HandlerType = {
    arrowDown: onShiftArrowDown,
  };

  if (!keyHandler.hasOwnProperty(key) && !shiftKeyHandler.hasOwnProperty(key)) return;

  if (shiftKey) {
    shiftKeyHandler[key]();
  } else {
    keyHandler[key]();
  }
};
