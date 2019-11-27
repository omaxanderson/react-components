import React from 'react';
import css from './Button.scss';

class Button extends React.Component {
   render() {
      const {
         onClick,
         children,
      } = this.props;
      return (
         <button className={css.Button} onClick={onClick}>
            {children}
         </button>
      )
   }
}

export default Button;
