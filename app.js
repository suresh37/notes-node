//console.log('starting app.js!')
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes')
const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('update', 'update a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .command('list', 'get all notes')
    .help()
    .argv
var command = argv._[0]
console.log(argv)

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('note was created')
        notes.logNote(note)
    }
    else {
        console.log('note title taken')
    }
}
else if (command == 'list') {
    var allNotes = notes.getAll()
    if (allNotes) {
        console.log(`listing all ${allNotes.length} note(s).`)
        allNotes.forEach((note) => {
            notes.logNote(note)
        });
    }
    else
        console.log('No data found in notes')
}
else if (command == 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log('note was found ')
        notes.logNote(note)
    }
    else
        console.log('note was not found')
}
else if (command == 'remove') {
    var isNoteRemoved = notes.removeNote(argv.title)
    var message = isNoteRemoved ? 'note was removed' : 'note was not found'
    console.log(message)
}
else if (command == 'update') {
    notes.updateNote(argv.title, argv.body)
}
else {
    console.log('Command not recognised')
}

/* console.log('Command: ' + command)
console.log(process.argv)
*/
/* switch (command) {
    case 'add':
        console.log('Adding new note')
        break;
    case 'list':
        console.log('Listing new note')
        break;
    default:
        console.log('Command not recognised')
} */