import React from 'react';
import css from './Grid.scss';

class Grid extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div
                className={css.Grid}
            >
                {children}
            </div>
        );
    }
}

export default Grid;