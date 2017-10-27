import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
    <header className='container__header'>
        <h1 className='header__h1'>Timel Patel</h1>
        <ul className='header__menu'>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
        </ul>
    </header>
)


export default Header
