import React from 'react';
import './App.css';
import HomePage from './HomePage';
import NavbarComponent from './NavbarComponent';
import AdminPanel from '../adminpanel/AdminPanel';
import AdminNavbar from '../adminpanel/AdminNavbar';

class App extends React.Component{
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
        <AdminPanel/>
      </div>
    );
  }
}

export default App;
