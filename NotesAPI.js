//interacts with local storage for notes

export default class NotesAPI {

    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
//sorts notes by timestamp
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });

    }

    static saveNotes(noteToSave) {
        const notes = NotesAPI.getAllNotes();
        const existing = notes.find(note => note.id => noteToSave.id);

        //edit update note

        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toDateString();


        } else {
            noteToSave.id = Math.floor(Math.random() * 100000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }



        localStorage.setItem("notesapp-notes", JSON.stringify(notes));

    }

    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));

    }
}