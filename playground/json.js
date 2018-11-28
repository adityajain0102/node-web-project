const fs = require('fs');

var originalString = {
title: 'Aditya',
body:'Developer@bcgt'
};

var newString = JSON.stringify(originalString);
console.log(typeof newString);
console.log(newString);
//updatedstring
fs.writeFileSync('notes.json', newString);

var readString = fs.readFileSync('notes.json');
var note = JSON.parse(readString);
console.log(typeof note);
console.log(note.body);