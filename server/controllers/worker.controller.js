import workerModel from '../models/workerModel.js'
import userModel from '../models/userModel.js'
import CustomError from '../utils/CustomError.js'
import mongoose from 'mongoose'

export const createWorker = async (req,res,next) => {
    console.log(req.body);
    console.log('helo world');
      //   name: '',
  //   lastName: '',
  //   email:'',
  //   job: '',
  //   experience: '',
  //   phoneNumber1: '',
  //   phoneNumber2: '',
  //   profileImage: '',
  //   province: '',
  //   : '',personalInfo
    const {name,email,lastName,job,experience,phoneNumber1,phoneNumber2, province,personalInfo,profileImage} = req.body;
    if(!name || !email || !job || !phoneNumber1 || !province || !personalInfo) return next(new CustomError("All the fields are required",403))

    try {
        const userModeldata = await userModel.findOne({email},'-password')
        // const workerModeldata = await workerModel.findOne({email},'-password')

        if(!userModeldata) return next(new CustomError("UserNot Found",403))
        // if(workerModeldata) return next(new CustomError("Worker have an account"))

        const newWorker = workerModel({
            name: userModeldata.name,
            email: userModeldata.email,
            lastName,job,experience,
            phoneNumber1,phoneNumber2
            ,province,
            aboutuser: personalInfo,
            profileImage
        })
        await newWorker.save();
        await userModel.findOneAndUpdate({email},{isWorker: true},{new:true}).select('-password')
        return res.status(200).json({message:"worker created Successfully", success: true, data:newWorker})
    } catch (error) {
        next(new CustomError(error.message, error.statusCode))      
    }
}

// update worker data
export const updateWorker = async (req,res,next) => {
    const {name,email,lastName,job,experience,phoneNumber1,phoneNumber2, province,personalInfo,profileImage} = req.body;
    const workerModeldata = await workerModel.findOne({email},'-password')
    if(!workerModeldata) return next(new CustomError("UserNot Found",403))
    try {
       const workerUpdated = await workerModel.findOneAndUpdate({email},{
            name,
            email,
            lastName,
            job,
            experience,
            phoneNumber1,
            phoneNumber2,
            province,
            aboutuser:personalInfo,
            profileImage
        },{new:true})
        return res.status(200).json({message:"worker update Successfully", success: true, data:workerUpdated})
    } catch (error) {
        next(new CustomError(error.message, error.statusCode))
    }
}

// get single user from worker database
export const getSignleWorker = async (req,res,next) => {
   const email = req?.params?.email;
//    if(!mongoose.Types.ObjectId.isValid(id)) return next(new CustomError("Invalid ID:",403))
   try {
    const workerData = await workerModel.findOne({email})
    console.log(workerData);
    if(!workerData) return next(new CustomError("User Not Found",403))
    return res.status(200).json({message:`there is ${workerData?.name} jan's informtion`, success: true, data:workerData})
   } catch (error) {
        next(new CustomError(error.message, error.statusCode))
   }
}

// delete user by id
export const deleteWorkerById = async (req,res,next) => {
    const id = req?.params?.id;
    if(!mongoose.Types.ObjectId.isValid(id)) return next(new CustomError("Invalid ID is:",403))
    try {
        const deleteWorkerWithId = await workerModel.findByIdAndDelete(id)
        console.log("conosle",deleteWorkerWithId);
        if(deleteWorkerWithId) return res.status(200).json({message:`account with this ${id} deleted successfully`, success: true})
        if(!deleteWorkerWithId) return res.status(400).json({message:`such an account did'nt exist`, success: false})
    } catch (error) {
        console.log('error is here',error);
        next(new CustomError(error.message, error.statusCode))
    }
}

export const getAllWorkers = async (req,res,next) => {
    const limit = parseInt(req?.query?.limit) || 8;
    const page = parseInt(req?.query?.page) || 1;
    try {
        const getAllWorkers = await workerModel.find().limit(limit * 1).skip((page - 1) * limit).select('-password').exec();
        const count = await workerModel.countDocuments();
        const totalPages = Math.floor((count + limit - 1) / limit);
        return res.status(200).json({success: true, data: getAllWorkers, totalPages,page})
    } catch (error) {
        next(new CustomError(error.message, error.statusCode))
    }
}