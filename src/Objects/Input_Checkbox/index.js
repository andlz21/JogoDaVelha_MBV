import React from 'react';
import './Input_Checkbox.css';
import Label from '../Label';

const InputCheckbox = ({ id, value, content }) => {
   return (
      <>
         <input id={id} type="checkbox" value={value} />
         <Label htmlFor={id} content={content} />
      </>
   );
};

export default InputCheckbox;