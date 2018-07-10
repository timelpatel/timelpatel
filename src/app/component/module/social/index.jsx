import React from 'react'
import Button__Social from '../../../component/block/button/social/index.jsx'


const Social = () => (

    <div className='row'>
        <div className='col'>
            <Button__Social
                css='linkedin'
                href='https://linkedin.com/in/timelpatel'
                text='LinkedIn'
            />
        </div>

        <div className='col'>
            <Button__Social
                css='twitter'
                href='https://twitter.com/timelpatel'
                text='Twitter'
            />
        </div>

        <div className='col'>
            <Button__Social
                css='instagram'
                href='https://instagram.com/timelpatel/'
                text='Instagram'
            />
        </div>
    </div>

)


export default Social
