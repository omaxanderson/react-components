import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Modal.scss';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen !== undefined ? props.isOpen : true,
        };
    }

    render() {
        const {
            children,
            isOpen: stateIsOpen,
        } = this.props;

        const {
            isOpen: propsIsOpen,
        } = this.state;

        if (propsIsOpen === undefined ? !propsIsOpen : !stateIsOpen) {
            return null;
        }

        return (
            <div
                className={classNames(css.Modal__wrapper)}
            >
                <div className={classNames(css.Modal__container)}>
                    {children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
};

Modal.defaultProps = {
    isOpen: undefined,
};

export default Modal;
