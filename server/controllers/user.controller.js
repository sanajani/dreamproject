import userModel from '../models/userModel.js'
import bcryptjs from 'bcryptjs'

export const registerUser = async (req,res,next) => {
    const {name,email,password} = req.body;
    try {
        const userExistBefore = await userModel.findOne({email})
        if(userExistBefore) return next(new UserAlradyExist("User exist with that email"))

        const hashPassword = bcryptjs.hashSync(password,12)

        const newUser = userModel({
            name,
            email,
            password: hashPassword
        })

        await newUser.save();
        return res.status(200).json({message:"Signup Successfully", success: true})
    } catch (error) {
        console.log("Error",error);
        return next(error)
    }
}