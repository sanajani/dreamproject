import mongoose from 'mongoose'

const workerSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    profileImageURL:{
        type:String
    },
    province:{
        type:String,
        required: true
    },
    aboutuser:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    job:{
        type:String,
        required: true
    },
    experience:{
        type:String,
    },
    phoneNumber1:{
        type:String,
        required: true
    },
    phoneNumber2:{
        type:String,
    }
})

const workderModel = mongoose.model("worker",workerSchema)
export default workderModel