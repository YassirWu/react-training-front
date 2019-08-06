
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Header, Panel } from 'components';

storiesOf('Molecules/IconedPanel', module)
  .addDecorator(withKnobs)
  .add('default', () => <Panel />)
  .add('with text', () => <Panel>Hello world</Panel>)
  .add('with header', () => (
    <Panel>
      <Header>
        {text('Button caption', 'Hello world')}
      </Header>
      <p style={{margin: '0.5rem'}}>{text('Panel content', 'How are you people ?')}</p>
    </Panel>
  ));
