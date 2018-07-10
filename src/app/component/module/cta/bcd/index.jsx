import React from 'react'

import Button__Primary from '../../../../component/block/button/primary/index.jsx'
import Container__Chic from '../../../../component/block/container/chic/index.jsx'
import Typography__Body_Copy from '../../../../component/block/typography/body-copy/index.jsx'
import Typography__Section_Title from '../../../../component/block/typography/section-title/index.jsx'
import Banner__Promote from '../../../../component/pattern/banner/promote/index.jsx'


const CTA__BCD = () => (

    <Banner__Promote>
        <Container__Chic>
            <div className='row'>
                <div className='col col12'>
                    <Typography__Section_Title
                        text='Block Component Design'
                    />
                    <Typography__Body_Copy
                        text='A design system to structure components'
                    />
                    <Button__Primary
                        href='/block-component-design'
                        text='Learn more'
                    />
                </div>
            </div>
        </Container__Chic>
    </Banner__Promote>

)


export default CTA__BCD
