import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';
import { withKnobs, boolean } from "@storybook/addon-knobs";

const stories = storiesOf('Components/Checkbox', module);
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Checkbox label="I like corn dogs" onChange={(val) => console.log('checked:', val)} />
));

stories.add('With a default value', () => (
    <Checkbox onChange={(val) => console.log('checked:', val)} label="Start Selected" defaultValue={true}/>
));

stories.add('controlled by props', () => (
    <Checkbox label="I love corn dogs" onChange={(val) => console.log('checked:', val)} checked={boolean('checked', false)}/>
));
