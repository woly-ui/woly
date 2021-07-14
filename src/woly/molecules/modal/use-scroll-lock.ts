import React from 'react';

interface ScrollLockOptions {
  reserveScrollBarGap?: boolean;
}

export const useScrollLock = (options: ScrollLockOptions = { reserveScrollBarGap: false }) => {
  const [lock, setLock] = React.useState<HTMLElement | null>(null);
  const [previousBodyOverflowSetting, setPreviousBodyOverflowSetting] = React.useState<
    string | null
  >(null);
  const [previousBodyPaddingRight, setPreviousBodyPaddingRight] = React.useState<string | null>(
    null,
  );

  const setOverflowHidden = React.useCallback(() => {
    if (previousBodyPaddingRight === null) {
      const reserveScrollBarGap = options.reserveScrollBarGap === true;
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (reserveScrollBarGap && scrollBarGap > 0) {
        const computedBodyPaddingRight = Number.parseInt(
          window.getComputedStyle(document.body).getPropertyValue('padding-right'),
          10,
        );
        setPreviousBodyPaddingRight(document.body.style.paddingRight);
        document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarGap}px`;
      }
    }

    if (previousBodyOverflowSetting === null) {
      setPreviousBodyOverflowSetting(document.body.style.overflow);
      document.body.style.overflow = 'hidden';
    }
  }, [previousBodyPaddingRight, previousBodyOverflowSetting]);

  const disableScroll = React.useCallback(
    (targetElement: HTMLElement) => {
      if (lock === targetElement) {
        return;
      }

      setLock(lock);
      setOverflowHidden();
    },
    [lock],
  );

  const restoreOverflowSetting = React.useCallback(() => {
    if (previousBodyPaddingRight !== null) {
      document.body.style.paddingRight = previousBodyPaddingRight;

      setPreviousBodyPaddingRight(null);
    }

    if (previousBodyOverflowSetting !== null) {
      document.body.style.overflow = previousBodyOverflowSetting;

      setPreviousBodyOverflowSetting(null);
    }
  }, [previousBodyPaddingRight, previousBodyOverflowSetting]);

  const enableScroll = () => {
    setLock(null);
    restoreOverflowSetting();
  };

  return { enableScroll, disableScroll };
};
