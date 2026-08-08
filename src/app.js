// In production level we create a server in src folder and creates a server.js file in root folder and start server in server.js by exporting app from app.js

// Create a server
const express = require("express")

const app = express();

app.use(express.json())  //middleware

const notes = []

// titlw, description
// Post /notes
app.post("/notes", (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "Note Created Successfully"
    });
});

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Note fetched successfully",
        notes: notes
    })
})

// Delete notes/:index
// Before colon static part and after colon part is dynamic
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index; // Used to get index at which note is deleted
    delete notes[ index ]
    res.status(200).json({
        message: "Note Deleted Successfully"
    })
})

app.patch('/notes/:index', (req, res) =>{
   
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "Note updated successfully"
    })
})

// If we want to use patch methpd then everytime make visibility public and also posted data on server is cleared so first post data on server then use patch, delete and get
// because the variables are stored in ram when we stop server memory gets cleared thats why we posted data also cleared 
// RAM Stand for Random Access Memory
// To overcome this need to use Database to store data permanantly

module.exports = app;


// Types of Servers - Web Server, Mail Server, File Server, Databse Server, Application Server and Proxy Server

// Database

// Operations on Database CRUD- Create, Read, Update, Delete

// hriZWAiKCBuGLXuK