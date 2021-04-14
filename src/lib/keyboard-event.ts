import React from 'react';

interface KeyboardEventProps {
  event: React.KeyboardEvent;
  keyHandler?: HandlerType;
  shiftKeyHandler?: HandlerType;
}

interface HandlerType {
  [key: string]: (event: React.SyntheticEvent<Element, Event>) => void;
}

const camelCase = (string: string) => string.charAt(0).toLowerCase() + string.slice(1);

export const keyboardEventHandle = ({ event, keyHandler, shiftKeyHandler }: KeyboardEventProps) => {
  const { shiftKey } = event;
  const key = camelCase(event.key);

  if (key && shiftKey && shiftKeyHandler && shiftKeyHandler.hasOwnProperty(key)) {
    shiftKeyHandler[key](event);
  }

  if (key && keyHandler && keyHandler.hasOwnProperty(key)) {
    keyHandler[key](event);
  }
};
