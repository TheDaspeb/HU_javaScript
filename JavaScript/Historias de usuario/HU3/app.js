const noteInput = document.getElementById("noteInput");
const addBtn = document.querySelector("#addBtn");
const notesList = document.getElementById("notesList");

console.log(noteInput, addBtn, notesList);


let notes = [];

addBtn.addEventListener("click", () => {
  const text = noteInput.value;

  if (text === "") {
    alert("Please write a note");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(deleteBtn);
  notesList.appendChild(li);

  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  console.log("Note added");

  noteInput.value = "";
  noteInput.focus();

  deleteBtn.addEventListener("click", () => removeNote(li, text));
});


function removeNote(li, text) {
  notesList.removeChild(li);
  notes = notes.filter(note => note !== text);
  localStorage.setItem("notes", JSON.stringify(notes));
  console.log("Note removed");
}


window.addEventListener("DOMContentLoaded", () => {
  const storedNotes = localStorage.getItem("notes");

  if (storedNotes) {
    notes = JSON.parse(storedNotes);
    notes.forEach(note => renderNote(note));
    console.log(`${notes.length} notes loaded`);
  }
});

function renderNote(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(deleteBtn);
  notesList.appendChild(li);

  deleteBtn.addEventListener("click", () => removeNote(li, text));
}

