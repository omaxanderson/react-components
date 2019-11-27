import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './TextArea.scss';

//class TextArea extends React.Component {
const TextArea = React.forwardRef((props, ref) => {

    //render() {
        const {
            value,
            placeholder,
            allowResize,
            cols,
            rows,
            textAreaRef,
            onChange,
            //       } = this.props;
        } = props;
        return (
            <textarea
                //ref={textAreaRef}
                ref={ref}
                onChange={onChange}
                className={classNames(css.TextArea, {
                    [css['TextArea--noResize']]: !allowResize,
                })}
                rows={rows}
                cols={cols}
            />
        );
//    }
//}
})

TextArea.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    allowResize: PropTypes.bool,
    cols: PropTypes.number,
    rows: PropTypes.number,
    textAreaRef: PropTypes.any, /* TODO figure out what prop type a ref is */
    onChange: PropTypes.func,
};

TextArea.defaultProps = {
    value: '',
    placeholder: '',
    allowResize: false,
    cols: undefined,
    rows: 1,
    textAreaRef: undefined,
    onChange: () => {},
};

export default TextArea;