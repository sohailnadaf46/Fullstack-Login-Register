import { useState } from "react"

const Login = () => {

const [data, setData] = useState({
  Email :"",
  password:""
});

const loginUser = (e) =>{
e.preventDefault()
}

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type='email' placeholder='enter email...' value={data.Email} onChange={(e) => setData({...data, Email:e.target.value})} />
        <label>password</label>
        <input type='password' placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
