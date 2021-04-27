import React from 'react';
import styled, { Interpolation, css } from 'styled-components';

type DOMTag = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;

interface Variant<Props> {
  [caseName: string]: Interpolation<Props>;
}

type DOMProperties<Tag> = Tag extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[Tag]
  : Tag extends keyof SVGElementTagNameMap
  ? SVGElementTagNameMap[Tag]
  : never;

interface Config<Tag extends DOMTag, Props, Variants extends Record<string, Variant<Props>>> {
  attrs?: Partial<DOMProperties<Tag>>;
  variants?: Variants;
  defaults?: { [VariantKey in keyof Variants]?: keyof Variants[VariantKey] };
  compound?: Array<
    {
      [VariantKey in keyof Variants]?: keyof Variants[VariantKey];
    } & { css: Interpolation<Props> }
  >;
  children?: React.FC<Props>;
}

export function component<
  Tag extends DOMTag,
  Props,
  Variants extends Record<string, Variant<Props>>
>(
  tag: Tag,
  content: Interpolation<Props> | Interpolation<Props>[],
  config: Config<Tag, Props, Variants> = {},
): React.FC<Props> {
  return null as any;
}

const Demo = component(
  'main',
  css`
    color: black;
  `,
  {
    variants: {
      demo: {
        first: css`
          width: 20px;
        `,
        second: css`
          width: 10px;
        `,
      },
      size: {
        big: css``,
        small: css``,
      },
    },
    defaults: { demo: 'first' },
    attrs: { tabIndex: 0 },
    compound: [
      {
        css: css``,
        demo: 'first',
        size: 'small',
      },
    ],
  },
);
