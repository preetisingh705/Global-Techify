import mongoose from "mongoose";



export const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@global-techify.balig.mongodb.net/?retryWrites=true&w=majority&appName=Global-Techify`;
    try{
     await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
     console.log('Database connected Succefully')
    }catch (error) {
        console.log("Error while connecting with the database",error.message);
    }
}

export default Connection;