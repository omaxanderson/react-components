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
            hover,
        } = this.props;
        const Svg = svgs[name];
        console.log(css);
        console.log(size);

        return (
            <div
                style={color ? { fill: color } : undefined}
                className={classNames(css.Icon, {
                    [css[`Icon--${size}`]]: size,
                    [css['Icon--hover']]: hover,
                })}
            >
                <Svg />
            </div>
        );
    }
}

Icon.propTypes = {
    name: PropTypes.oneOf(Object.values(svgs)).isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    color: PropTypes.string,
    hover: PropTypes.bool,
};

Icon.defaultProps = {
    size: 'md',
    color: false,
    hover: false,
};

export default Icon;
