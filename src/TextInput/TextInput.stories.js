import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

const stories = storiesOf('Components/TextInput', module);

stories.add('Default', () => (
    <TextInput />
));

stories.add('With onsubmit', () => (
    <TextInput onSubmit={(e) => {
        console.log('submitted:', e);
    }}/>
));

stories.add('With onChange', () => (
    <TextInput onChange={(e, value) => {
        console.log('submitted:', value);
    }}/>
));

stories.add('With label', () => (
    <TextInput
        onSubmit={(e) => {
            console.log('submitted:', e);
        }}
        label="Name"
    />
));
