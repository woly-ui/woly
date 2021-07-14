import React from 'react';

interface ScrollLockOptions {
  /**
   * If the overflow property of the body is set to hidden, the body widens by the width of the scrollbar (only on some OS, like Windows). This produces an unpleasant flickering effect, especially on websites with centered content. If the reserveScrollBarGap option is set, this gap is filled by a padding-right on the body element. If enableBodyScroll is called, the padding-right is automatically reset to the previous value.
   */
  reserveScrollBarGap?: boolean;
}

export const useScrollLock = (options: ScrollLockOptions = { reserveScrollBarGap: false }) => {
  const [lock, setLock] = React.useState<HTMLElement | null>(null);
  /**
   * Body could have different padding and overflow settings and they are saved prior disabling body's scroll. If enableBodyScroll is called, these styles are automatically reset to the previous values
   */
  const [previousBodyOverflowSetting, setPreviousBodyOverflowSetting] = React.useState<
    string | null
  >(null);
  const [previousBodyPaddingRight, setPreviousBodyPaddingRight] = React.useState<string | null>(
    null,
  );

  const setOverflowHidden = React.useCallback(() => {
    if (previousBodyPaddingRight === null) {
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (options.reserveScrollBarGap && scrollBarGap > 0) {
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

      setLock(targetElement);
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
