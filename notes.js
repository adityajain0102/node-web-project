
console.log('starting notes.js');


const fs=require('fs');

var fetchNotes =() =>{
    try{
        var notestring=fs.readFileSync('notes-data.json');
        return JSON.parse(notestring);
        
    }
    catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addnote = (title, body) => {
console.log('Adding note',title, body);
//we are creating an array to store title & body
var notes = fetchNotes();
var note = {
    title,
     body
}

//now we got notes array and it hold by note var
//now lets create a file and push note into that
//we should stringify that notes array object

//before inserting values into json first read the values from it


//if notes-data.json file is not there we encounter with error to fix this by using try catch error mechanism


//upto now our code allows duplicate notes to avoid that we need to check if that note already exists we should not push into that array
//to check the array we use filter() the notes array
var duplicatenotes = notes.filter((note)=> {
    return note.title === title;
});

if(duplicatenotes.length === 0){

    notes.push(note);
   saveNotes(notes);
  return note;

}
};
// else {
//     console.log(`Note "${note.title}" is already in the list`);
// }

//here while user adds new title previpous data is overriding so, to solve that issue


var getAll = () =>{
    return fetchNotes();
};
var Arrays = ['Aditya', 1,2,1];
var addNote = () => {
    console.log('add note');
    return 'New note';
}

var read = (title) =>{
  var notes = fetchNotes();
  var filteredNotes=notes.filter((note)=> note.title === title)
  return filteredNotes[0];
};

var deleteid = (title) => {
    // console.log('Deleting node:', title);
    var notes = fetchNotes();
    var filteredNotes= notes.filter((note)=> note.title !== title)
    {
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
    };
};

var logNote =(note)=> {
    console.log(`---`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
var add = (a, b) => {
     return a + b;
}


module.exports = {
    addnote,
    addNote,
    add,
    Arrays,
    getAll,
    read,
    deleteid,
    logNote
};