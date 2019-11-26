import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import css from './TextInput.scss';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }
    render() {
        const {
            placeholder,
            onSubmit,
            onChange,
        } = this.props;

        return(
            <input
                type="text"
                placeholder={placeholder}
                className={css.TextInput}
                ref={this.inputRef}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSubmit(get(this.inputRef, 'current.value', ''));
                    }
                }}
                onchange={() => onChange(get(this.inputRef, 'current.value', ''))}
            />
        );
    }
}

TextInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    onSubmit: () => {},
    onChange: () => {},
    placeholder: '',
};

export default TextInput;