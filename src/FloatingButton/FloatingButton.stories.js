import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import FloatingButton from './FloatingButton';
import Icon from '../Icon';

const stories = storiesOf('Components/FloatingButton', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <FloatingButton>
        Hi
    </FloatingButton>
));

stories.add('Small', () => (
    <FloatingButton size="sm">
        <Icon name="add2" color="white" size="sm" />
    </FloatingButton>
));

stories.add('Large', () => (
    <FloatingButton size="lg">
        Hi
    </FloatingButton>
));

stories.add('With Icon', () => (
    <FloatingButton>
        <Icon name="add2" color="white" size="sm" />
    </FloatingButton>
));

stories.add('light Icon', () => (
    <FloatingButton light>
        <Icon name="add2" size="sm" />
    </FloatingButton>
));

stories.add('Custom', () => (
    <FloatingButton
        light={boolean('Light', false)}
        icon={text('Icon', 'add2')}
        size={select('Size', {
            Small: 'sm',
            Medium: 'md',
            Large: 'lg',
            XLarge: 'xl',
        }, 'md')}
    />
));
