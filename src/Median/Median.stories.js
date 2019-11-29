import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '../Row';
import Column from '../Column';
import Median from './Median';
import Alpha from './Alpha';
import Beta from './Beta';
import Button from '../Button';

const stories = storiesOf('Components/Median', module);

stories.add('Default', () => (
    <Median>
        <Alpha>
            <Button>Hello!</Button>
        </Alpha>
        <Beta>
            <Button>Goodbye!</Button>
        </Beta>
    </Median>
));

stories.add('Large spacing', () => (
    <Median spacing="lg">
        <Alpha>
            <Button>Hello!</Button>
        </Alpha>
        <Beta>
            <Button>Goodbye!</Button>
        </Beta>
    </Median>
));

stories.add('In a grid', () => (
    <Row>
        <Column col={6} offset={3}>
            <Median>
                <Alpha>
                    <Button>Hello!</Button>
                </Alpha>
                <Beta>
                    <Button>Goodbye!</Button>
                </Beta>
            </Median>
        </Column>
    </Row>
));

stories.add('Vertical Aligned', () => (
    <Median verticalAlign>
        <Alpha>
            <div style={{ height: '100px', width: '100px', backgroundColor: 'red' }} />
        </Alpha>
        <Beta>
            <div style={{ height: '200px', width: '100px', backgroundColor: 'blue' }} />
        </Beta>
    </Median>
));
