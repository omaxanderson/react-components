import React from 'react';
import css from './Button.scss';

class Button extends React.Component {
   render() {
      console.log(css);
      return (
         <button className={css.Button}>
            {this.props.children}
         </button>
      )
   }
}

export default Button;
