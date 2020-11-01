import React, {props} from 'react';
import './App.css';

import '../bootstrap/dist/css/bootstrap.min.css';
class AdminNavbar extends React.Component{
  constructor (props){
    super(props);
  }
  render(){
    return(
        <div>
        <nav className="py-3 px-4 navbar navbar-expand-lg auto-hiding-navbar fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">          
                <form className="search-form d-flex ml-auto mt-1 mb-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hello Admin
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">User Settings</a>
                            <a className="dropdown-item" href="#">Create New Account</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
        );
    }
}

export default AdminNavbar;