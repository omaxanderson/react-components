import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import css from './Popover.scss';

class Popover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
        };

        this.triggerId = uuid();
    }

    componentDidMount() {
        // create page listener for click
        document.addEventListener('click', this.onPageClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onPageClick);
    }

    onPageClick = (e) => {
        const trigger = ReactDOM.findDOMNode(this.triggerNode);
        const tooltip = ReactDOM.findDOMNode(this.childrenNode);
        if (!trigger || !tooltip) {
            return;
        }

        const { target } = e;
        const { isOpen } = this.state;
        if (isOpen && !trigger.contains(target) && !tooltip.contains(target)) {
            console.log('closing');
            this.setState({ isOpen: false });
        }
    };

    onTriggerClick = () => {
        console.log('trigger click');
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const {
            isOpen,
        } = this.state;

        const {
            children,
            onHover,
        } = this.props;

        const [trigger, ...rest] = children;
        return (
            <div>
                {React.cloneElement(
                    trigger,
                    {
                        onClick: !onHover ? this.onTriggerClick : undefined,
                        onMouseOver: onHover ? this.onTriggerClick : undefined,
                        onMouseOut: onHover ? this.onTriggerClick : undefined,
                        id: '',
                        ref: (node) => this.triggerNode = node,
                    },
                )}
                {isOpen &&
                    <div
                        ref={(node) => this.childrenNode = node}
                        className={css.Popover}
                    >
                        {rest}
                    </div>
                }
            </div>
        );
    }
}

Popover.propTypes = {
    isOpen: PropTypes.bool,
};

Popover.defaultProps = {
    isOpen: false,
};

export default Popover;