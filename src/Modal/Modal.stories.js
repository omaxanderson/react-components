import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import Modal from './Modal';

const stories = storiesOf('Components/Modal', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Modal isOpen={boolean('Is Open', false)}/>
));

