import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from './Popover';
import Button from '../Button';

const stories = storiesOf('Components/Popover', module);

stories.add('Default', () => (
    <Popover>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }} />
        <div style={{ width: '50px', height: '50px', backgroundColor: 'blue' }} />
    </Popover>
));

stories.add('With onhover', () => (
    <Popover onHover>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }} />
        <div style={{ width: '50px', height: '50px', backgroundColor: 'blue' }} />
    </Popover>
));

stories.add('With buttons', () => (
    <Popover>
        <Button>Click Me</Button>
        <div style={{ width: '50px', height: '50px', backgroundColor: 'blue' }} />
    </Popover>
));

