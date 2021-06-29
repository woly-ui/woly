import React from 'react';
import styled from 'styled-components';

import { Global } from './global';

export const Sizes = ['N', 'XS', 'S', 'M', 'L', 'XL', 'H'] as const;
export const Priorities = ['primary', 'secondary', 'tertiary'];

type ArrayElement<
  ArrayType extends readonly unknown[]
> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type PropVariants = Record<string, readonly unknown[]>;

interface StateMapProps<Props extends PropVariants> {
  groupByProp: keyof Props & string;
  propVariations: Props;
  render: (
    variant: {
      [Key in keyof Props]: ArrayElement<Props[Key]>;
    },
  ) => React.ReactElement;
  style?: React.CSSProperties;
}

export function StateMap<Props extends PropVariants>({
  groupByProp,
  propVariations,
  style,
  render,
}: StateMapProps<Props>) {
  const allVariations = combinations(propVariations);
  const groups = Object.entries(groupByKey(allVariations, groupByProp));

  return (
    <Global>
      <div className="state-map">
        {groups.map(([groupName, variations]) => {
          return (
            <StateMapGroup key={groupName} className="state-map__group" data-group-name={groupName}>
              {variations.map((variationProps, index) => {
                const dataProps = dataPropsFromObject(variationProps);

                return (
                  <StateMapVariant
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...dataProps}
                    style={style}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${groupName}-${index}`}
                    className="state-map__variant"
                  >
                    {
                      // TODO: better typings
                      render(variationProps)
                    }
                  </StateMapVariant>
                );
              })}
            </StateMapGroup>
          );
        })}
      </div>
    </Global>
  );
}

const StateMapGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const StateMapVariant = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

// https://github.com/evgenykochetkov/react-storybook-addon-props-combinations/blob/master/src/utils.js

function flatMap<T>(arr: Array<T>, fn: (value: T, index: number, array: Array<T>) => Array<T>) {
  return arr.map(fn).reduce((a, b) => a.concat(b));
}

/**
 * Takes an object with a shape of {fieldName: arrayOfPossibleValues}
 * and returns an array of objects with all possible combinations
 * of field values
 *
 * eg: passing {foo: [1, 2], bar: ['a', 'b']} will return
 * [
 *  {foo: 1, bar: "a"},
 *  {foo: 1, bar: "b"},
 *  {foo: 2, bar: "a"},
 *  {foo: 2, bar: "b"}
 * ]
 */
function combinations(propCombinations: Record<string, readonly unknown[]>) {
  const fieldNames = Object.keys(propCombinations);

  if (fieldNames.length === 0) return [{}];

  function _combinations<Combination extends string[]>(
    [currentPropName, ...restPropNames]: Combination,
    combinations: Record<string, unknown[]>,
  ): Record<string, unknown>[] {
    const variationsForProp = propCombinations[currentPropName];

    if (!Array.isArray(variationsForProp) || variationsForProp.length === 0) {
      throw new Error(
        `Please provide a non-empty array of possible values for prop ${currentPropName}`,
      );
    }

    const variation = variationsForProp.map((fieldValue) => ({
      ...combinations,
      [currentPropName]: fieldValue,
    }));

    if (restPropNames.length === 0) {
      return variation;
    }

    return flatMap(variation, (newAcc) => _combinations(restPropNames, newAcc));
  }

  return _combinations(fieldNames, {});
}

function dataPropsFromObject<O extends Record<string, unknown>>(obj: O) {
  return Object.keys(obj).reduce<Record<string, unknown>>((result, key) => {
    result[`data-${key}`] = obj[key];

    return result;
  }, {});
}

function groupByKey<Variants extends Record<string, unknown>, Key extends keyof Variants>(
  arr: Variants[],
  key: Key,
) {
  return arr.reduce((all, current) => {
    const valueAsKey = `${current[key]}`;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!all[valueAsKey]) {
      all[valueAsKey] = [];
    }
    all[valueAsKey].push(current);
    return all;
  }, {} as Record<string, Variants[]>);
}
