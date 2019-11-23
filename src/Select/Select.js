import React from 'react';
import css from './Select.scss';

class Select extends React.Component {
   render() {
       const {
           onChange,
           children,
       } = this.props;
      return (
         <select
            className={css.Select}
            onChange={onChange}
         >
            {children}
         </select>
      );
   }
}

export default Select;
