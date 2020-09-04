---
name: button-floatiing
category: atoms
package: 'woly'
---

​
import \* as buttonFloating from './index';
​
ButtonFloating is placed at the bottom right side of the screen and contains an icon
​

## Using button-floating

​

### Installation

​

```shell
npm install woly
# or
yarn add woly
```

​

### Usage

​

```tsx
import { buttonFloating } from 'woly';
const Example = () => (
  <buttonFloating.Base
    icon={Icon}
    onClick={(event) => console.info('buttonFloating clicked')}
  />
);
```

​

### Kinds

​
| Name | Description |
| ------------- | ----------------------------------------------------------- |
| `Base` | Base round button at the bottom right side of the screen |

### Props

​
| Name | Type | Default | Description |
| ------- | ------------------------------- | --------------- | ---------------------------------------------------------- |
| `icon` | `React.ReactNode` | | Set the icon component inside the button |
| `onClick` | `React.MouseEventHandler<HTMLButtonElement>` | | Callback when button clicked |
| `...` | `HTMLButtonElementProps` | `{}` | Other props are inherited from `HTMLButtonElement` |
