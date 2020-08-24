import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { themes } from '@storybook/theming';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';

import { Styles } from './layout/styles';
import { Wrap } from './layout/template';

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: themes.light,
  },
});

// Plugins

configureActions({
  depth: 20,
  limit: 5,
});

addDecorator((story) => (
  <>
    <Styles />
    <Wrap>{story()}</Wrap>
  </>
));

addDecorator(withKnobs);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// configure(require.context('../stories', true, /\.stories\.tsx$/), module);
configure(require.context('../src', true, /story\.tsx$/), module);
