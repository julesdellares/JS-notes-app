import NotesAPI from "js\notesAPI.js"

NotesAPI.saveNote({
    title: "New Note",
    body: "I'm the new note"
})

console.log(NotesAPI.getAllNotes());