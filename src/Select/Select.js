import React from 'react';
import css from './Select.scss';

class Select extends React.Component {
   render() {
      return (
         <select
            className={css.Select}
         >
            {this.props.children}
         </select>
      );
   }
}

export default Select;
