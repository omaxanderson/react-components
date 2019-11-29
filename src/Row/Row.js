import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Row.scss';

const Row = (props) => {
    const { children, spacing } = props;
    return (
        <div
            className={classNames(css.Row, {
                [css[`Row--spacing-${spacing}`]]: spacing,
            })}
        >
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    spacing: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

Row.defaultProps = {
    spacing: undefined,
};

export default Row;