import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const position = useMousePosition()

  const { dispatch } = useContext(NotesContext); // to consume (dispatch)

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([
    //   ...notes, { Title: title, Body: body }
    // ])
    dispatch({ type: 'ADD_NOTE', Title: title, Body: body })
    setTitle("")
    setBody("")
  }

  return (
    <>
      <p>Add Note - {position.x}: {position.y} </p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <br />
        <textarea name="body" id="body" cols="20" rows="3" value={body} onChange={e => setBody(e.target.value)} />
        <br /><br />
        <button>Add</button>
      </form>
    </>
  );
};

export default AddNoteForm;