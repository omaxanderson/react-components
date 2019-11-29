import React from 'react';
import css from './Column.scss';

class Column extends React.Component {
    render() {
        const {
            children,
            col,
            offset,
            style,
        } = this.props;
        return (
            <React.Fragment>
                {offset && <div className={css[`col-${offset}-sm`]} />}
                <div
                    className={css[`col-${col}-sm`]}
                    style={style}
                >
                    {children}
                </div>
            </React.Fragment>
        );
    }
}

export default Column;
