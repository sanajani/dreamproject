import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name field is required"]
    },
    email:{
        type:String,
        required:[true, "Email field is required"],
        unique: [true, "Email field should be unique"]
    },
    password:{
        type:String,
        required:[true, "Password field is required"],
        unique: [true, "Password field should be unique"]
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isWorker:{
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model("users",userSchema)
export default userModel