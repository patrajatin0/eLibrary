import mongoose from "mongoose"
import { config } from "./config.ts"

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("connectde to database successfully");

        })

        mongoose.connection.on("error", (error) => {
            console.log("Error in connecting to database", error);

        })
        await mongoose.connect(config.databseUrl as string);




    } catch (error) {
        console.error("Faild to connect to database", error);
        process.exit(1);
    }

}

export default connectDB