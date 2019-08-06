
import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header.design';
import { withKnobs, text } from '@storybook/addon-knobs';

import markdownNotes from './Header.documentation.md';

storiesOf('Atoms/Header', module)
  .addDecorator(withKnobs)
  .add('default', () => <Header/>)
  .add('with text', () => (
    <Header>
      {text('Button caption', 'Hello world')}
    </Header>
  ), { notes: { markdown: markdownNotes }}
  );
