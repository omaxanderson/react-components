import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Button.scss';

class Button extends React.Component {
    render() {
        const {
            onClick,
            children,
            type,
            disabled = false,
        } = this.props;
        return (
            <button
                className={classNames(css.Button, {
                    [css.Button__Primary]: !disabled && type === 'primary',
                    [css.Button__Secondary]: !disabled && type === 'secondary',
                    [css.Button__Disabled]: disabled,
                })}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: undefined,
    type: 'secondary',
    disabled: false,
};

export default Button;
