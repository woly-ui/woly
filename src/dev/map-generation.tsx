/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Global } from 'dev/global';
import { Grid, Heading } from 'ui';
import { useUniqueID } from 'lib/hooks';

import { ConfiguratorName, Configurators } from './configurators';

export type SizeProps = 'N' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'H';

type ComponentValuesType = string | boolean | SizeProps;

interface ComponentProps {
  name: string;
  values: Array<ComponentValuesType>;
}

interface GenerateMapProps {
  otherProps: Record<string, Array<unknown>>;
  sizes: ComponentProps;
  variants: ComponentProps;
  configurators: ConfiguratorName[];
}

interface SizesProps {
  size: SizeProps;
}

const map = ({ size }: SizesProps) => ({
  'data-size': size,
});

export const GenerateMap: React.FC<
  GenerateMapProps & { component: React.ComponentType<unknown> }
> = ({ configurators = ['color'], sizes, variants, otherProps, component }) => {
  const scopeId = useUniqueID();

  const Component = component;
  const variantsMap = generateMap({ y: sizes, x: variants, otherProps });

  if (!variantsMap) return null;

  return (
    <Main data-scope={scopeId}>
      <PlaygroundLayout>
        <PlaygroundContent>
          {variantsMap.map((variant, i) => (
            <VariantBlock key={i}>
              <Header>{variant.name}</Header>
              <GridTemplate columns={variant.columns}>
                <AreaVariants>
                  <div />
                  {/** TODO: replace */}
                  {variant.values[0].values.map(({ variants, sizes, ...prop }, headKey) => (
                    <div key={`head-${headKey}`}>{headCreate(prop)}</div>
                  ))}
                  {variant.values.map((props, j) => (
                    <>
                      <b>{props.name}</b>
                      {props.values.map((prop, propKey) => (
                        <SizeBlock size={props.name as SizeProps} key={j}>
                          <Component prop={prop} key={`prop-${propKey}`} />
                        </SizeBlock>
                      ))}
                    </>
                  ))}
                </AreaVariants>
              </GridTemplate>
            </VariantBlock>
          ))}
        </PlaygroundContent>
        <PlaygroundSideBar>
          <Configurators id={scopeId} for={configurators} />
        </PlaygroundSideBar>
      </PlaygroundLayout>
    </Main>
  );
};

/** TODO */
export const generateMap = ({ x, y, otherProps }: any) => {
  const result = [];

  if (x.values.length === 0 || y.values.length === 0) return;

  for (const valueX of x.values) {
    const yArr = [];
    let columns = 0;
    for (const valueY of y.values) {
      const main = { [x.name]: valueX, [y.name]: valueY };

      const map = generatePropsMap(main, otherProps);
      yArr.push({ name: valueY, values: map });
      columns = map.length + 1;
    }
    result.push({ name: valueX, values: yArr, columns });
  }
  return result;
};

const generatePropsMap = (
  main: Record<string, unknown>,
  otherProps: Record<string, Array<unknown>>,
) => {
  let tree = [main];

  Object.keys(otherProps).forEach((key: string) => {
    const values: Array<unknown> = otherProps[key];
    const buffer: Array<Record<string, unknown>> = [];

    values.forEach((value: unknown) => {
      const cloned = deepCopy(tree);
      cloned.forEach((item: Record<string, unknown>) => (item[key] = value));
      buffer.push(...cloned);
    });
    tree = buffer;
  });

  return tree;
};

const deepCopy = (obj: Array<Record<string, unknown>>) => JSON.parse(JSON.stringify(obj));

export const headCreate = (props: Record<string, unknown>) =>
  Object.keys(props).reduce((acc, key) => acc + (props[key] ? key + '\n' : ''), '');

const PlaygroundLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PlaygroundContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: auto;
`;

const PlaygroundSideBar = styled.div``;

const VariantBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled(Heading)`
  padding-bottom: 15px;
  padding-left: 5px;
`;

const GridTemplate = styled(Grid)`
  gap: 10px;
`;

const AreaVariants = styled(Grid)`
  gap: 10px;

  color: #c4c4c4;
  white-space: pre-line;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 5px;
  }
`;

export const Row = styled.div`
  display: flex;
  & > * {
    margin: 5px;
  }
`;

export const Main = styled(Global)`
  display: flex;
  overflow: scroll;

  white-space: nowrap;

  & + .prism-code {
    margin-top: 0;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const SizeBlock = styled.div.attrs(map)`
  display: flex;
  align-items: center;
  margin: 5px;
  --woly-font-size: 15px;

  &[data-size='N'] {
    --woly-component-level: 0;
  }
  &[data-size='XS'] {
    --woly-component-level: 1;
  }
  &[data-size='S'] {
    --woly-component-level: 2;
  }
  &[data-size='M'] {
    --woly-component-level: 3;
  }
  &[data-size='L'] {
    --woly-component-level: 4;
    --woly-font-size: 18px;
  }
  &[data-size='XL'] {
    --woly-component-level: 5;
    --woly-font-size: 21px;
  }
  &[data-size='H'] {
    --woly-component-level: 6;
    --woly-font-size: 21px;
  }
` as StyledComponent<'div', Record<string, unknown>, SizesProps>;
