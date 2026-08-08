const mongoose = require("mongoose");

// note = {title, description}



async function connectDB(){
    await mongoose.connect("mongodb+srv://vaibhavadsul5564_db_user:hriZWAiKCBuGLXuK@cluster0.hhjkpvg.mongodb.net/halley") // It connect server with database
    // The parameter in mongoose.connect is url that we used to connect with cluster and halley is database name
   // If we dont have databse named hallley then it creates a database named halley
    console.log("Connected to DB");
}

module.exports = connectDB;