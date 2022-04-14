import NotesView from "./NotesView.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Add A New Note");
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody)
    },

});
