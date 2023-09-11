import { useState } from "react"

const Register = () => {
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

        // const register = { username , password }

        const register = async (username, password) => {
        const registerData = { username , password }
        const res = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerData)
        })

        const data = await res.json()
           console.log(data)
        }
        register(username, password)

        setUsername('')
        setPassword('')
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Username</label>
            <input type='text' placeholder="username"  value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Password</label>
            <input type='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <input type='submit' value='Register' className="btn btn-block" />
    </form>
    // <div>Register</div>
  )
}

export default Register