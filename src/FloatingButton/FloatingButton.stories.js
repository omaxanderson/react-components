import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingButton from './FloatingButton';
import Icon from '../Icon';

const stories = storiesOf('Components/FloatingButton', module);

stories.add('Default', () => (
    <FloatingButton>
        Hi
    </FloatingButton>
));

stories.add('Small', () => (
    <FloatingButton size="small">
        <Icon name="add2" color="white" size="small" />
    </FloatingButton>
));

stories.add('Large', () => (
    <FloatingButton size="large">
        Hi
    </FloatingButton>
));

stories.add('With Icon', () => (
    <FloatingButton>
        <Icon name="add2" color="white" size="small" />
    </FloatingButton>
));

stories.add('light Icon', () => (
    <FloatingButton light>
        <Icon name="add2" size="small" />
    </FloatingButton>
));
