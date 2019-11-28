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
    <Icon name="add" size="small"/>
));

stories.add('Large', () => (
    <Icon name="add" size="large"/>
));

