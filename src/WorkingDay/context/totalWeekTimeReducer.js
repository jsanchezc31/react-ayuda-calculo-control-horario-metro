import { calculateDiferenceHour, calculateHoursLeft, calculateMakedHours } from "../../hooks/calculateTime";

export const totalWeekTimeReducer = (state = {}, action) => {

  console.log('reducer state total time', state);
  console.log('reducer action total time', action);

  switch (action.type) {

    case '[Calcular]':
      // retornamos una copia del objeto

      let horasRealizadas = calculateMakedHours(state.timeMaked, action.payload.horasDia)
      let horasRestantes = calculateHoursLeft(state.timeLeft, action.payload.horasDia);

      return {
        ...state,
        timeMaked: horasRealizadas,
        timeLeft: horasRestantes,
      }

    default:
      return state
  }
}