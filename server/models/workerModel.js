import mongoose from 'mongoose'

const workerSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique: true
    },
    profileImageURL:{
        type:String
    },
    province:{
        type:String,
        required: true
    },
    aboutYou:{
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