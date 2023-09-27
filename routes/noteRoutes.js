const express = require('express')
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

const router = express.Router()
// api/notes GET route
router.get('/api/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, '../db/db.json'))

})
// api/notes POST route
router.post('/api/notes', (req,res)=>{
    let db = fs.readFileSync('db/db.json')
    db = JSON.parse(db)
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        // uses uuid to create a unique id for each note
        id: uuidv4()
    }
    // pushes the the new note the db.json file
    db.push(userNote)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    
    res.json(userNote)
})
// api/notes/:id DELETE route
// Delete recieves a query paramater of the id of a note
router.delete('/api/notes/:id', (req,res)=>{
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    // creates a variable of all the notes that dont 
    // have the id in the query param
    let undeletedNotes = db.filter(item => item.id !== req.params.id)
    // rewrites the file with all the notes that aren't the note with
    // the id in the query param
    fs.writeFileSync('db/db.json', JSON.stringify(undeletedNotes))

    res.json(undeletedNotes)
})

module.exports = router
