const note = document.getElementById('note');
const addNote = document.getElementById('addNote');
const noteList = document.getElementById('noteList');

let notes = [];

// eventListener to push notes to be displayed once addNote is clicked
addNote.addEventListener('click', () => {
    if (note.value !== '') {
        notes.push(note.value);
        displayNotes();
        note.value = '';
    }
});


// creates notes with deleteButton when note is added
function displayNotes() {
    noteList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note');

        const noteText = document.createElement('p');
        noteText.innerText = note;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteNote(index);
        });
        noteItem.appendChild(noteText);
        noteItem.appendChild(deleteButton);
        noteList.appendChild(noteItem);
    });
}