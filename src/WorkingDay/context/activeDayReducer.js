// Es similar al store de redux

export const activeDayReducer = (state = {}, action) => {

  // console.log('reducer', state);
  // console.log('reducer active day action', action);


  switch (action.type) {

    case '[AddActive]':
      return {
        ...state,
        ...action.payload
      }


    default:
      return state
  }
}
