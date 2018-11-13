import React from 'react'


const Container__Section = (props) => {

    return (
        <div className={'container__section ' + props.alt}>{props.children}</div>
    )

}


export default Container__Section
