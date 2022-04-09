// interacts with local storage to retrieve/save/delete notes

export default class NotesAPI {
    static getAllNotes() {
        // if there are no existing notes it will run and give us an empty array
       const notes = JSON.parse(localStorage.getItem("notesapp-notes" || "[]"))
        //this is a sort algorithim - look into these more!
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNotes(noteToSave) {
        const notes = NotesAPI.getAllNotes();

        noteToSave.id = Math.floor(Math.random() * 1000000);
        noteToSave.updated = new Date().toISOString();
        notes.push(noteToSave);

        localStorage.setItem("notesapp-notes", JSON.stringify(notes));


    }

    static deleteNote(id) {

    }

}