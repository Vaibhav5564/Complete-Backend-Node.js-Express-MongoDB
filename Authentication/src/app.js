const express = require('express')
const authRoutes = require('./routes/auth.routes')
const postRoutes = require('./routes/post.routes')
const cookieParser = require("cookie-parser")



const app = express();
app.use(express.json());
app.use(cookieParser()); // It also a middleware

/* 
/app/auth/ is compulsory prefix
because we created api through routes
*/

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

module.exports = app;

