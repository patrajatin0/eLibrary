
import app from "./src/App.ts"
import { config } from "./src/config/config.ts";

console.log("hello");

const startServer = () => {
    const port = config.port || 3000;
    app.listen(port, () => {
        console.log(`Listening on port:${port}`)
    });
};
startServer()