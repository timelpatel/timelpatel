import React from 'react'
import { Link } from 'react-router-dom'
import Typography__Logo from '../../../../component/block/typography/logo/index.jsx'
import Navigation__Header_Link from '../../../../component/block/navigation/header_link/index.jsx'
import PHeader_Footer__Header from '../../../../component/pattern/header-footer/header/index.jsx'


const Header_Footer__Bcd_Header = () => (

    <PHeader_Footer__Header>
        <Typography__Logo>
            <Link to='/block-component-design'>BCD</Link>
        </Typography__Logo>

        <Navigation__Header_Link
            links={
                [
                    {id: 1, href: '/components', text: 'Components'},
                    {id: 2, href: '/assets', text: 'Assets'},
                    {id: 3, href: '/behaviours', text: 'Behaviours'},
                ]
            }
        />
    </PHeader_Footer__Header>

)


export default Header_Footer__Bcd_Header
