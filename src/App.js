import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import Batches from './components/batches/Batches'
import LogoutPage from './components/logout/LogoutPage'
import StudentsList from './components/studentslist/StudentsList'
import AddBatch from './components/addbatch/AddBatch'
import AddStudent from './components/addstudent/AddStudent'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/logout" component={ LogoutPage } />
          <Route exact path="/batches" component= { Batches } />
          <Route exact path="/batches/:batchId/students" component= { StudentsList } />
          <Route exact path="/newbatch" component= { AddBatch } />
          <Route exact path="/batches/:batchId/newstudent" component= { AddStudent } />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
