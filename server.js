const express = require('express');

const app = express(); // Created Server But Not Start

//Created Routes to respond when user request for '/', '/about' etc

//request Data Supply (frontend to backend)
//respond Data Supply (backend to frontend)  

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000); // Server Start

// API - Application Programming Interface
// A set of rules or protocols that allows different software programs to communicate and exchange data and functionality with each other. 
// In simple words commmunicate two different programs


// Types of APIs by Architectural- REST, SOAP, RPC, GraphQL, webSocket 