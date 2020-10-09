import React from 'react';

import '../bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class SearchBar extends React.Component{
  constructor (){
    super();
    this.state = {show:false}
  }
  handleModal(){
    this.setState({show: !this.state.show})
  }
  render(){
    return (
      <div>
        <a onClick = {() =>this.handleModal()}><FontAwesomeIcon icon = {faSearch}/></a>
        <Modal show = {this.state.show} onHide = {()=>this.handleModal()}>
          <Modal.Header className = "bg-success" closeButton>
          <input type = "text" placeholder= "Search" className = " length-input-bar"/>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default SearchBar;
