import React from 'react';
import ml_logo from '../assets/ml_logo.png';
import {Link, useNavigate} from 'react-router-dom';
import searchIcon from '../assets/search.png';
import './styles/navbar.scss'

export const Navbar = () => {

  const [value, setValue] = React.useState('');
  const navigate = useNavigate();

  const handlePressedKey = (event) => {
    if(event.key === 'Enter'){
      search()
    }
  }

  const search = () => {
    if(value === '') return;    
    navigate(`/items?search=${value}`)
  }

  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-link'>
        <img className='navbar-logo' src={ml_logo} alt="Logo de mercado libre" />
      </Link>
      <div className='navbar-searchbar'>
      <input 
        type="text" 
        className='navbar-input' 
        onKeyDown={handlePressedKey} 
        onChange={(e) => setValue(e.target.value)} 
        value={value} />
      <button type='submit' className='navbar-search' onClick={search}>
      </button>
      </div>
    </nav>
  )
}
