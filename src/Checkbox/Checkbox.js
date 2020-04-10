import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './Checkbox.scss';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.defaultValue) {
            this.inputRef.current.checked = this.props.defaultValue;
            this.forceUpdate();
        }
    }

    onChange = (e) => {
        const { onChange } = this.props;
        const checked = e.target.checked;
        onChange(checked, e);
        this.forceUpdate();
    };

    customCheckboxClicked = (e) => {
        this.inputRef.current.click();
    };

    render() {
        const {
            checked,
            label,
            value,
        } = this.props;

        const inputProps = {
            value,
            type: 'checkbox',
            id: value,
            onChange: this.onChange,
            ref: this.inputRef,
            className: style.Checkbox__Hidden,
        };

        let isChecked = this.inputRef.current && this.inputRef.current.checked;
        if (typeof checked !== 'undefined') {
            inputProps.checked = checked;
            isChecked = checked;
        }
        const inputJsx = React.cloneElement(<input />, inputProps);
        return (
            <div className={style.Checkbox__Wrapper}>
                {inputJsx}
                <div
                    className={classnames(style.Checkbox, {
                        [style.Checkbox__Checked]: isChecked,
                    })}
                    onClick={() => this.inputRef.current.click()}
                >
                    {isChecked && <div className={style.Check} />}
                </div>
                {label && <label className={style.Checkbox__Label} htmlFor={value}>{label}</label>}
            </div>
        )
    }
}

Checkbox.propTypes = {
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.string,
};

Checkbox.default = {
    checked: undefined,
    label: '',
};
