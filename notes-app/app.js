// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'My name is Daniel,')

// //
// //--- Challenge : Append a message to notes.txt
// // 
// // 1. User appendFileSync to append to append to the file
// // 2. Run the script
// // 3. Check your work by opening the file and viewing the appended text

// fs.appendFileSync('notes.txt', ' I am a software developer engineer')

//---------- Call other files

// const add = require('./utils.js')

// console.log(add(1, 3))

//--- Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that return "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in an call the function pronting message to console

// fs.writeFileSync('notes.js', 'const getNotes = function() {return "Your notes..."} module.exports = getNotes ')

// const validator = require('validator')

// const notesMessage = require('./notes.js')

// console.log(notesMessage())

// console.log(validator.isURL('nkndikagnb'))

//--- Challenge: User the chalk library in your project
//
// 1. Install version 2.5.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around woth other styles. Make text bold and inversed

// const chalk = require('chalk')

// console.log(chalk.green('Success!!'));

// console.log(chalk.green.bold.inverse('Success!'));

// console.log(process.argv[2])

// const chalk = require('chalk')
// const yargs = require('yargs')

// const getNotes = require('./notes.js')

// console.log(process.argv)
// console.log(yargs.argv)

// const command = process.argv[2]

// if (command === 'add') {
//    console.log('Adding Note!')
// } else if (command === 'remove') {
//    console.log('Removing note!')
// }

// -- Challenge: Add an option to yargs
// 
// 1. Setup a body option for the add command
// 2. Configure a description, make ir required, and for it to be a string
// 3. Log the body value in the handles function
// 4. Test your work


// -- Challenge: Setup command option and function
// 
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"


const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// const getNotes = require('./notes.js')

//Customize yarg version
yargs.version('1.1.0')

// Create add command
yargs.command({
   command: 'add',
   description: 'Add a new note',
   builder: {
      title: {
         describe: 'Note title',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'Body note',
         demandOption: true,
         type: 'string'
      }
   },
   handler (argv) {
      notes.addNote(argv.title, argv.body)
   }
})

// Create remove command
yargs.command({
   command: 'remove',
   description: 'Remove a note',
   builder: {
      title: {
         descibre: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.removeNote(argv.title)
   }
})

// Create list command
yargs.command({
   command: 'list',
   description: 'List notes',
   handler () {
      notes.listNotes()
   }
})

// Create read command
yargs.command({
   command: 'read',
   description: 'Read a note',
   builder: {
      title: {
         descibre: 'Note title',
         demandOption: true,
         type: 'string'
      }
   },
   handler (argv) {
      notes.readNote(argv.title)
   }
})

// add, remove, read, list
yargs.parse()

// console.log(yargs.argv)