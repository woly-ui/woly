type VaritationsMap = Record<string, readonly unknown[]>;

export function createCombinations(obj: VaritationsMap) {
  const fieldNames = Object.keys(obj);

  if (fieldNames.length === 0) return [{}];

  function _combinations<Combination extends string[]>(
    [key, ...restKeys]: Combination,
    combinations: Record<string, unknown[]>,
  ): Record<string, unknown>[] {
    const possibleValues = obj[key];

    if (!Array.isArray(possibleValues) || possibleValues.length === 0) {
      throw new Error(`Please provide a non-empty array of possible values for prop ${key}`);
    }

    const variation = possibleValues.map((fieldValue) => ({
      ...combinations,
      [key]: fieldValue,
    }));

    if (restKeys.length === 0) {
      return variation;
    }

    return flatMap(variation, (newAcc) => _combinations(restKeys, newAcc));
  }

  return _combinations(fieldNames, {});
}

function flatMap<T>(arr: Array<T>, fn: (value: T, index: number, array: Array<T>) => Array<T>) {
  return arr.map(fn).reduce((a, b) => a.concat(b));
}
