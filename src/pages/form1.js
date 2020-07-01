import React, { Component } from 'react'
import Axios from 'axios'

export class Form2 extends Component {

    constructor(){
        super()

        this.state = {
            name:'',
            email:'',
             message:''
        }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    async handleSubmit(e) {
        e.preventDefault()
        const {name, email, message} = this.state

        const form = await Axios.post('/api/form', {
            name,
            email,
             message
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="singleItem">
                        <label htmlFor="name">name</label>
                        <input type="text" name="name"
                        className="inputfield" placeholder=" name" 
                        name="name"
                        onChange={this.handleChange} />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                        className="inputfield" placeholder=" email" 
                        name="email"
                        onChange={this.handleChange} />
                    </div>

                    {/* <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="subject"
                        className="inputfield" placeholder=" subject" 
                        name="subject"
                        onChange={this.handleChange} />
                    </div> */}

                    <div className="singleItem">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="message" className="textarea"
                        name="message"
                        onChange={this.handleChange}></textarea>
                    </div>

                    
                    <div className="btn">
                        <button type="submit" className="button-primary button-primary1">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form2
