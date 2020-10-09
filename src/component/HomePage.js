import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import '../bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './NavbarComponent';

class HomePage extends React.Component{
    render(){
        return(
            <div >
                <NavbarComponent/>
                <div className = "row">
                    <div className = "card col-3"><p>This is article's side</p></div>
                    <div className = "card col-6"><p>This is a main article area</p></div>
                    <div className = "card col-3"><p>This is introduction area</p></div>
                </div>
            </div>
        );
    }
}

export default HomePage;