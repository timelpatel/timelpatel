import React from 'react'
import { Link } from 'react-router-dom'
import Container__Header from '../../../../component/block/container/header/index.jsx'
import Navigation__Header_Link from '../../../../component/block/navigation/header-link/index.jsx'
import Typography__Logo from '../../../../component/block/typography/logo/index.jsx'


const Header_Footer__Bcd_Header = () => (

    <div className='header-footer__header'>
        <Container__Header>
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
        </Container__Header>
    </div>

)


export default Header_Footer__Bcd_Header
