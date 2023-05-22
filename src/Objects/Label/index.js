import React from 'react';
import './Label.css'

const Label = ({content}) => {
   return (
      <label className='label' htmlFor=''>{content}</label>
   )
}

export default Label