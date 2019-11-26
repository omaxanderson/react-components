import React from 'react';
import css from './TextInput.scss';

class TextInput extends React.Component {
    render() {
        const {
            placeholder,
        } = this.props;

        return(
            <input
                type="text"
                placeholder={placeholder}
                className={css.TextInput}
            />
        );
    }
}

export default TextInput;