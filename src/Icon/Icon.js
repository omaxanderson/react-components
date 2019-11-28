import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Icon.scss';
import { Add, Add2 } from './svgs';

const svgs = {
    add: Add,
    add2: Add2,
};

class Icon extends React.Component {
    render() {
        const {
            name,
            size,
            color,
        } = this.props;
        const Svg = svgs[name];

        return (
            <div
                className={classNames(css.Icon, {
                    [css[`Icon--${size}`]]: size,
                })}
                style={color ? { fill: color } : undefined}
            >
                <Svg />
            </div>
        );
    }
}

Icon.propTypes = {
    name: PropTypes.oneOf(Object.values(svgs)).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    color: PropTypes.string,
};

Icon.defaultProps = {
    size: 'medium',
    color: false,
};

export default Icon;
