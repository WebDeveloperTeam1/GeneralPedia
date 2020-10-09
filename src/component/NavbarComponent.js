import React, {props} from 'react';
import SearchBar from './SearchBar';

import '../bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
class NavbarComponent extends React.Component{
  constructor (props){
    super(props);
  }
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto ">
            <li className = "navbar-margin"><SearchBar /></li>
            <li className = "navbar-margin"><LoginComponent/></li>
            <li className = "navbar-margin"><RegisterComponent/></li>
          </div>
        </div>
      </nav>
        );
    }
}

export default NavbarComponent;