import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, [])
  // const [title, setTitle] = useState("")
  // const [body, setBody] = useState("")

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'))
    if (notesData) {
      dispatch({ type: 'POPULATE_NOTES', notes: notesData })
      // setNotes(notesData)
    }
  }, []) // componentDidMount

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]) // componentDidUpdate (based on which state change)

  // const addNote = (e) => {
  //   e.preventDefault();
  //   // setNotes([
  //   //   ...notes, { Title: title, Body: body }
  //   // ])
  //   dispatch({ type: 'ADD_NOTE', Title: title, Body: body })
  //   setTitle("")
  //   setBody("")
  // }

  const removeNote = title => {
    // setNotes(notes.filter(note => note.Title !== title))
    dispatch({ type: 'REMOVE_NOTE', Title: title })
  }

  return (
    <NotesContext.Provider>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm dispatch={dispatch} />
    </NotesContext.Provider>
  )
}

export { NoteApp as default }