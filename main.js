import App from "./app.js";

// import NotesView from "./NotesView.js"
// import NotesAPI from "./NotesAPI.js"


//this now initiallizes app.js and ties it all together
const root = document.getElementById("app");
const app = new App(root);


// const view = new NotesView(app, {
//     onNoteSelect(id) {
//         console.log("Add A Note Selected:");
//     },

// onNoteDelete(id) {
//     console.log("Note Deleted:" + id);
// },

//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle);
//         console.log(newBody)
//     },

// });

// const notes = NotesAPI.getAllNotes();

// view.updateNotesList(notes);
// view.updateActiveNote(notes[0]);