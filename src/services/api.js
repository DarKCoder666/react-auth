function getError({ message }) {
  return {
    message,
    success: false
  }
}

const DB = {
  users: [],
  lastUserId: 0,
  addUser(user) {
    const newUser = {
      ...user,
      id: this.lastUserId++
    }
    this.users = [...this.users, newUser]
    return newUser
  },
  getUserByLogin(login) {
    return DB.users.find(user => user.login === login);
  },
}

const api = {
  GET: (url, params) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (url) {
          case '/user':
            const user = DB.getUserByLogin(params.data.login)
            if (user) {
              return resolve({
                data: user,
                success: true
              })
            }
            reject(getError(""))
            break;
          default:
            reject(getError({ message: "404" }))
        }
      }, 200);
    })
  },
  POST: (url, params) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (url) {
          case '/user/create':
            const { name, age, login, password } = params.data;
            // Validate fields
            if (!(name && age && login && password)) {
              return reject(getError({ message: "Not all params are sent" }))
            }
            // Check if user with such login is already registred
            if (DB.getUserByLogin(login)) {
              return reject(getError({ message: "User with such login is already registed!" }))
            }
            // Create new user
            resolve({
              data: DB.addUser({ name, age, login, password }),
              success: true
            })
            break;
          default:
            reject(getError({ message: "404" }))
        }
      }, 200)
    })
  }
}

export default api