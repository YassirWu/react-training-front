
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LabeledInput from './LabeledInput.design';

storiesOf('Molecules/LabeledInput', module)
  .add('with text', () => <LabeledInput label="Your name :" />);
