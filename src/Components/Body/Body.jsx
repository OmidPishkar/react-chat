import React from 'react'
import Chat from '../Chat'
import './Body.css'

export default function Body(props) {
  const chats = props.chatList.map((item , index) => {
    return (
      <Chat
        key={index}
        time={item.time}
        message={item.message}
        gravatar={'recive' !== item.type ? props.gravatars.user1 : props.gravatars.user2}
        isLeft={'recive' !== item.type}
      /> 
    )
  })

  return (
    <div className='body-plane'>
      {chats}
    </div>
  )
}
