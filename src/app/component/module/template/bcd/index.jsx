import React from 'react'
import Header_Footer__Bcd_Header from '../../header-footer/bcd-header/index.jsx'
import Header_Footer__Footer from '../../header-footer/footer/index.jsx'

const Template__Bcd = (props) => (

    <div>

        <Header_Footer__Bcd_Header />
        {props.children}
        <Header_Footer__Footer />

    </div>

)


export default Template__Bcd
