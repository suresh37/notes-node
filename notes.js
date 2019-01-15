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
        console.log(err)
    }
    var dupNotes = notes.filter((note) => note.title === title)
    if (dupNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }
    else{
        console.log('duplicate note detected')
    }
}
var getAll = () => {
    console.log('Getting all notes ')
}
var getNote = (title, body) => {
    console.log('Getting Note ' + title + ' ' + body)
}
var removeNote = (title, body) => {
    console.log('Removing Note ' + title + ' ' + body)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
