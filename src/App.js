import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Auth/Login';
import SignUp from './Auth/Signup';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
}

export default App;
