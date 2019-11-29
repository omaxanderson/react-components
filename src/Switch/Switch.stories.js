import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './Switch';

const stories = storiesOf('Components/Switch', module);

stories.add('Default', () => (
    <Switch />
));

stories.add('With label', () => (
    <Switch labelOff="Choose"/>
));

stories.add('With mulitple labels', () => (
    <Switch labelOff="No" labelOn="Hell yeah" />
));
