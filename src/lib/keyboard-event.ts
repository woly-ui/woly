import React from 'react';

interface KeyboardEventProps {
  event: React.KeyboardEvent;
  keyHandler?: Handler;
  shiftKeyHandler?: Handler;
}

interface Handler {
  [key: string]: (event: React.KeyboardEvent) => void;
}

const camelCase = (string: string) => string.charAt(0).toLowerCase() + string.slice(1);

const hasHandler = (handler: Handler, key: string) => {
  return Object.prototype.hasOwnProperty.call(handler, key);
};

export const keyboardEventHandle = ({ event, keyHandler, shiftKeyHandler }: KeyboardEventProps) => {
  const { shiftKey } = event;
  const key = camelCase(event.key);

  if (key && shiftKey && shiftKeyHandler && hasHandler(shiftKeyHandler, key)) {
    shiftKeyHandler[key](event);
  }

  if (key && keyHandler && hasHandler(keyHandler, key)) {
    keyHandler[key](event);
  }
};
