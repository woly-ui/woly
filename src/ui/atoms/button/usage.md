---
name: button
category: atoms
package: 'woly'
---

​
import \* as button from './index';
​
Button allows users to take actions and make choices with a single tap.
​

## Using buttons

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
import { button } from 'woly';
const Example = () => (
  <button.Primary text="Hello world" onClick={(event) => console.info('Hi!')} />
);
```

​

### Kinds

​
| Name | Description |
| ------------- | ----------------------------------------------------------- |
| `Base` | Useful for creating a new kind of buttons |
| `Primary` | Main button on the page or surface (form, modal) |
| `Secondary` | Button with less priority, most useful button |
| `Destructive` | Button that delete something, or do irreversible operations |
​

### Props

​
| Name | Type | Default | Description |
| ------- | ------------------------------- | ---------- | ---------------------------------------------------------- |
| `text` | `React.ReactNode` | | Text appeared on the button |
| `left` | `React.ReactNode` | `null` | Component to show on the left side of the text (ex.: Icon) |
| `right` | `React.ReactNode` | `null` | Component on the right side of the text |
| `type` | `'button' | 'submit' | 'reset'` | `'button'` | HTML type of the button |
| `...` | `HTMLButtonElementProps` | `{}` | Other props are inherited from `HTMLButtonElement`
