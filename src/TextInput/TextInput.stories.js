import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextInput from './TextInput';

const stories = storiesOf('Components/TextInput', module);
stories.addDecorator(withKnobs);

class TextInputState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
        };
    }

    render() {
        return <TextInput value={this.state.value} onChange={(e, val) => this.setState({ val })} />
    }
}

stories.add('Default', () => (
    <TextInput onChange={(e, val) => console.log(val)}/>
));

stories.add('With onsubmit', () => (
    <TextInput onSubmit={(e) => {
        console.log('submitted:', e);
    }}/>
));

stories.add('With onChange', () => (
    <TextInput onChange={(e, value) => {
        console.log('submitted:', value);
    }}/>
));

stories.add('With label', () => (
    <TextInput
        onSubmit={(e) => {
            console.log('submitted:', e);
        }}
        label="Name"
    />
));

stories.add('Dynamically set value', () => {
    const textValue = text('Input value', 'hello');
    return (
        <TextInput
            {...(boolean('Set value' , false ) ? { value: textValue } : {})}
            onChange={(e, val) => console.log('changed:', val)}
        />
    );
});

stories.add('Dynamically set value the right way', () => (
    <TextInputState />
));
