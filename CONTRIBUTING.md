# Участие в разработке

Woly это система компонентов, основной целью которой является гибкая настройка внешнего вида всех компонентов через темизацию. Предполагается, что пользователь задает базовую мета-информацию в виде конфига, а система компонентов сгенерирует из него пачку css-custom-properties, которые будут использованы в компонентах.

## Варианты

Система предполагает наличие разных цветовых вариантов каждого компонента: primary, secondary, error, и т.д.

- Каждый вариант имеет свое предназначение и область использования.
- Пользователь может добавить новые варианты при конфигурации системы, без изменения исходного кода Woly.

Вариант компонента выбирается непосредственно при использовании компонента, например так:

```jsx
<>
<Button variant="primary" />
<Button variant="custom" />
</>
```

Чтобы не зашивать все доступные варианты в исходный код компонента(а это еще и не возможно, потому что пользователь может задавать свои варианты), стиль варианта описывается в глобальных(конфигурационных) стилях.

Работает это так:

1. при передаче параметра `variant` в компонент, устанавливается data-атрибут `data-variant` с переданным значением
1. в самом компоненте нет никакой информации о вариантах, только установка атрибута
1. в глобальных стилях, на каждый вариант добавляется css-selector `[data-variant="value"]`, где вместо value указано актуальное имя варианта
1. в этом селекторе не добавляются новые стили, а изменяются/назначаются значения **существующих** css-custom-properties. Новые добавлять нельзя

Выглядит это так, в примере использован ограниченный набор свойств, для краткости:

```css
/* Объявляем базовый набор свойств, которые будут использовать ВСЕ компоненты */
--woly-background-color: black;
--woly-text-color: white;

/* Теперь описываем вариант */

[data-variant='primary'] {
  --woly-background-color: blue;
  --woly-text-color: white;
}
```

Здесь необходимо заметить, что в описании варианта не должно появляться новых свойств, не описанных в базовом наборе. А также не должны отсутствовать свойства из базового набора, даже если они совпадают по цвету, так можно защитить вариант от изменений базового набора.
В идеале, каждый вариант должен быть автоматически сгенерирован с помощью функции `theme`, чтобы не приходилось контроллировать соответствия вручную.

Компонент для стилизации использует только custom-properties из заранее заданного набора, таким образом можно стилизовать компонент без информации о выбранном варианте. При этом, в базовом наборе свойств вариантов не должно быть информации о компонентах системы. Тема должна позволять добавлять новые компоненты исключительно на основе уже существюущих свойств, без необходимости расширять набор custom-properties.

Например:

```css
/* 🚫 */
--woly-label-color: black;
--woly-primary-text-color: blue;
```

## Компоненты

Обычно для сложных компонентов привычно использовать несколько styled на каждый вложенный блок:

```jsx
export const Compound = (props) => (
  <Container size={props.size}>
    <Title>{props.title}</Title>
    <Content>{props.content}</Content>
    {props.error ? <Fail>{props.error}</Fail> : null}
  </Container>
)

const Title = styled.div``
const Content = styled.div``
const Fail = styled.div``

const Container = styled.div`
  display: grid;
  width: ${p => p.size === 'wide' ? '100%' : 'auto'};

  ${Title} {
    grid-column: span 2;
  }

  ${Content} {
    grid-row: 1 / 2;
  }

  ${Fail} {
    padding-top: 1rem;
  }
`
```

> Это утрированный пример

Но в случае большого и сложного приложения, этот подход оказывается слишком медленным с точки зрения перформанса.
На небольших экранах и редких рендерах разница не заметна, но при частых обновлениях и большом количестве компонентов, появляются заметные подтормаживания интерфейса. Это происходит из-за пересчитывания стилей styled-компонентов, при изменении props необходимо высчитать новые стили и применить изменения в тег `style`. Особенно если используется React Context, ведь тогда полноценная модульность реализуется через вложенные контексты и реакт вынужден объединять большие объекты, на каждое изменение темы или вложенности блоков, всё это сильно замедляет интерфейс.

### Только один styled на каждый компонент

Дабы уменьшить количество перерасчетов на один компонент Woly и упростить миграцию со styled на foliage в будущем, необходимо создавать только один styled-компонент при описании компонента Woly.

```jsx
const CompoundBase = (props) => (
  <div className={props.className}>
    <div data-title>{props.title}</div>
    <div data-content>{props.content}</div>
    {props.error ? <div data-error>{props.error}</div> : null}
  </div>
)

export const Compound = styled(CompoundBase)`
  display: grid;
  width: ${p => p.size === 'wide' ? '100%' : 'auto'};

  [data-title] {
    grid-column: span 2;
  }

  [data-content] {
    grid-row: 1 / 2;
  }

  [data-error] {
    padding-top: 1rem;
  }
`
```

Таким образом мы убрали необходимость в использовании `${Fail}` отсылок на другие компоненты и упростили описание всего блока, пересчитываться будет только один styled-компоненте. Из-за особенностей styled-components, необходимо выделить верстку в отдельный компонент с суффиксом `Base` и пробросить `className` на корневой элемент, иначе стили не применятся.

### Никаких функций от props внутри styled

Во время использования `width: ${p => p.size === 'wide' ? '100%' : 'auto'};` при описании styled-компонента, движок вынужден пересчитывать стили при каждом изменении props, иначе ему просто невозможно составить валидный css без компиляции. Конечно же, styled имеет мемоизацию и различные оптимизации, например, при перерендере styled-компонента он проверит, вернула ли описанная выше функция то же самое значение, что было раньше, если да, то пересчета стилей не будет. Иначе, он будет вынужден составить новую длинную строку из всего описания styled-компонента, распарсит его в ast, добавит префиксы и класс с хешем в стиле `.asd123` и только затем добавит новые стили в тег `style`.

Всё это весьма долгая операция, хоть и не заметная на малых масштабах. Очень желательно свести компиляцию стилей в рантайме к минимуму — один раз, при старте приложения. Отказ от функций от props позволяет это реализовать, никакая операция не вынудит styled перекомпилировать стили. Пример, который был описан выше, реализуется через data-attributes:

```jsx
const CompoundBase = (props) => (
  <div className={props.className} data-size={props.size}>
    <div data-title>{props.title}</div>
    <div data-content>{props.content}</div>
    {props.error ? <div data-error>{props.error}</div> : null}
  </div>
)

export const Compound = styled(CompoundBase)`
  display: grid;
  width: auto;

  &[data-size="wide"] {
    width: 100%;
  }

  [data-title] {
    grid-column: span 2;
  }

  [data-content] {
    grid-row: 1 / 2;
  }

  [data-error] {
    padding-top: 1rem;
  }
`
```

Здесь, сразу в css описываются доступные варианты отображения компонента, прошу заметить, что `&` перед `[data-size="wide"]` необходим, так как атрибут `data-size` указан на корневом элементе(на котором есть `className`).
Для свойств с boolean значениями, можно использовать `"true"` и `"false"`, например так:

```css
&[data-expanded='true'] {
  display: flex;
}

&[data-expanded='false'] {
  display: none;
}
```

Если свойство передаваемое в компонент может быть опциональным, необходимо задавать ему значение по умолчанию:

```jsx
const Component = ({ className, expanded = false }) => (
  <div className={className} data-expanded={expanded} />
)
// OR
const Component = (props) => (
  <div className={props.className} data-expanded={props.expanded ?? false} />
)
```

> `??` здесь используется именно для проверки значения на `null` или `undefined`
> оператор `||` вставит значение справа, даже если передано значение `false`, `0` или пустая строка `""`

### Переиспользование custom-properties

> Не рекомендуется использовать вместе со styled-components!
> Инструкция подготовлена для использования вместе с foliage-react

Зачастую хочется не копировать названия css-custom-properties, а взять их как переменные/константы, чтобы не попасть под действие опечаток или рефакторинга, в этом случае, можно вынести все переменные в объект и использовать их внутри `css` блоков:

```ts
// vars.ts
export const colors = {
  background: {
    color: '--woly-background-color',
    hover: '--woly-background-hover',
  },
  text: {
    color: '--woly-text-color',
    hover: '--woly-text-hover',
  },
};
```

```ts
// component.ts
import { css } from 'foliage-react'
import { colors } from 'lib/vars'

const component = css`
  color: var(${colors.text.color});
  background-color: var(${colors.background.color});

  &:hover {
    color: var(${colors.text.hover});
    background-color: var(${colors.background.hover});
  }
`
```

Использование переменных обязательно заворачивать в `var()`!