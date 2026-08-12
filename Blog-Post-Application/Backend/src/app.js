const express = require("express");
const multer = require("multer");
// mulder is also middleware is used to read images 
// Our first middleware is used for reading json data
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model")
const cors = require("cors");

const app = express();
app.use(cors()); //middleware
app.use(express.json()); //middleware


const upload = multer({storage: multer.memoryStorage()}) // middleware

// Here is need to define in path with key which stores a image in database
app.post('/create-post', upload.single("image"), async(req, res)=>{
    console.log(req.body);
    console.log(req.file); // This give image info we need image buffer in that and that buffer need to add on imagekit so it give us url
    const result = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "Post Created Successfully",
        post
    })
})

app.get("/posts", async (req, res)=>{
    const posts = await postModel.find();

    return res.status(201).json({
        message: "Post Viewed",
        posts
    })
})

module.exports = app;