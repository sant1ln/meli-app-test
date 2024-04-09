import React from 'react';
import ml_logo from '../assets/ml_logo.png';
import './styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='navbar-logo' src={ml_logo} alt="Logo de mercado libre" />
      <input className='navbar-input' type="text" name="" id="" />
      <button type='submit' className='navbar-search'></button>
    </nav>
  )
}
