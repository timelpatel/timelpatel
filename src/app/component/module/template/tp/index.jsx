import React from 'react'
import Header_Footer__Header from '../../header-footer/header/index.jsx'
import Header_Footer__Footer from '../../header-footer/footer/index.jsx'

const Template__Tp = (props) => (

    <div>

        <Header_Footer__Header />
        {props.children}
        <Header_Footer__Footer />

    </div>

)


export default Template__Tp
