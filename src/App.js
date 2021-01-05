import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Nav from './components/Nav/Nav'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  
  const addUser = user => {
    // Adds user to users
  }

  const checkUser = userCredentials => {
    // Return true or false
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" render={props => (
            <SignIn {...props} isUserExist={checkUser} />
          )} />
          <Route path="/signup" render={props => (
            <SignUp {...props} users={users} addUser={addUser} />
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
