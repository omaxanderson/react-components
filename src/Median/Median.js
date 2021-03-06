import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import css from './Median.scss';

class Median extends React.Component {
    render() {
        const {
            children,
            spacing,
            verticalAlign,
            horizontalSpacing,
        } = this.props;
        return (
            <div className={classNames(css.Median, {
                [css.Median__sm]: spacing === 'sm',
                [css.Median__md]: spacing === 'md',
                [css.Median__lg]: spacing === 'lg',
                [css[`Median__${spacing}--horizontalSpacing`]]: horizontalSpacing,
                [css['Median--verticalAlign']]: verticalAlign,
            })}>
                {children}
            </div>
        );
    }
}

Median.propTypes = {
    children: propTypes.node.isRequired,
    spacing: propTypes.oneOf(['sm', 'md', 'lg', 'none']),
    verticalAlign: propTypes.bool,
    horizontalSpacing: propTypes.bool,
};

Median.defaultProps = {
    spacing: 'md',
    verticalAlign: true,
    horizontalSpacing: true,
};

export default Median;