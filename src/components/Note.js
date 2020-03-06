import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  // useEffect(() => {
  //   console.log('Effect setup')

  //   return () => {
  //     console.log('Cleaning up effect') //componentWillUnmount
  //   }
  // }, [])

  const { dispatch } = useContext(NotesContext) // to consume (dispatch)
  const position = useMousePosition()

  return (
    <div>
      <h3>{note.Title}</h3>
      <p>{note.Body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', Title: note.Title })}>x</button>
    </div>
  )
}

export { Note as default }