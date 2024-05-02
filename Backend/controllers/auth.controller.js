import { User } from "../models/user.model.js"
const test = (req, res) =>{
      res.json({message: 'the test is working'})
}

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

            const user = await User.create({
                  name,
                  email,
                  password
            })

            return res.json(user)
            
          } catch (error) {
            console.error("Error registering user:", error.message);
            res.status(400).send(error.message);
          }


}

export { test, registerUser}