import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from './Row';
import Column from "../Column";

const stories = storiesOf('Components/Row', module);

stories.add('Default', () => (
    <Row>
        <Column col={6} offset={3}>
            <div style={{ backgroundColor: 'red' }}>Hello!</div>
        </Column>
    </Row>
));

stories.add('Multiple rows', () => (
    <div>
        <Row>
            <Column col={6} offset={2}>
                <div style={{ backgroundColor: 'red' }}>Hello!</div>
            </Column>
        </Row>
        <Row>
            <Column col={8} offset={4}>
                <div style={{ backgroundColor: 'blue' }}>Hello!</div>
            </Column>
        </Row>
    </div>
));

stories.add('With spacings', () => (
    <div>
        <Row spacing="sm">
            <Column col={6} offset={2}>
                <div style={{ backgroundColor: 'red' }}>Hello!</div>
            </Column>
        </Row>
        <Row spacing="lg">
            <Column col={8} offset={4}>
                <div style={{ backgroundColor: 'blue' }}>Hello!</div>
            </Column>
        </Row>
        <Row spacing="xl">
            <Column col={8} offset={4}>
                <div style={{ backgroundColor: 'green' }}>Hello!</div>
            </Column>
        </Row>
        <Row spacing="xl">
            <Column col={8} offset={4}>
                <div style={{ backgroundColor: 'yellow' }}>Hello!</div>
            </Column>
        </Row>
    </div>
));
