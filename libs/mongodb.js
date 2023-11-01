import mongoose from "mongoose";

const connectMongodb = () => {
    try{
        mongoose.connect(process.env.monhodb_url);
        console.log ("Connect to MongoDB...")

    }catch (error) {
        console.log(error);

    }
};

export default connectMongodb;