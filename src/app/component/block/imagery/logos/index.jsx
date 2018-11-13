import React from 'react'


const Imagery__Logos = (props) => (

    <div className='imagery__logo row'>
        {
            props.logos.map(logo => (
                <div className='col col3' key={logo.id}>
                    <img alt={logo.alt} src={logo.src} width='150' />
                </div>
            ))
        }
    </div>

)


export default Imagery__Logos
