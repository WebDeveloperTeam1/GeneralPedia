import React from 'react';
import './App.css';

import '../bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
class RegisterComponent extends React.Component{
    constructor (){
        super();
        this.state = {show:false}
      }
    handleModal(){
        this.setState({show: !this.state.show})
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
                                <input type="text" class="input" placeholder="Username"/>
                                <input type="text" class="input" placeholder="First Name"/>
                                <input type="text" class="input" placeholder="Last Name"/>
                                <input type="text" class="input" placeholder="Email Address"/>
                                <input type="number" class="input" placeholder="Phone"/>
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