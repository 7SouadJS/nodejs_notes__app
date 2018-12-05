console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

 var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}; 


var addNote = (title, body) => 
{
	var notes = [];
	var note = { title,body };  
	
	try {
			var notesString = fs.readFileSync('notes-data.json');
			notes = JSON.parse(notesString);
		}  catch(e){}
						var duplicateNotes = notes.filter((note) => note.title ===title);
						   if ( duplicateNotes.length === 0 )
						   {
								notes.push(note);
								saveNotes(notes);
						        return note;
						        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
						   }
			      
};

var getAll = ()=>
		{
		return	fetchNotes();
		};

var getNote = (title) =>
		{
			var notes = fetchNotes();
			var filteredNotes = notes.filter((note) => note.title === title );
			return filteredNotes[0];
		};


var logNote = (note) => 
       { 
	         debugger;
			  console.log('--');
			  console.log(`Title: ${note.title}`);
			  console.log(`Body: ${note.body}`);
       };

var removeNote = (title)=> 
				{
					var notes = fetchNotes();
					var filteredNotes = notes.filter((note) => note.title !== title);
					saveNotes(filteredNotes);
					return notes.length !== filteredNotes.length;
				};
				


module.exports = {
	addNote,
	getAll,
	getNote,
	logNote,
	removeNote
    	};








