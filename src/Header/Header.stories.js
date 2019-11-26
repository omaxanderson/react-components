import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const stories = storiesOf('Components/Header', module);

stories.add('H1', () => (
    <Header h={1}>
        Header 1
    </Header>
));

stories.add('H2', () => (
    <Header h={2}>
        Header 2
    </Header>
));

stories.add('H3', () => (
    <Header h={3}>
        Header 3
    </Header>
));

stories.add('H4', () => (
    <Header h={4}>
        Header 4
    </Header>
));

stories.add('H5', () => (
    <Header h={5}>
        Header 5
    </Header>
));

stories.add('H6', () => (
    <Header h={6}>
        Header 6
    </Header>
));

stories.add('With Custom Spacing', () => {
    <Header h={1} spacing="sm">
        Header 1 with small spacing
    </Header>
});
