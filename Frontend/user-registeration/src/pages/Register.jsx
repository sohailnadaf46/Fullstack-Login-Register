import { useState } from "react"

const Register = () => {
  const  [data, setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleRegisterSubmit = (e) =>{
    e.preventDefault()

  }
  return (
    <div onClick={handleRegisterSubmit}>
      <label>name</label>
      <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
      <label>email</label>
      <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
      <label>password</label>
      <input type='password' placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
      <button type='submit'>Submit</button>
    </div>
  )
}

export default Register
