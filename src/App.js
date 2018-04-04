import React, { Component } from 'react';
import './App.css';
import LoginPage from './login/LoginPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
          </header>
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        </div>
      </Router>
    );
  }
}

export default App;
