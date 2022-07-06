import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(){
        this.props.handleSubmit(this.state.input)
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <div className="footer-planing">
                <input
                value={this.state.input}
                    type='text'
                    placeholder="New Message!"
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleSubmit}
                >Send!</button>
            </div>
        )
    }
}