import React from 'react'
import './navItem.css';

function NavItem(props) {

  return (
    <div className='nav-item'>
        {props.item}
    </div>
  )
}

export default NavItem;