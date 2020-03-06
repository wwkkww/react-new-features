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

export { notesReducer as default }