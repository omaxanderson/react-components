import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import css from './TextInput.scss';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    getInput = () => {
        const {
            placeholder,
            onSubmit,
            onChange,
            label,
        } = this.props;

        return (
            <input
                type="text"
                placeholder={placeholder}
                className={css.TextInput}
                ref={this.inputRef}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSubmit(get(this.inputRef, 'current.value', ''));
                    } else {
                        console.log('calling on change');
                        onChange(e, get(this.inputRef, 'current.value', ''));
                    }
                }}
            />
        );
    }

    render() {
        const {
            label,
        } = this.props;

        if (!label) {
            return this.getInput();
        }

        return (
            <div>
                <div className={css.TextInput__label}>{label}</div>
                {this.getInput()}
            </div>
        )
    }
}

TextInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
};

TextInput.defaultProps = {
    onSubmit: () => {},
    onChange: () => {},
    placeholder: '',
    label: '',
};

export default TextInput;