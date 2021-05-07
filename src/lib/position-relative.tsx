type PositionProps = 'bottom' | 'top' | 'left' | 'right';

const oppositePosition: { [key: string]: PositionProps } = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom',
};

export function positionRelativeGet(node: Element, position: PositionProps): PositionProps {
  const child = node.lastChild as Element | null;

  if (child === null) {
    return position;
  }

  const { top, left, bottom, right } = node.getBoundingClientRect();
  const { width, height } = child.getBoundingClientRect();

  const noSpaceTop = top < height;
  const noSpaceBottom = window.innerHeight - bottom < height;
  const noSpaceLeft = left < width;
  const noSpaceRight = window.innerWidth - right < width;

  if (
    (noSpaceTop && position === 'top') ||
    (noSpaceBottom && position === 'bottom') ||
    (noSpaceLeft && position === 'left') ||
    (noSpaceRight && position === 'right')
  ) {
    return oppositePosition[position];
  }
  return position;
}
