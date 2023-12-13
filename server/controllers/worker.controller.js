import workerModel from '../models/workerModel.js'
import userModel from '../models/userModel.js'
import CustomError from '../utils/CustomError.js'

export const createWorker = async (req,res,next) => {
    const {name,email,lastName,job,experience,phoneNumber1,phoneNumber2, province,aboutuser,profileImageURL} = req.body;
    if(!name || !email || !job || !phoneNumber1 || !province || !aboutuser) return next(new CustomError("All the fields are required",403))
    const newWorker = workerModel({
        name,email,lastName,job,experience,phoneNumber1,phoneNumber2,province,aboutuser,profileImageURL
    })
    try {
        const userModeldata = await userModel.findOne({email})
        if(!userModeldata) return next(new CustomError("UserNot Found",403))

        await newWorker.save();
        await userModel.findOneAndUpdate({email},{isWorker: true},{new:true})
        console.log(userModeldata);
        return res.status(200).json({message:"worker created Successfully", success: true, data:newWorker})
    } catch (error) {
        next(new CustomError(error.message, error.statusCode))      
    }
} 