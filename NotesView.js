export default class NotesView {
    //where the data goes when its rendered
    constructor(root, { onNoteSelect, onNoteAdd, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = this.onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        //here's where we use JS to render out the view
        this.root.innerHTML = `
                <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <div class="notes__list"></div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note...">
                <textarea class="notes__body">Take Note...</textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes__add");
        const inpTitle = this.root.querySelector(".notes__title");
        const inpBody = this.root.querySelector(".notes__body");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        this.updateNotePreviewVisibility(true);

        //heres the part where we hide note preview by default
    }
//underscore = private method. creathes the html string for sidebar items
    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="notes__list-item" data-note-id="${id}">
            <div class="notes__small-title">${title}</div>
            <div class="notes__small-body">
                ${body.substring(0, MAX_BODY_LENGTH)}
                ${body.length > MAX_BODY_LENGTH ? "..." : ""}
            </div>
            <div class="notes__small-updated">
                ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
            </div>
        </div>
        `;
    
    }


    //updating the sidebar

    updateNotesList(notes) {

        const notesListContainer = this.root.querySelector(".notes__list");

        //Empty list;


        notesListContainer.innerHTML = "";


        for (const note of notes) {
            //pass thru the values
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));
//inserts html right before end of relevant container
            notesListContainer.insertAdjacentHTML("beforeend", html);
        }

        // add select/delete events for each note

        notesListContainer.querySelectorAll(".notes__list-item").forEach(notesListItem => {
            notesListItem.addEventListener("click",() => {
                this.onNoteSelect(notesListItem.dataset.noteId);
            });

notesListContainer.updateNotesList("dblclick", () => {
    const doDelete = confirm("confirm deletion?");

    if (doDelete) {

        this.onNoteDelete(notesListItem.dataset.noteId);

        if (doDelete) {
            this.onNoteDelete(noteListItem.dataset.noteId);
        }
    }
})

        })    }

    updateActiveNote(note) {
        
        this.root.querySelector("notes__title").value = note.title;
        this.root.querySelector("notes__body").value = note.body;

        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.classList.remove("notes__list-item--selected");
        });

        this.root.querySelector(`.note__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
    }
}
