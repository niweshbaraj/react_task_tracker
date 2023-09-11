import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
          alert('Please enter the username')
          return
        }

        if(!password) {
          alert('Please enter the password')
          return
        }

        const login = async (username, password) => {
          const loginData = { username , password }
          const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
          })
  
          const data = await res.json()
             console.log(data)
             localStorage.setItem('access_token', data.access_token)
             console.log(localStorage.getItem('access_token'))
          }
          login(username, password)

        // login({ username, password })
        

        // const login = async (username, password) => {
        //   const loginData = {
        //     "username" : username,
        //     "password" : password
        //   }
        //   const res = await fetch('http://localhost:5000/login', {
        //     method: 'POST',
        //     headers: {
        //       'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(loginData),
        //   })
      
        //   const data = await res.json()
        //   console.log
      
        //   // setTasks([...tasks, data])
        // }

        setUsername('')
        setPassword('')
    }

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
              <label htmlFor="username">Username</label>
              <input type='text' placeholder="username"  value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <input type='submit' value='Login' className="btn btn-block" />
      </form>
      <button>Don't have an account? Register here.</button>
    </>
    // <h2>Login Form</h2>
  )
}

export default Login