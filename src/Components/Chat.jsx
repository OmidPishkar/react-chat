import React from 'react'

export default function Chat(props){
    return(
        <div className={`chat ${props.isLeft && 'my-chat'}`}>
            <img src={props.gravatar}/>
            <div className='texts'>
                <p>{props.message}</p> 
                <span>{props.time}</span>
            </div>
        </div>
    )
}