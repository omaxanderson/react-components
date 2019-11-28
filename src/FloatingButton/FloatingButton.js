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
        } = this.props;
        return (
            <div
                className={classNames(css.FloatingButton, {
                    [css[`FloatingButton--${size}`]]: size,
                })}
            >
                {icon && <Icon name={icon} />}
                {children}
            </div>
        );
    }
}

FloatingButton.propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
};

FloatingButton.defaultProps = {
    icon: '',
    size: 'medium',
};

export default FloatingButton;
