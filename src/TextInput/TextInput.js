import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import css from './TextInput.scss';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
        };

        this.inputRef = React.createRef();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.value !== undefined && state.value !== props.value) {
            return { value: props.value };
        }
        return null;
    }

    onChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;
        this.setState({ value }, () => onChange(e, value));
    };

    getInput = () => {
        const {
            placeholder,
            onSubmit,
            ...props
        } = this.props;

        //const { value } = this.state;

        return (
            <input
                type="text"
                placeholder={placeholder}
                className={css.TextInput}
                ref={this.inputRef}
                {...props}
                onChange={this.onChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSubmit(get(this.inputRef, 'current.value', ''));
                    }
                }}
            />
        );
    };

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
    value: PropTypes.string,
};

TextInput.defaultProps = {
    onSubmit: () => {},
    onChange: () => {},
    placeholder: '',
    label: '',
    value: undefined,
};

export default TextInput;