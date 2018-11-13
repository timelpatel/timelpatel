import React from 'react'
import { Link } from 'react-router-dom'


const Navigation__Header_Link = (props) => (

    <ul className='header__menu'>
        {
            props.links.map(link => (
                <li key={link.id}><Link to={link.href}>{link.text}</Link></li>
            ))
        }
    </ul>

)


export default Navigation__Header_Link
