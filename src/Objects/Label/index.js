import React from 'react';
import './Label.css'

const Label = ({htmlFor, content}) => {
   return (
      <label className='label' htmlFor={htmlFor}>{content}</label>
   ) 
}

export default Label