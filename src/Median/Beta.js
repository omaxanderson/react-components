import React from 'react';
import css from './Beta.scss';

class Beta extends React.Component {
    render() {
        return (
            <div className={css.Beta}>
                {this.props.children}
            </div>
        )
    }
}

export default Beta;
