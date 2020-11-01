import React from 'react';
import './App.css';

import HomePage from './HomePage';
import UserPanel from '../userpanel/UserPanel';
import AdminPanel from '../adminpanel/AdminPanel';

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
          <HomePage/>
      </div>
    );
  }
}

export default App;
