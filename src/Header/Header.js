import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './Header.scss';

class Header extends React.Component {
    render() {
        const {
            h,
            children,
            spacing,
            noSpacing,
        } = this.props;
        const Tag = `h${h}`;
        return (
            <Tag
                className={classNames(css.Header, {
                    [css[`Header--${Tag}`]]: !noSpacing,
                    [css[`Header--${spacing}`]]: spacing,
                })}
            >
                {children}
            </Tag>
        );
    }
}

Header.propTypes = {
    h: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.node.isRequired,
    spacing: PropTypes.oneOf(['sm', 'md', 'lg']),
    noSpacing: PropTypes.bool,
}

Header.defaultProps = {
    spacing: undefined,
    noSpacing: false,
}

export default Header;