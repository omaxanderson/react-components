import React from 'react';
import PropTypes from 'prop-types';
import css from './Menu.scss';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    onItemClick = (label) => {
        const { onClick } = this.props;
        onClick(label);
    }
    render() {
        const {
            options,
        } = this.props;

        return (
            <div className={css.Menu}>
                {options.map(label => <MenuItem label={label} onClick={this.onItemClick} />)}
            </div>
        );
    }
}

Menu.propTypes = {
    onClick: PropTypes.func,
};

Menu.defaultProps = {
    onClick: () => {},
};

export default Menu;
