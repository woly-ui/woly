import React from 'react';
import styled, { Interpolation, css } from 'styled-components';

// type DOMTag = keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;

interface Variant<Props> {
  [caseName: string]: Interpolation<Props>;
}

// type DOMProperties<Tag> = Tag extends keyof HTMLElementTagNameMap
//   ? HTMLElementTagNameMap[Tag]
//   : Tag extends keyof SVGElementTagNameMap
//   ? SVGElementTagNameMap[Tag]
//   : never;

type DOMTag = keyof JSX.IntrinsicElements;
type DOMProperties<Tag extends DOMTag> = keyof JSX.IntrinsicElements[Tag];

interface Config<Tag extends DOMTag, Props, Variants extends Record<string, Variant<Props>>> {
  // mapVariants
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
  Props extends {},
  Variants extends Record<string, Variant<Props>>
>(
  tag: Tag,
  content: Interpolation<Props> | Interpolation<Props>[],
  config: Config<Tag, Props, Variants> = {},
): React.FC<Props> {
  const {
    defaults = {},
    variants = {},
    compound = [],
    // mapVariants = {},
    attrs,
    children: childrenComponent,
  } = config;

  const cssChunks: Interpolation<Props>[] = [];

  for (const [variantName, cases] of Object.entries(variants as Variants)) {
    for (const [caseName, interpolation] of Object.entries(cases)) {
      cssChunks.push(
        `&[data-${variantName}='${caseName}'] {
            ${interpolation}
          }
        `,
      );
    }
  }

  for (const { css, ...matchers } of compound) {
    const selector = ['&'];
    for (const [variantName, caseName] of Object.entries(matchers)) {
      selector.push(`[data-${variantName}="${caseName}"]`);
    }
    cssChunks.push(`${selector.join('')} { ${css} }`);
  }

  const d = styled[tag];
  d;

  // const tagLiteral = attrs ? styled[tag].attrs(attrs) : styled[tag];

  return () => null as any;
}

const Demo = component(
  'main',
  css`
    color: black;
  `,
  {
    // mapVariants: { demo: (count) => count > 0 ? 'demo' : 'second' },
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
