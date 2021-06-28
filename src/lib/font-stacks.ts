import { css } from 'styled-components';

export const systemUi = css`
  @font-face {
    font-family: system-stack-emoji;
    unicode-range: U+1F300-1F5FF, U+1F600-1F64F, U+1F680-1F6FF, U+2600-26FF;
    /* Edge fix */
    src: local('Segoe UI Emoji'); /* Windows 8.1+ */
    /* prettier-ignore */
    src:
      /* MacOS, iOS */
      local("Apple Color Emoji"),
      /* Windows 8.1+ */
      local("Segoe UI Emoji"),
      /* Android */
      local("Noto Color Emoji")
      local("Android Emoji"),
      /* Linux */
      local("Emoji One Color"),
      local("Twitter Color Emoji"),
      local("EmojiSymbols"),
      local("Symbola");
  }

  @font-face {
    font-weight: 300;
    font-family: system-stack-sans-serif;
    font-style: normal;
    /* prettier-ignore */
    src:
    /* MacOS, iOS */
      local(".SFNSText-Light"),                   /* El Capitan */
      local(".HelveticaNeueDeskInterface-Light"), /* Yosemite */
      local(".LucidaGrandeUI"),                   /* Mavericks */
      /* Windows */
      local("Segoe UI Light"),  /* Since Vista */
      local("Tahoma"),          /* Until XP */
      /* Android */
      local("Roboto-Light"), /* Since 4.0 */
      local("Droid Sans"),   /* Until 3.2 */
      /* Linux */
      local("Ubuntu Light"), /* Ubuntu */
      local("Oxygen"),       /* KDE */
      local("Cantarell"); /* Gnome */
  }

  /* prettier-ignore */
  --system-ui:
    /* Always render emoji first */
    system-stack-emoji,
    /* CSS Fonts Level 4 generic */
    system-ui,
    /* Safari (MacOS 10.11+, iOS 9+)
    */ -apple-system-body,
    /* Chrome until 55, Opera until 42 (MacOS) */
    BlinkMacSystemFont,
    /* Fallback to local fonts */
    system-stack-sans-serif,
    /* In case all else fails */
    sans-serif;
`;
