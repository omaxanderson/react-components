import React from 'react';
import style from './Checkbox.scss';
import classnames from 'classnames';

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

        if (typeof checked !== 'undefined') {
            inputProps.checked = checked;
        }
        const inputJsx = React.cloneElement(<input />, inputProps);
        const isChecked = this.inputRef.current && this.inputRef.current.checked;
        return (
            <div className={style.Checkbox__Wrapper}>
                {inputJsx}
                <div className={classnames(style.Checkbox, {
                    [style.Checkbox__Checked]: isChecked,
                })}>
                    {isChecked && <div className={style.Check} />}
                </div>
                {label && <label className={style.Checkbox__Label} htmlFor={value}>{label}</label>}
            </div>
        )
    }
}
