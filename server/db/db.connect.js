import mongoose from "mongoose";

const DB_CONNECTION = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dreamprojectsana')
        console.log('connected successfully');
    } catch (error) {
        console.log(error, "Error field is that one");
    }
}

export default DB_CONNECTION