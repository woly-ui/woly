type Coloring = 'default' | 'inversed';

type Mapper = {
  [Key in Coloring]?: boolean;
};

export function mapColoring(mapper: Mapper): Coloring {
  if (mapper.inversed) return 'inversed';
  return 'default';
}
