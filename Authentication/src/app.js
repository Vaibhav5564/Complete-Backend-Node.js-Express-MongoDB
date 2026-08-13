const express = require('express')
const authRoutes = require('./routes/auth.routes')


const app = express();
app.use(express.json());

/* 
/app/auth/ is compulsory prefix
because we created api through routes
*/

app.use("/api/auth", authRoutes)

module.exports = app;

