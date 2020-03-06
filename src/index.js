import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      console.log(state, action)
      return action.notes
    case 'ADD_NOTE':
      console.log(state, action)
      return [
        ...state,
        {
          Title: action.Title,
          Body: action.Body
        }
      ]
    case 'REMOVE_NOTE':
      console.log(state, action)
      // return action.notes.filter(note => note.Title !== title)
      return state.filter(note => note.Title !== action.Title)
    default:
      return state
  }
}

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log('Effect setup')

    return () => {
      console.log('Cleaning up effect') //componentDidUnmount
    }
  }, [])

  return (
    <div>
      <h3>{note.Title}</h3>
      <p>{note.Body}</p>
      <button onClick={() => removeNote(note.Title)}>x</button>
    </div>
  )
}

const NoteApp = () => {
  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

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

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([
    //   ...notes, { Title: title, Body: body }
    // ])
    dispatch({ type: 'ADD_NOTE', Title: title, Body: body })
    setTitle("")
    setBody("")
  }

  const removeNote = title => {
    // setNotes(notes.filter(note => note.Title !== title))
    dispatch({ type: 'REMOVE_NOTE', Title: title })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.Title} note={note} removeNote={removeNote} />
        ))}
      </div>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <br />
        <textarea name="body" id="body" cols="30" rows="10" value={body} onChange={e => setBody(e.target.value)} />
        <br /><br />
        <button>Add</button>
      </form>
    </div>
  )
}

// const App = (props) => {
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.log('This should only run once')
//   }, [])

//   // componentDidMount: empty array [] & componentDidUpdate [count]
//   useEffect(() => {
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(props.count)}>reset</button>
//       <input type="text" value={text} onChange={e => setText(e.target.value)} />
//     </div>
//   )
// }

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
