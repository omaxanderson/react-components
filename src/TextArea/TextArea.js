import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './TextArea.scss';

class TextArea extends React.Component {
    render() {
        const {
            value,
            placeholder,
            allowResize,
            cols,
            rows,
        } = this.props;
        return (
            <textarea
                className={classNames(css.TextArea, {
                    [css['TextArea--noResize']]: !allowResize,
                })}
                rows={rows}
                cols={cols}
            />
        );
    }
}

TextArea.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    allowResize: PropTypes.bool,
    cols: PropTypes.number,
    rows: PropTypes.number,
};

TextArea.defaultProps = {
    value: '',
    placeholder: '',
    allowResize: false,
    cols: undefined,
    rows: 1,
};

export default TextArea;