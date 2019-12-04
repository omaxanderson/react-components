import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Row from './Row';
import Column from "../Column";

const stories = storiesOf('Components/Row', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Row>
        <Column col={number('col', 6)} offset={number('offset', 3)}>
            <div style={{ backgroundColor: 'red' }}>Hello!</div>
        </Column>
    </Row>
));

stories.add('Multiple rows', () => (
    <div>
        <Row>
            <Column col={number('col', 6)} offsetMd={number('offset', 3)}>
                <div style={{ backgroundColor: 'red' }}>Hello!</div>
            </Column>
        </Row>
        <Row>
            <Column col={number('col', 8)} offsetMd={number('offset', 4)}>
                <div style={{ backgroundColor: 'blue' }}>Hello!</div>
            </Column>
        </Row>
    </div>
));

stories.add('With spacings', () => (
    <div>
        <Row spacing="sm">
            <Column col={6} offsetMd={2}>
                <div style={{ backgroundColor: 'red' }}>Hello!</div>
            </Column>
        </Row>
        <Row spacing="lg">
            <Column col={8} offsetMd={4}>
                <div style={{ backgroundColor: 'blue' }}>Hello!</div>
            </Column>
        </Row>
        <Row spacing="xl">
            <Column col={8} offsetMd={4}>
                <div style={{ backgroundColor: 'green' }}>Hello!</div>
            </Column>
        </Row>
        <Row spacing="xl">
            <Column col={8} offsetMd={4}>
                <div style={{ backgroundColor: 'yellow' }}>Hello!</div>
            </Column>
        </Row>
    </div>
));

stories.add('Responsive', () => (
    <Row>
        <Column
            sm={number('sm', 12)}
            md={number('md', 6)}
            offsetSm={number('offsetSm', 0)}
            offsetMd={number('offsetMd', 3)}
        >
            <div style={{ backgroundColor: 'red' }}>Hello!</div>
        </Column>
    </Row>
));

