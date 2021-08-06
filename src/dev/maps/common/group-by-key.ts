export function groupByKey<Variants extends Record<string, unknown>, Key extends keyof Variants>(
  arr: Variants[],
  key: Key,
  keyMapper?: (fn: Variants[Key]) => string,
) {
  return arr.reduce<Record<string, Variants[]>>((all, current) => {
    const valueAsKey = keyMapper ? keyMapper(current[key]) : `${current[key]}`;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (all[valueAsKey] === undefined) {
      all[valueAsKey] = [];
    }
    all[valueAsKey].push(current);
    return all;
  }, {});
}
