

const lodash = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions ={
        describe: 'Title of the note',
        demand: true,
        alias: 't'
    
    }
    const bodyOptions ={
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    
const argv = yargs.command('add', 'Add a new note', {
   title:titleOptions,
   body:bodyOptions
   })
.command('list', 'list all notes')
.command('read', 'Read a note', {
    title: {
        describe: 'Title of the note',
        demand: true,
        alias: 't'
    },
})
.help()
.argv;


 var command = argv._[0];
// console.log('command ', command);
// console.log('Process:', process.argv);
// console.log('Yargs', argv);

if(command === 'add'){
  var note= notes.addnote(argv.title, argv.body);

    if(note){
        console.log(`Note Created`);
       notes.logNote(note);
    }
    else
    {
        console.log('Note already taken');
    }
}
else if (command === 'list'){
   var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if(command === 'read'){
  var note = notes.read(argv.title);
  if(note){
    console.log('Note found');
   notes.logNote(note);
  }
  else {
      console.log('Note not found');
  }
}

else if(command === 'delete'){
    var notedelete =notes.deleteid(argv.title);
    var message = notedelete ? 'Note was deleted' : 'Note not found'
    console.log(message);
}
else{
    console.log('command not recognized');
}
// var res = notes.addNote();
// console.log('Result:', notes.add(9, -2));
//console.log(`Your age is ${notes.age}`);

// var filteredArrays = lodash.uniq(notes.Arrays);

// console.log(filteredArrays);