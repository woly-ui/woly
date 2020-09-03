---
name: label
category: atoms
package: 'woly'
---

​
import \* as label from './index';
​
Label is a description text for located near interactive component.
​

## Using buttons

Label can be passed as a property to a Checkbox or a Toggle component.
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
import { label } from 'woly';
const Example = () => <label.Base text="Label" />;
```

​

### Kinds

​
| Name | Description |
| ------------- | ----------------------------------------------------------- |
| `Base` | Base label. Useful for creating a new kind of label |

### Props

​
| Name | Type | Default | Description |
| ------- | ------------------------------- | ---------- | ---------------------------------------------------------- |
| `text` | `React.ReactNode` | | Label text |
