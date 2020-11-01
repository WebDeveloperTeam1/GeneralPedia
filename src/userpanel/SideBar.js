import React from 'react';

import './App.css'
import '../bootstrap/dist/css/bootstrap.min.css';
class SideBar extends React.Component{
    render(){
        return(
            <div class="d-flex" id="wrapper">
                <div class="bg-success border-right" id="sidebar-wrapper">
                    <div class="sidebar-heading">Start Bootstrap </div>
                    <div class="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action bg-success"><strong>Dashboard</strong></a>
                        <a href="#" className="list-group-item list-group-item-action bg-success"><strong>Upload</strong></a>
                        <a href="#" className="list-group-item list-group-item-action bg-success"><strong>Posts</strong></a>                            
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#"><strong>Log Out</strong> </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="container-fluid">
                        <h1 class="mt-4">Simple Sidebar</h1>
                        <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
                        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;