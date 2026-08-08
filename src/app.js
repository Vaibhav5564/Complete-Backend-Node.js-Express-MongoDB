const express = require("express")
const nodeModel = require("./models/note.model");
const noteModel = require("./models/note.model");
const app = express();
app.use(express.json()) // Middleware


/*
POST /notes => Creae a note
GET /notes => Get all note
Delete /notes/:id => Delete a note
PATCH /notes/:id => Update a note

*/

app.post('/notes', async (req, res)=>{
    const data = req.body // {title, discription}
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(202).json({
        message: "Note Created Succefully"
    })
})

app.get('/notes', async(req, res)=>{
    // const notes = await noteModel.find() // find() returns array of all obects prsent in database
    const notes = await noteModel.findOne({  // It returns object having title: title-1
        title: "test-1"
    })
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })
});

app.delete("/notes/:id", async(req, res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "Note Deleted Successfully"
    })
})

app.patch('/notes/:id', async(req, res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id: id}, { description: description})

    res.status(200).json({
        message: "Note updated successfully"
    })
})

// Possible outcomes of find => [{},{}....] or [] returns array
// Possible outcomes of findOnde => {} or null // If their are multiple matches then it returns first matched result

module.exports = app