import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
//route for login users
const logInUser = async(req,res) => {
   
}
//Route for registering users
const registerUser = async (req,res) => {
    try {
        const {name, email, password}=req.body;

        // checking user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }

        //validate email formata and strong pasword
        if(!validator.isEmail(email)){

            return res.json({success:false, message:"Please  enter a valid email"})

        }
        //check if password is lengght is < characters
        if (password.length < 8){
            return res.json({success:false, message:"please enter a valid password"})
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword

        })
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, token})


        //


    }catch (error){

        console.log (error)
        res.json({success:false, message:error.message})

    }
}
// Route for admin 
const adminLogIn = async  (req,res)=>{

}

export {logInUser,registerUser, adminLogIn};
