import React, {Component} from 'react';
import './App.css';

import '../bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
class RegisterComponent extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            show:false,
            username:'',
            firstname:'',
            lastname:'',
            emailaddress:'',
            phone:''
        }
      }
    handleModal(){
        this.setState({show: !this.state.show})
    }
    handleUsername = (event) =>{
        this.setState({
            username:event.target.value
        })
    }
    handleFirstname = (event) =>{
        this.setState({
            firstname:event.target.value
        })
    }
    handleLastname = (event) =>{
        this.setState({
            lastname:event.target.value
        })
    }
    handleEmail = (event) =>{
        this.setState({
            emailaddress:event.target.value
        })
    }
    handlePhoneNumber = (event) =>{
        this.setState({
            phone:event.target.value
        })
    }   
     render(){
        return(
            <div>
                <a onClick = {() =>this.handleModal()}>Register</a>
                <Modal show = {this.state.show} onHide = {()=>this.handleModal()}>
                <Modal.Header closeButton>
                    Login
                </Modal.Header>
                <Modal.Body className = "regsiter-content">
                    <div class="wrapper">
                        <div class="title">
                            <h1>contact us form</h1>
                        </div>
                        <div class="contact-form">
                            <div class="input-fields">
                                <input type="text" class="input" placeholder="Username"
                                    value = {this.state.username} 
                                    onChange = {this.handleUsername}
                                />
                                <input type="text" class="input" placeholder="First Name"
                                    value = {this.state.firstname} 
                                    onChange = {this.handleFirstname}
                                />
                                <input type="text" class="input" placeholder="Last Name"
                                    value = {this.state.lastname} 
                                    onChange = {this.handleLastname}
                                />
                                <input type="text" class="input" placeholder="Email Address"
                                    value = {this.state.emailaddress} 
                                    onChange = {this.handleEmail}
                                />
                                <input type="number" class="input" placeholder="Phone"
                                    value = {this.state.phone} 
                                    onChange = {this.handlePhoneNumber}
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {() =>this.handleModal()} className = "btn-success">Register</Button>
                    <Button onClick = {() =>this.handleModal()}>Close</Button>
                </Modal.Footer>
        </Modal>
            </div>
        );
    }
}

export default RegisterComponent;