import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Modal from './Modal';

const stories = storiesOf('Components/Modal', module);
stories.addDecorator(withKnobs);

stories.add('Prop controlled', () => (
    <Modal isOpen={boolean('Is Open', false)}/>
));

stories.add('Self managed', () => (
    <Modal />
));

stories.add('With header and footer', () => (
    <Modal
        header="My Modal"
        footerActions={[
            {
                label: 'Cancel',
                type: 'secondary',
                onClick: () => console.log('clicked cancel :('),
            },
            {
                label: 'Submit',
                type: 'primary',
                onClick: () => console.log('clicked!'),
            },
        ]}
    >
        <div>Hey!</div>
    </Modal>
));

stories.add('Small modal', () => (
    <Modal
        header="My Modal"
        size="sm"
        footerActions={[
            {
                label: 'Cancel',
                type: 'secondary',
                onClick: () => console.log('clicked cancel :('),
            },
            {
                label: 'Submit',
                type: 'primary',
                onClick: () => console.log('clicked!'),
            },
        ]}
    >
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
        <div>Hey!</div>
    </Modal>
));

