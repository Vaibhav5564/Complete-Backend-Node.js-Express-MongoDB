// Start a server

const app = require("./src/app");

// app.listen takes two parameters one is port no. and other is callback means when server started then that callback runs automatically

app.listen(3000, ()=>{
    console.log("Server is Running on port 3000");
});