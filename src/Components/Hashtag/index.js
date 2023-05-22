import React from 'react';
import './style.css';
import Card from '../../Objects/Card';
import Player from '../../Objects/Player';
import './style.css'

const Hashtag = () => {
   return (
      <Card>
         <ul className='hashtag'>
            <li className='grid-item'><Player player="o" /></li>
            <li className='grid-item'><Player player="x" /></li>
            <li className='grid-item'><Player player="x" /></li>

            <li className='grid-item'><Player player="x" /></li>
            <li className='grid-item'><Player player="o" /></li>
            <li className='grid-item'><Player player="o" /></li>

            <li className='grid-item'><Player player="x" /></li>
            <li className='grid-item'><Player player="o" /></li>
            <li className='grid-item'><Player player="x" /></li>
         </ul>
      </Card >
   );
};

export default Hashtag;