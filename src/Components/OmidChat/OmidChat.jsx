import React, { Component } from 'react'
import Heading from '../Heading/Heading'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

export default class OmidChat extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'duff esmi',
      chatList: [
        {type: 'send' , message: 'Hello My name is Omid, whats your name?' , time: "11:31:24 am"},
        {type: 'recive' , message: 'Hello My name is Anna, How are you Omid?', time: "11:35:24 am"},
        {type: 'send' , message: 'nice to meet you anna, im fine...', time: "12:10:24 pm"}
      ],
      gravatars: {
        user1: 'https://img.icons8.com/offices/344/user-male-skin-type-5.png',
        user2: "https://img.icons8.com/color/344/user-female-skin-type-4.png"
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(message){
    this.setState(state => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {type: 'send' , message, time: new Date().toLocaleTimeString()}
        ]
      }
    })
  }

  render(){
    return (
      <div>
          <Heading title={this.state.title}/>
          <Body
            chatList={this.state.chatList}
            gravatars={this.state.gravatars}
          />
          <Footer
            handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}
