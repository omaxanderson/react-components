import React from 'react';
import propTypes from 'prop-types';
import css from './Select.scss';

class Select extends React.Component {
   render() {
       const {
           onChange,
           children,
           value,
       } = this.props;
      return (
         <select
            className={css.Select}
            onChange={onChange}
            value={value}
         >
            {children}
         </select>
      );
   }
}

Select.propTypes = {
    onChange: propTypes.func,
    children: propTypes.node,
    defaultValue: propTypes.any,
    value: propTypes.any,
};

Select.defaultProps = {
    onChange: () => {},
    children: undefined,
    defaultValue: undefined,
    value: undefined,
}

export default Select;
