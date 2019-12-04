import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './FloatingButton.scss';
import Icon from '../Icon';

class FloatingButton extends React.Component {
    render() {
        const {
            icon,
            children,
            size,
            light,
            onClick,
        } = this.props;
        const t = classNames(css.FloatingButton, {
            [css[`FloatingButton--${size}`]]: size,
            [css['FloatingButton--light']]: light,
        });
        console.log('t', t);
        return (
            <div
                {...this.props /* allowing things like style to be passed through */}
                className={classNames(css.FloatingButton, {
                    [css[`FloatingButton--${size}`]]: size,
                    [css['FloatingButton--light']]: light,
                })}
                onClick={onClick}
            >
                {icon && <Icon name={icon} size={size} />}
                {children}
            </div>
        );
    }
}

FloatingButton.propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    light: PropTypes.bool,
    onClick: PropTypes.func,
};

FloatingButton.defaultProps = {
    icon: '',
    size: 'md',
    light: false,
    onClick: () => {},
};

export default FloatingButton;
