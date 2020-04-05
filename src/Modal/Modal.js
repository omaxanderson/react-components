import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Modal.scss';
import Button from '../Button';
import { Median, Alpha, Beta } from '../index';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen !== undefined ? props.isOpen : true,
            useProps: props.isOpen !== undefined,
        };

        this.modalRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.onPageClick);
    }

    componentWillUnmount() {
    document.removeEventListener('click', this.onPageClick);
}

    onPageClick = (e) => {
        const { target } = e;
        const { isOpen } = this.state;

        const modal = ReactDOM.findDOMNode(this.modalRef);

        if (isOpen && !modal.contains(target)) {
            this.closeModal();
        }
    };

    closeModal = () => {
        const { onClose } = this.props;
        this.setState({ isOpen: false }, onClose);
    };

    render() {
        const {
            children,
            isOpen: propsIsOpen,
            header,
            footerActions,
        } = this.props;

        const {
            isOpen,
            useProps,
        } = this.state;

        if ((useProps && !propsIsOpen) || (!useProps && !isOpen)) {
            return null;
        }

        return (
            <div
                className={classNames(css.Modal__wrapper)}
            >
                <div
                    className={classNames(css.Modal__container)}
                    ref={node => this.modalRef = node}
                >
                    {header && <div className={classNames(css.Modal__header)}>{header}</div>}
                    <div className={css.Modal__content}>{children}</div>
                    <div className={css.Modal__footer}>
                        <div className={css.Modal__footerButtonWrapper}>
                            {footerActions.length > 0 && (
                                <div className={classNames(css.Modal__footerButton)}>
                                    {footerActions.map(action => {
                                        return (
                                            <Button type={action.type} onClick={action.onClick}>{action.label}</Button>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    header: PropTypes.string,
    footerActions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func,
    })),
};

Modal.defaultProps = {
    isOpen: undefined,
    onClose: () => {},
    footerActions: [],
    header: '',
};

export default Modal;
