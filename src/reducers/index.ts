function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return { ...state, initialText: 'Changed in the browser' };
    default:
      return { ...state };
  }
}

export default reducer;
