import React from 'react';
import AdminNavbar from './AdminNavbar'

import '../bootstrap/dist/css/bootstrap.min.css';
import VerticalNavigation from './VerticalNavigation';
import Sections from './Sections';
class AdminPanel extends React.Component{
    render(){
        return(
            <div>
                <AdminNavbar/>
                <VerticalNavigation/>
                <Sections/>
            </div>
        );
    }
}
export default AdminPanel;