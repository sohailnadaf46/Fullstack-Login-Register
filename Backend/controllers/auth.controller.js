import { User } from "../models/user.model.js"
import { hashPassword, comparePassword } from "../helpers/auth.js"
const test = (req, res) =>{
      res.json({message: 'the test is working'})
}
//register Endpoint
const registerUser = async (req, res) =>{

      try {
            const { name, email, password } = req.body;
            
            if (!name || !password || password.length < 6) {
                  return res.status(400).json("Name and password are required. Password must be at least 6 characters long.");
             }


            const existEmail = await User.findOne({email})

            if(existEmail){
                  return res.json("email is already registerd")
            }

            const hashedPassword = await hashPassword(password)
            //creating the user in the db 
            const user = await User.create({
                  name,
                  email,
                  password:  hashedPassword,
            })

            return res.json(user)
            
          } catch (error) {
            console.error("Error registering user:", error.message);
            res.status(400).send(error.message);
          }


}
//login user endpoint
const loginUser = async  (req, res) =>{
      try { 
            const { email, password} = req.body;

            if(!email || !password){
                 return res.status(400).json("please enter email and password")
            }
            
            const user  = await User.findOne({email});

            if(!user){
                  return res.status(400).json("user does not exist please register")
            }

            if(!email){
                 return  res.status(400).json("user does not exist, please register");
            }

            //compare the password
            const passwordMatch =  await comparePassword(password, user.password);

            if(passwordMatch){
                  return res.status(200).json("User logged in succesfully password match")
            }
            if(!passwordMatch){
                  return res.status(400).json("password do not match")
            }
            
      } catch (error) {
            console.log("error loggin the user", error)
            res.status(400).send(error.message)
      }
}

export { test, registerUser, loginUser}