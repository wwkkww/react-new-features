import React, { useState } from 'react';

const AddNoteForm = ({ dispatch }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

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
    <div>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <br />
        <textarea name="body" id="body" cols="30" rows="10" value={body} onChange={e => setBody(e.target.value)} />
        <br /><br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddNoteForm;