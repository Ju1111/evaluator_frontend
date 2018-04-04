import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import Batches from './components/batches/Batches'
import LogoutPage from './components/logout/LogoutPage'
// import StudentsList from './components/studentslist/Students'
// import AddBatch from './components/addbatch/AddBatch'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/logout" component={ LogoutPage } />
          <Route exact path="/batches" component= { Batches } />
          {/* <Route exact path="/batches/:id" component= { StudentsList } /> */}
          {/* <Route exact path="newbatch" component= { AddBatch } */}
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
