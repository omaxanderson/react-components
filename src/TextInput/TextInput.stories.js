import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

const stories = storiesOf('Components/TextInput', module);

stories.add('Default', () => (
    <TextInput />
));