import React from 'react'


const Button__Social = (props) => (

    <a href={props.href}>
        <div className={'social__icon hide-text ' + props.css}>{props.text}</div>
    </a>

)


export default Button__Social
