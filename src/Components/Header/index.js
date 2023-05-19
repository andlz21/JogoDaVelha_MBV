import React from 'react';
import Logo from '../../Objects/Logo';
import Sobre from '../../Objects/Sobre';
import Menu from '../../Objects/Menu';
import './styles.css'

const Header = () => {
   return (
      <header className='header'>
         <Logo />
         <Sobre />
         <Menu />
      </header>
   );
};

export default Header;