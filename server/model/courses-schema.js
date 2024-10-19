import mongoose from "mongoose";

const coursesSchema =new mongoose.Schema({
    id:{
            type: String,
            required: true,
            unique: true
        },
        url: String,
        title: Object,
        price:Object,
        quantity: Number,
        description: String,
        discount: String,
        tagline: String
    });
    
    const Courses = mongoose.model('courses', coursesSchema);
    
    export default Courses;
