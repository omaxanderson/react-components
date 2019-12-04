import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Row.scss';

const Row = (props) => {
    const {
        children,
        spacing,
        withSidePadding,
    } = props;
    // TODO somehow add up and make the sizes exact from relative?
    return (
        <div
            className={classNames(css.Row, {
                [css[`Row--spacing-${spacing}`]]: spacing,
                [css['Row--withSidePadding']]: withSidePadding,
            })}
        >
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.node.isRequired,
    spacing: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    withSidePadding: PropTypes.bool,
};

Row.defaultProps = {
    spacing: 'md',
    withSidePadding: true,
};

export default Row;