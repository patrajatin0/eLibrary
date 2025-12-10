
import app from "./src/App.ts"
console.log("hello");

const startServer = () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Listening on port:${port}`)
    });
};
startServer()