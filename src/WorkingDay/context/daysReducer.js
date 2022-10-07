// Es similar al store de redux

export const daysReducer = (state = {}, action) => {

  // console.log('reducer', state);
  // console.log('reducer action', action);


  switch (action.type) {

    case '[Add]':
      return [
        ...state,
        action.payload,
      ]

    // TODO:
    case 'remove':
      // Martes
      return [
        ...state, action.payload
      ]

    // TODO:
    case 'edit':
      // Martes
      return [
        ...state, action.payload
      ]


    default:
      return state
  }
}
