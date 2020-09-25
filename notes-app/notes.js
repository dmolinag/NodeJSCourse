const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
   const notes = loadNotes();
   // const duplicateNotes = notes.filter(note => note.title === title);
   const duplicateNote = notes.find(note => note.title === title)

   // debugger

   if (duplicateNote === undefined) {
      notes.push({
         title: title,
         body: body
      });
      saveNotes(notes);
      console.log(chalk.green.inverse('New note added!'))
   } else {
      console.log(chalk.red.inverse('Note title taken!'))
   }
}

const removeNote = (title) => {
   const notes = loadNotes();
   const notesToKeep = notes.filter(note => note.title !== title);

   if (notes.length === notesToKeep.length) {
      console.log(chalk.red.inverse('No note found!'));
   } else {
      saveNotes(notesToKeep);
      console.log(chalk.green.inverse('Note removed!'));
   }
}

const listNotes = () => {

   const notes = loadNotes();
   console.log(chalk.inverse('Your notes'));

   notes.forEach(note => console.log("-", note.title))
}

const readNote = (title) => {
   const notes = loadNotes();
   const note = notes.find(note => note.title === title)

   if (note) {
      console.log(chalk.inverse(note.title) + " " + note.body)
      // console.log(note.body)
   } else {
      console.log(chalk.red("Error"))
   }
}

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes);
   fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
   try {
      const dataBuffer = fs.readFileSync('notes.json');
      const dataJson = dataBuffer.toString();
      return JSON.parse(dataJson);
   } catch (e) {
      return [];
   }
}

module.exports = {
   readNote: readNote,
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes
}