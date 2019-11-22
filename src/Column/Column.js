import React from 'react';
import css from './Column.scss';

class Column extends React.Component {
    render() {
        const {
            children,
            col,
            offset,
        } = this.props;
        console.log('offset', offset);
        return (
            <React.Fragment>
                {offset && <div className={css[`col-${offset}-sm`]} />}
                <div
                    className={css[`col-${col}-sm`]}
                >
                    {children}
                </div>
            </React.Fragment>
        );
    }
}

export default Column;
