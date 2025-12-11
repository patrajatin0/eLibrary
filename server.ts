
import app from "./src/App.ts"
import { config } from "./src/config/config.ts";
import connectDB from "./src/config/db.ts";

console.log("hello");

const startServer = async () => {
    // connect data base
    await connectDB()
    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`Listening on port:${port}`)
    });
};
startServer()