import { useState } from "react";
import axios from "axios"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const  [data, setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleRegisterSubmit = async (e) =>{
    e.preventDefault();
    //we have to destructure it and then send al the data as payload to the api endpoint 
    const {name, email, password} = data;
    try {
      const response  = await axios.post("/register", {name, email, password
      });
      if(response.data.error){
        toast.error(response.data.error)
      }
      else{
        setData([]);
        toast.success("User Registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "error occured while registering the user")
    }
  
  }
  return (
    <form onSubmit={handleRegisterSubmit}>
      <label>name</label>
      <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
      <label>email</label>
      <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
      <label>password</label>
      <input type='password' placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Register
