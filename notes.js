console.log('starting notes.js!')
const fs = require('fs')

var addNote = (title, body) => {
    console.log('Adding Note ' + title + ' ' + body)
    var notes = []
    var note = {
        title,
        body
    }
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (error) {
        console.log(error)
    }
    var dupNotes = notes.filter((note) => note.title === title)
    if (dupNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }
    else {
        console.log('duplicate note detected')
    }
}
var getAll = () => {
    console.log('Getting all notes ')
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (error) {
        console.log(error)
    }
    if (notes.length > 0)
        console.log(notes)
    else
        console.log('No data found in notes')

}
var getNote = (title) => {
    console.log('Getting Note with title ' + title)
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (error) {
        console.log(error)
    }
    var note = notes.filter((note) => note.title === title)
    if (note.length > 0)
        console.log(note)
    else
        console.log('No note data found  with given title')
}
var updateNote = (title, body) => {
    console.log('Updating Note with title ' + title)
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (error) {
        console.log(error)
    }
    var flag = 0
    var updatedNotes = notes.filter((note) => {
        if (note.title === title) {
            note.body = body
            flag = 1
        }
    })
    if (flag === 1)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    else
        console.log('No note data found  with given title')


}
var removeNote = (title) => {
    console.log('Removing Note with title ' + title)
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (error) {
        console.log(error)
    }
    var index = 0;
    var deleteIndex = -1;
    notes.filter((note) => {
        if (note.title === title) {
            deleteIndex = index
        }
        index++;
    })
    if (deleteIndex !== -1)
        notes.splice(deleteIndex, 1)
    else
        console.log('no note data found with given title')
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    updateNote
}
