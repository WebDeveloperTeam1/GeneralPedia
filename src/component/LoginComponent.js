import React from 'react';

import '../bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
class LoginComponent extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            show:false,
            username:'',
            emailaddress:''
        }
      }
    handleModal(){
        this.setState({show: !this.state.show})
    }
    handleUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleEmailAddress = (event) =>{
        this.setState({
            emailaddress: event.target.value
        })
    }
    render(){
        return(
            <div>
                <a onClick = {() =>this.handleModal()}>Login</a>
                <Modal show = {this.state.show} onHide = {()=>this.handleModal()}>
                <Modal.Header closeButton>
                    Login
                </Modal.Header>
                <Modal.Body className = "login-margin">
                    <button className = "btn btn-block bg-primary">Login with Facebook</button>
                    <button className = "btn btn-block bg-danger">Login with Google</button>
                    <div className = "input-fields">
                        <input type="text" class="input" placeholder="Username"
                            value = {this.state.username}
                            onChange = {this.handleUsername}
                        />
                        <input type="text" class="input" placeholder="Email Address"
                            value = {this.state.emailaddress}
                            onChange = {this.handleEmailAddress}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = {() =>this.handleModal()}>Close</Button>
                </Modal.Footer>
        </Modal>
            </div>
        );
    }
}

export default LoginComponent;