import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ({ note }) => {
  // useEffect(() => {
  //   console.log('Effect setup')

  //   return () => {
  //     console.log('Cleaning up effect') //componentDidUnmount
  //   }
  // }, [])

  const { dispatch } = useContext(NotesContext)

  return (
    <div>
      <h3>{note.Title}</h3>
      <p>{note.Body}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', Title: note.Title })}>x</button>
    </div>
  )
}

export { Note as default }