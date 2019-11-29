import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Align.scss';

class Align extends React.Component {
    render() {
        const {
            children,
            vertical,
            horizontal,
        } = this.props;

        return (
            <div className={classNames(css.Align__wrapper, {
                [css['Align--vertical']]: vertical,
                [css['Align--horizontal']]: horizontal,
            })}>
                {children}
            </div>
        );
    }
}

Align.propTypes = {

};

Align.defaultProps = {

};

export default Align;
