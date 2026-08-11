const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
});


// Below post inside model is name of collection we can give any name
// Collection is set of data of related schema
// Database is Set of collection

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;