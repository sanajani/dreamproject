import userModel from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import CustomError from '../utils/CustomError.js'
dotenv.config();

const JWTSECRETKEY = process.env.JWT_SECRETKEY || ''

export const registerUser = async (req,res,next) => {
    const {name,email,password} = req.body;
    try {
        const userExistBefore = await userModel.findOne({email})
        if(userExistBefore) return next(new CustomError("User exist with that email",402))

        const hashPassword = bcryptjs.hashSync(password,12)

        const newUser = userModel({
            name,
            email,
            password: hashPassword
        })

        await newUser.save();
        return res.status(200).json({message:"Signup Successfully", success: true})
    } catch (error) {
        next(new CustomError(error.message, error.statusCode))
    }
}

export const loginUser = async (req,res,next) => {
    const {email,password} = req.body;
    try {
        const isUserExist = await userModel.findOne({email})
        if(!isUserExist) return next(new CustomError("Invalid Email or Password",401))

        const isPasswordCorrect = bcryptjs.compareSync(password,isUserExist.password)
        if(isPasswordCorrect) return next(new CustomError("Invalid Password or Email" ,403))

        const token = jwt.sign({_id: isUserExist._id}, JWTSECRETKEY,{
            expiresIn:'1d'
        })

        return res.status(200).json({message:"Signup Successfully", success: true, data:token})
    } catch (error) {
        console.log("Error",error);
        next(new CustomError(error.message, error.statusCode))
    }
}