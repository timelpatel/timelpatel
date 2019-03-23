import React from 'react'
import Card__Content from '../../../block/card/content/index.jsx'
import Typography__Bullet_List from '../../../block/typography/bullet-list/index.jsx'
import Typography__Subtle_Title from '../../../block/typography/subtle-title/index.jsx'


const Collection__InfoTile = (props) => (

    <div className='collection__info-tile'>
        {
            <Card__Content>

                <Typography__Subtle_Title
                    text={props.title}
                />

                <Typography__Bullet_List
                    listItems={props.listItems}
                />

            </Card__Content>
        }
    </div>

)


export default Collection__InfoTile
