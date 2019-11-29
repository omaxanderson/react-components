import React from 'react';
import { storiesOf } from '@storybook/react';
import Align from './Align';

const stories = storiesOf('Components/Align', module);

stories.add('Vertical', () => (
    <div style={{ width: '500px', height: '500px', backgroundColor: 'yellow' }}>
        <Align vertical>
            <div>hello!</div>
        </Align>
    </div>
));

stories.add('Horizontal', () => (
    <div style={{ width: '500px', height: '500px', backgroundColor: 'yellow' }}>
        <Align horizontal>
            <div>hello!</div>
        </Align>
    </div>
));

stories.add('Both', () => (
    <div style={{ width: '500px', height: '500px', backgroundColor: 'yellow' }}>
        <Align vertical horizontal>
            <div>hello!</div>
        </Align>
    </div>
));

