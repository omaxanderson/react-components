import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import css from './Median.scss';

class Median extends React.Component {
    render() {
        const { children, spacing } = this.props;
        return (
            <div className={classnames(css.Median, {
                [css.Median__sm]: spacing === 'sm',
                [css.Median__md]: spacing === 'md',
                [css.Median__lg]: spacing === 'lg',
            })}>
                {this.props.children}
            </div>
        );
    }
}

Median.propTypes = {
    children: propTypes.node.isRequired,
    spacing: propTypes.oneOf(['sm', 'md', 'lg']),
};

Median.defaultProps = {
    spacing: 'md',
};

export default Median;