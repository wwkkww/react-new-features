import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = ({ removeNote }) => {
  const { notes } = useContext(NotesContext) // to consume (notes)
  return (
    notes.map((note) => (
      <Note key={note.Title} note={note} />
    ))
  );
};

export default NoteList;

// const NoteList = ({ notes, removeNote }) => {
//   return (
//     notes.map((note) => (
//       <Note key={note.Title} note={note} removeNote={removeNote} />
//     ))
//   );
// };

// export default NoteList;