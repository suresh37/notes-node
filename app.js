console.log('starting app.js!')
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes')

const argv = yargs.argv
var command = argv._[0]
console.log(argv)

if (command == 'add') {
    notes.addNote(argv.title,argv.body)
}
else if (command == 'list') {
    notes.getAll()
}
else if (command == 'read') {
    notes.getNote(argv.title,argv.body)
}
else if(command == 'remove'){
    notes.removeNote(argv.title,argv.body)
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