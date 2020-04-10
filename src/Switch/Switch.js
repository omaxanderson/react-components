import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Switch.scss';

class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.default,
        };
    }

    onClick = () => {
        const { value } = this.state;
        const { onChange } = this.props;
        this.setState({ value: !value }, () => onChange(this.state.value));
    };

    getSwitch = () => {
        const { value } = this.state;
        const { labelOff, labelOn } = this.props;
        return (
            <div
                onClick={this.onClick}
                className={classNames(css.Switch, {
                    [css['Switch--on']]: value,
                    [css['Switch--withOffLabel']]: labelOff,
                    [css['Switch--withOnLabel']]: labelOn,
                })}
            >
                <div
                    className={classNames(css.Switch__thing, {
                        [css['Switch__thing--on']]: value,
                    })}
                />
            </div>
        );
    };

    render() {
        const { labelOn, labelOff } = this.props;
        if (!labelOn && !labelOff) {
            return this.getSwitch();
        }

        return (
            <div className={css.Switch__wrapper}>
                {labelOff && <span>{labelOff}</span>}
                {this.getSwitch()}
                {labelOn && <span>{labelOn}</span>}
            </div>
        )
    }
}

Switch.propTypes = {
    onChange: PropTypes.func,
    labelOn: PropTypes.string,
    labelOff: PropTypes.string,
    default: PropTypes.bool,
};

Switch.defaultProps = {
    onChange: () => {},
    labelOn: PropTypes.string,
    labelOff: PropTypes.string,
    default: false,
};

export default Switch;
