---
name: input
category: atoms
package: 'woly'
---

​
import \* as input from './index';
​
Input is a field to accept data from the user.
​

## Using input

Input is used to create form fields that accept user input.

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
import { input } from 'woly';
const Example = () => (
  <input.Base
    type="text"
    name="name"
    placeholder="Enter your name here"
    value={value}
    onChange={(event) => console.info('On input change')}
  />
);
```

​

### Kinds

​
| Name | Description |
| ------------- | ----------------------------------------------------------- |
| `Base` | Useful for creating a new kind of inputs |

​

### Props

​
| Name | Type | Default | Description |
| ------- | ------------------------------- | ---------- | ---------------------------------------------------------- |
| `type` | `text | password | email`| `text`| HTML type of the input |
| `name` | `string` | | Name attribute specifies a name of the input |
| `value` | `HTMLInputElement['value']` | `null` | Value of input field |
| `placeholder` | `string` | `null` | Text that appears when there is no value set |
| `onChange` | `(e: React.ChangeEvent<HTMLInputElement>) => unknown` | | Callback when user input |
| `disabled` | `boolean` | `null` | Whether the input is disabled |
