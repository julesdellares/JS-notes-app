//ties everything together

import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());

        //update list of notes when application is booted
        this._refreshNotes();
      
    }

    _refreshNotes() {
        const notes = NotesAPI.getAllNotes();

        this._setNotes(notes); 

        if (notes.length > 0) {
            this._setActiveNote(notes[0]);
        }

        _setActiveNote(note) {
            this.activeNote = note;
            this.view.updateActiveNote(note);

        }
    }

    _setNotes(notes){
        this.notes = notes; 
        this.view.updateNotesList(notes);
        this.view.updateNotePreviewVisibility(notes.length > 0);
    }

    _handlers() {
        return {
            onNoteSelect: noteId => {
                // console.log("Note Selected: " + noteId);
                const selectedNote = this.notes.find(note => note.id == noteId);
                this._setActiveNote(selectedNote);
            },
            onNoteAdd: () => {
                const newNote = {
                    title: "New Note",
                    body: "take note",
                };

                NotesAPI.saveNotes(newNote);
                this._refreshNotes();

            },
            onNoteEdit: (title, body) => {
                NotesAPI.saveNotes({
                    id: this.activeNote.id,
                    title: title,
                    body: body
                });

                this._refreshNotes();
            },
            onNoteDelete: noteId => {
                NotesAPI.deleteNote(noteId);
                this._refreshNotes();
            },

        };
    }
}