const note = document.getElementById('note');
const addNote = document.getElementById('addNote');
const noteList = document.getElementById('noteList');

let notes = [];

addNote.addEventListener('click', () => {
    if (note.value !== '') {
        notes.push(note.value);
        displayNotes();
        note.value = '';
    }
})