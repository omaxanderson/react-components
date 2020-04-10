import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Components/Button', module);

stories.add('Default', () => (
   <Button>Hello world!</Button>
));

stories.add('Primary', () => (
    <Button type="primary">Hello world!</Button>
));

stories.add('Disabled', () => (
    <>
        <Button onClick={() => console.log('clicked!')} type="primary" disabled>Primary</Button>
        <div style={{ marginBottom: '10px' }} />
        <Button onClick={() => console.log('clicked!')} disabled>Secondary</Button>
    </>
));
