import React from 'react'


const Typography__Bullet_list = (props) => (
    <ul className='list__bullet'>
        {
            props.listItems.map(list => (
                <li key={list.id}>{list.text}</li>
            ))
        }
    </ul>
)


export default Typography__Bullet_list
