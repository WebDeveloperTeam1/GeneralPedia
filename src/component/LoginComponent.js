import React from 'react';

import '../bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
class LoginComponent extends React.Component{
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
                <a onClick = {() =>this.handleModal()}>Login</a>
                <Modal show = {this.state.show} onHide = {()=>this.handleModal()}>
                <Modal.Header closeButton>
                    Login
                </Modal.Header>
                <Modal.Body className = "login-margin">
                    <button className = "btn btn-block bg-primary">Login with Facebook</button>
                    <button className = "btn btn-block bg-danger">Login with Google</button>
                    <div className = "input-fields">
                        <input type="text" class="input" placeholder="Username"/>
                        <input type="text" class="input" placeholder="Email Address"/>
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