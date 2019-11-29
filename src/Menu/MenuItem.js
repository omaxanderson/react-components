import React from 'react';
import PropTypes from 'prop-types';
import css from './MenuItem.scss';

const MenuItem = ({ label, onClick }) => (
    <div onClick={() => onClick(label)} className={css.MenuItem}>
        {label}
    </div>
);

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
