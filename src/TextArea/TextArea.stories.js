import React from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from './TextArea';

const stories = storiesOf('Components/TextArea', module);

stories.add('Default', () => (
    <TextArea />
));

stories.add('With onsubmit', () => (
    <TextArea onSubmit={(e) => {
        console.log('submitted:', e);
    }}/>
));
