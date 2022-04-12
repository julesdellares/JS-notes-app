export default class NotesView {
    //where the data goes when its rendered
    constructor(root, { onNoteSelect, onNoteAdd, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteDelete = onNoteDelete;
        //here's where we use JS to render out the view
        this.root.innerHTML = `
            <div class="notes__sidebar">
                <button class="notes__add" type="button"> Add New Note</button>
                <div class="notes__list"></div>
            </div>
                <div class="notes__preview">
                    <input class="notes__title" type="text" placeholder="Subject"> 
                    <textarea class="notes__body"> Take notes... </textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector(".notes_add");
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
        })
    }
}