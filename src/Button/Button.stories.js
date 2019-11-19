import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Components/Button', module);

stories.add('Default', () => (
   <Button>Hello world!</Button>
));
