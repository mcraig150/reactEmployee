import React from 'react'
import './Header.css'
import Logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from "@material-ui/core"

function Header() {
    return (
        <div className='Header'>
            <img className='Header__icom' src={Logo} alt='Logo'/>

            <div className='Header__center'>
                <input type='text' placeholder='Enter Name' />
                <SearchIcon />
            </div>

            <div className='Header__right'>
                <p>John Dough</p>
                <Avatar />
            </div>
           
        </div>
    )
}

export default Header
