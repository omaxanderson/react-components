import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

const stories = storiesOf('Components/Icon', module);

stories.add('Default', () => (
    <Icon name="add" />
));

stories.add('Add2', () => (
    <Icon name="add2" />
));

stories.add('Small', () => (
    <Icon name="add" size="sm"/>
));

stories.add('Large', () => (
    <Icon name="add" size="lg"/>
));

stories.add('hover', () => (
    <Icon name="add" hover />
));
