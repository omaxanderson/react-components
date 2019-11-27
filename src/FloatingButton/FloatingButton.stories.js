import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingButton from './FloatingButton';

const stories = storiesOf('Components/FloatingButton', module);

stories.add('Default', () => (
    <FloatingButton />
));

