import * as React from 'react';
import styled from 'styled-components';
import { ArrowLeft, SearchIcon } from 'icons';
import { Button } from 'ui';
import { Global, block } from 'box-styles';
/**
 * Button
 *                                  | Icon
 * Variant   | Size     | Disabled  | Left   | Right   | Both
 * ---------------------|-----------|--------|---------|--------
 * Primary     Large    | False     |
 *                      | True      |
 *
 *             Normal   | False     |
 *                      | True      |
 *
 *             Small    | False     |
 *                      | True      |
 *
 * Secondary   Large    | False     |
 *                      | True      |
 *
 *             Normal   | False     |
 *                      | True      |
 *
 *             Small    | False     |
 *                      | True      |
 */

const configuration = {
  vertical: {
    icon: ['left', 'right', 'both'],
  },
  horizontal: {
    variant: ['primary', 'secondary'],
    size: ['large', 'normal', 'small'],
    disabled: [false, true],
  },
};

/**
 * @example
 * configuration = {
 *   vertical: {
 *     left: [true, false],
 *     right: [true, false],
 *   },
 * }
 *
 *
 * | Left
 * | True             | False
 * |------------------|-----------------
 * | Right            | Right
 * | True   | False   | True   | False
 * |--------|---------|--------|--------
 */

const properties = {
  size: ['large', 'normal', 'small'],
  variant: ['primary', 'secondary'],
  icon: ['no', 'left', 'right'],
};

const wrapperMatch: any = {
  large: block.L,
  normal: block.M,
  small: block.S,
};

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: #fff;
  }
`;

const IconSecondaryWrapper = styled(IconWrapper)`
  path {
    fill: #683aef;
  }
`;

const iconWrapper: any = {
  primary: IconWrapper,
  secondary: IconSecondaryWrapper,
};

const renderItem = ({ size, variant, icon }: any) => {
  const Wrapper = wrapperMatch[size];
  const props: any = {
    variant,
    text: `Sample`,
  };
  const Icon = iconWrapper[variant];

  if (icon === 'left') {
    props.left = (
      <Icon>
        <ArrowLeft />
      </Icon>
    );
  }
  if (icon === 'right') {
    props.right = (
      <Icon>
        <SearchIcon />
      </Icon>
    );
  }

  return (
    <Container>
      <Wrapper data-element-variant={`${size}-${variant}-${icon}`}>
        <Button {...props} />
      </Wrapper>
    </Container>
  );
};

const renderSize = ({ size, variant, icon }: any) => {
  const items = [];
  items.push(...size.map((a: string) => <Label>{a}</Label>));
  for (const a of icon) {
    for (const b of variant) {
      for (const c of size) {
        items.push(renderItem({ size: c, variant: b, icon: a }));
      }
    }
  }
  return <>{items}</>;
};

export const ButtonExample: React.FC = () => (
  <>
    <Global>
      <div data-cypress="button">
        <Grid
          style={{
            gridTemplateColumns: `repeat(${properties.size.length}, auto)`,
          }}
        >
          {renderSize(properties)}
        </Grid>
      </div>
    </Global>
  </>
);

export const ButtonExample_old: React.FC = () => (
  <Global>
    <div data-cypress="button">
      <Grid>
        <block.L>
          <span>Large</span>

          <Button variant="primary" text="Button" />
          <Button variant="secondary" text="Button" />
          <Button variant="primary" text="Button" disabled />
        </block.L>
        <block.M>
          <span>Normal</span>
          <Button variant="primary" text="Button" />
          <Button variant="secondary" text="Button" />
          <Button variant="primary" text="Button" disabled />
        </block.M>
        <block.S>
          <span>Small</span>
          <Button
            variant="primary"
            text="Button"
            icon={
              <IconWrapper>
                <ArrowLeft />
              </IconWrapper>
            }
          />
          <Button
            variant="secondary"
            text="Button"
            icon={
              <IconSecondaryWrapper>
                <ArrowLeft />
              </IconSecondaryWrapper>
            }
          />
          <Button
            variant="primary"
            text="Button"
            disabled
            icon={
              <IconDisabledWrapper>
                <ArrowLeft />
              </IconDisabledWrapper>
            }
          />
        </block.S>
      </Grid>
    </div>
  </Global>
);
export const IconDisabledWrapper = styled(IconWrapper)`
  path {
    fill: #a39bb2;
  }
`;

const Label = styled.span`
  text-transform: capitalize;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

const Container = styled.div`
  padding: 5px;
`;
