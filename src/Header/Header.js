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
        } = this.props;
        const Tag = `h${h}`;
        return (
            <Tag
                className={classNames(css[`Header--${Tag}`], {
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
}

Header.defaultProps = {
    spacing: undefined,
}

export default Header;