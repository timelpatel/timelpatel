import React from 'react'
import {Link} from 'react-router-dom'


const Button__Primary = (props) => (

    <Link
        className='button__primary'
        to={props.href}>
            <span>{props.text}</span>
    </Link>

)


export default Button__Primary
