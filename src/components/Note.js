import React from 'react';

const Note = ({ note, removeNote }) => {
  // useEffect(() => {
  //   console.log('Effect setup')

  //   return () => {
  //     console.log('Cleaning up effect') //componentDidUnmount
  //   }
  // }, [])

  return (
    <div>
      <h3>{note.Title}</h3>
      <p>{note.Body}</p>
      <button onClick={() => removeNote(note.Title)}>x</button>
    </div>
  )
}

export { Note as default }