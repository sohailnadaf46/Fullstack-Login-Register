import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
const navigate = useNavigate();
const [data, setData] = useState({
  email :"",
  password:""
});

const loginUser = async (e) => {
  e.preventDefault();

  try {
    const { email, password } = data;
    const response = await axios.post("/login", { email, password });

    if (response.status === 200) {
      // Successful login
      toast.success("User logged in successfully");
      setData({ email: "", password: "" });
      navigate("/"); 
    }
     else {
      toast.error("an error occured please try again ");
    }
  } catch (error) {
    if (error.response && error.response.data) {
      // Display error message in toast
      toast.error(error.response.data);
    }
    // Network error or other unexpected errors
    console.error("Error logging in:", error);
    // toast.error("Error logging in. Please try again later.");
  }
};





  return (
    <div>
      <form onSubmit={loginUser}>
        <label>email</label>
        <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})} />
        <label>password</label>
        <input type='password' placeholder='enter password' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
