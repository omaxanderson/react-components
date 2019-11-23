import React from 'react';
import css from './Alpha.scss';

class Alpha extends React.Component {
    render() {
        return (
            <div className={css.Alpha}>
                {this.props.children}
            </div>
        );
    }
}

export default Alpha;
