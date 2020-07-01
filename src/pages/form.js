
import React, { Component } from 'react'
import axios from 'axios';
export class Form extends Component {
    state={
        name:'',
        lastname:'',
        email:'',
        message:'',
        sent: false
    }
// handle input{
    handleName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }

    handleLastname = (e) =>{
        this.setState({
            lastname: e.target.value
        })
    }

    handleEmail = (e) =>{
        this.setState({
            email: e.target.value 
        })
    }

    handleMessage = (e) =>{
        this.setState({
            message:e.target.value
        })
    }  

// end of hand;le input

formSubmit = (e) =>{
    e.preventDefault();

    let data = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        message: this.state.message
    }

    axios.post('/api/forma', data)
    .then(res=>{
        this.setState({
            sent:true,
        },this.resetForm())
    }).catch(()=>{
        console.log('message not sent');
    })
}

// for reseting initial data
resetForm = () =>{
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    }, 3000)
}


    render() {
        return (
            <div className="container">
                
                {/* <form onSubmit={this.formSubmit}>
                    <div className="singleItem">
                        <label htmlFor="name">name</label>
                        <input type="text" name="name"
                        className="inputfield" placeholder=" name" value={this.state.name}
                        onChange={this.handleName} />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="lastname">lastname</label>
                        <input type="text" name="lastname"
                        className="inputfield" placeholder=" lastname"
                        value={this.state.lastname} onChange={this.handleLastname} />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                        className="inputfield" placeholder=" email" 
                        value={this.state.email} onChange={this.handleEmail} required />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="message" className="label">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="message" className="textarea"
                        value={this.state.message} onChange={this.handleMessage} ></textarea>
                    </div>

                    <div className={this.state.sent ? 'msg msgAppear':'msg'} >Message has been sent </div>
                    <div className="btn">
                        <button type="submit" className="button-primary button-primary1">Submit</button>
                    </div>
                </form> */}

         
                <div className="kwes-form">
                    <form method="POST" action="https://kwes.io/api/foreign/forms/zkMyIjgoGudDbQ7QkRSf">
                        <div className="singleItem">
                            <label htmlFor="name">name</label>
                            <input type="text" rules="required|max:255" name="name"placeholder=" name"  className="inputfield"/>
                         
                    
                        </div>

                        <div className="singleItem">
                            <label htmlFor="email">email</label>
                            <input type="email" rules="required|max:255" placeholder=" email"  name="email"className="inputfield" />
                        </div>

                        <div className="singleItem">
                            <label htmlFor="message" className="label">Message</label>
                            <textarea name="message" id="" cols="30" rows="5" placeholder="message" className="textarea"rules="required|max:255"
                            name="message" className="textarea"
                        ></textarea>
                        </div>
                        
                        <button type="submit" className="button-primary button-primary1" style={{paddingTop:'20px'}}>Submit</button>
                    </form>
                </div>
                <script src="https://kwes.io/js/kwes.js"></script>
            </div>
        )
    }
}

export default Form
