import * as React from 'react';
import { text } from '@storybook/addon-knobs';

import * as woly from '.';

export default { title: 'Atoms' };

export const Title = () => {
  const content = text('Content', 'Example heading');
  const levels = [1, 2, 3];

  const TitleCom = woly.Title as any;

  return (
    <div>
      {levels.map((level) => (
        <div key={level}>
          <span style={{ fontSize: '1.6rem' }}>Level {level}</span>
          <span>
            <TitleCom as={`h${level}`} level={level}>
              {content}
            </TitleCom>
          </span>
        </div>
      ))}
    </div>
  );
};
