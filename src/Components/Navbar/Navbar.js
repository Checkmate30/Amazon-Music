import React from 'react';
import './navbar.css';
import NavItem from './NavItem/NavItem';
import logo from 'src/Components/Res/logo.svg';


function Navbar() {

  return (
    <div className='nav-bar'>
      <img src={logo} alt="Logo"/>
      <NavItem item="HOME"/>
      <NavItem item="PODCASTS"/>
      <NavItem item="LIBRARY"/>
    </div>
  )
}

export default Navbar;