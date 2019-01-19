//console.log('starting notes.js!')
const fs = require('fs')

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (error) {
        console.log(error)
        return [];
    }
}
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))

}
var logNote = (note) => {
    debugger;
    console.log('------------')
    console.log(`note title - ${note.title} \nnote body - ${note.body}`)
    console.log('------------')
}

var addNote = (title, body) => {
    console.log('Adding Note ' + title + ' ' + body)
    var notes = fetchNotes()
    var note = {
        title,
        body
    }

    var dupNotes = notes.filter((note) => note.title === title)
    if (dupNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
    else {
        console.log('duplicate note detected')
    }
}
var getAll = () => {
    console.log('Getting all notes ')
    var notes = fetchNotes()
    return notes
}
var getNote = (title) => {
    console.log('Getting Note with title ' + title)
    var notes = fetchNotes()
    var filteredNotes = notes.filter((note) => note.title === title)
    return filteredNotes[0];
}
var updateNote = (title, body) => {
    console.log('Updating Note with title ' + title)
    var notes = fetchNotes()
    var flag = 0
    var updatedNotes = notes.filter((note) => {
        if (note.title === title) {
            note.body = body
            flag = 1
        }
    })
    if (flag === 1)
        saveNotes(notes)
    else
        console.log('No note data found  with given title')


}
var removeNote = (title) => {
    console.log('Removing Note with title ' + title)
    var notes = fetchNotes()
    var filteredNotes = notes.filter((note) => note.title !== title)
    saveNotes(filteredNotes)
    return notes.length !== filteredNotes.length
    /*  var index = 0;
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
      saveNotes(notes) */
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    updateNote,
    logNote
}
