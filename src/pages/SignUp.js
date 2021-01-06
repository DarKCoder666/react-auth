import React, { useState } from 'react'

export default function SignUp({ addUser }) {
  const [user, setUser] = useState({
    name: '', age: '', login: '', password: '', password2: ''
  })

  const onInputChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (user.password !== user.password2) return alert("Пароли не совпадают")
    const { name, age, login, password } = user;
    addUser({ name, age, login, password })
    setUser({ name: '', age: '', login: '', password: '', password2: '' })
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" required name="name" type="text" value={user.name} onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" required name="age" type="number" value={user.age} onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="login">Login</label>
          <input id="login" required name="login" type="text" value={user.login} onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" required name="password" type="password" value={user.password} onChange={onInputChange} />
        </div>
        <div>
          <label htmlFor="password2">Repeat Password</label>
          <input id="password2" required name="password2" type="password" value={user.password2} onChange={onInputChange} />
        </div>
        <button type="submit">Create user</button>
      </form>
    </div>
  )
}
