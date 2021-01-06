import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Nav from './components/Nav/Nav'
import api from './services/api'
import Errors from './components/Errors/Errors'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [authErrors, setAuthErrors] = useState([])
  const addUser = async user => {
    try {
      const result = await api.POST('/user/create', { data: user })
      if (result.success) {
        setUser(result.data)
        setAuthErrors([])
      }
    } catch (err) {
      setAuthErrors([...authErrors, err.message])
    }
  }
  const checkUser = userCredentials => {
    // Return true or false
  }

  return (
    <div className="App">
      <Errors errors={authErrors} />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" render={props => (
            <SignIn {...props} isUserExist={checkUser} />
          )} />
          <Route path="/signup" render={props => (
            <SignUp {...props} addUser={addUser} />
          )} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
