console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


//argument valable on notes argv(argument vactor(make us to start our application)
/*console.log(process.argv);*/
//const argv = yargs.argv;
// i add this par now 

const titleOptions = {
						 describe: 'Title of note',
						 demand:true,
						 alias:'t'
                     };
					
const bodyOptions = {
						 describe: 'body of note',
						 demand:true,
						 alias:'b'
                     };
    const argv = yargs
	
     .command('add', 'Add a new note',
			 {
				title : titleOptions,
				body : bodyOptions
			 })
			 
	 .command('list', 'List all notes')
	 
	 .command('read', 'Read a note',{
		title: titleOptions
	                                })
									
     .command('remove', 'remove a note',{
	    title: titleOptions
	                                    }) 
	 .help()
	 .argv;
	 var command =process.argv[2];
	 
	 

console.log('Command: ', command);
console.log('Process',process.argv);
console.log('Yargs',argv);


if (command === 'add') {
						  var note = notes.addNote(argv.title, argv.body);
						  if (note) 
						  {  
							console.log('Note created');
							console.log('--');
							console.log(`Title: ${note.title}`);
							console.log(`Body: ${note.body}`);
						  }
                      }
						
else if (command === 'list')
						  {
							  var allNotes = notes.getAll();
                              console.log(`Printing ${allNotes.length} note(s).`);
                              allNotes.forEach((note) => {notes.logNote(note)});
							  
						  }						
                      
	
	//reading notes
else if (command === 'read'){
								var note = notes.getNote(argv.title);
								if (note)
							   {
								console.log('Note found');
								console.log('--');
								console.log(`Title: ${note.title}`);
								console.log(`Body: ${note.body}`);
							   } else {
								   console.log('Note not found');
							   } 
							}
	
                           
	 
else if (command === 'remove'){
								  var noteRemoved = notes.removeNote(argv.title);
								  var message = noteRemoved ? 'Note was removed' : 'Note not found';
								  console.log(message);
							  }
						else 
								{
									console.log('Command not recognized');
								}

								
                              
					
	








