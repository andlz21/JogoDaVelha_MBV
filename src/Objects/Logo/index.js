import React from 'react';
import Logo from '../../assets/tictactoe_logo.png';
import './Logo.css'

const LogoTicTacToe = () => {
   return (
      <img className='Logo_ttt' src={Logo} alt='Logo do Tic Tac Toe' />
   );
};

export default LogoTicTacToe;