import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './Column.scss';

//class Column extends React.Component {
    //render() {
const Column = (props) => {
    const {
        children,
        col,
        offset,
        offsetSm,
        offsetMd,
        offsetLg,
        style,
        sm,
        md,
        lg,
    } = props;
    return (
        <React.Fragment>
            <div
                className={classNames({
                    [css[`col-${col}`]]: col,
                    [css[`Column--col-sm-${col}-offset-${offset}`]]: offset,
                    [css[`Column--col-sm-${sm}`]]: sm,
                    [css[`Column--col-md-${md}`]]: md,
                    [css[`Column--col-lg-${lg}`]]: lg,
                    [css[`Column--col-sm-${sm}-offset-${offsetSm}`]]: offsetSm,
                    [css[`Column--col-md-${md}-offset-${offsetMd}`]]: offsetMd,
                    [css[`Column--col-lg-${lg}-offset-${offsetLg}`]]: offsetLg,
                })}
                style={style}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

Column.propTypes = {
    children: PropTypes.node.isRequired,
    col: PropTypes.number,
    offset: PropTypes.number,
    offsetSm: PropTypes.number,
    offsetMd: PropTypes.number,
    offsetLg: PropTypes.number,
    style: PropTypes.any,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
};

Column.defaultProps = {
    col: 0,
    offset: 0,
    offsetSm: 0,
    offsetMd: 0,
    offsetLg: 0,
    style: undefined,
    sm: 0,
    md: 0,
    lg: 0,
};

export default Column;
