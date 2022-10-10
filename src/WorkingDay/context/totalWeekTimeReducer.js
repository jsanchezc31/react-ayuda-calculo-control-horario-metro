import { calculateBalanceDay, calculateDiferenceHour, calculateHoursLeft, calculateMakedHours, calculateTotalBalance } from "../../hooks/calculateTime";

export const totalWeekTimeReducer = (state = {}, action) => {

  // console.log('reducer state total time', state);
  // console.log('reducer action total time', action);

  switch (action.type) {

    case '[Calcular]':
      // retornamos una copia del objeto

      let horasRealizadas = calculateMakedHours(state.timeMaked, action.payload.horasDia)

      let horasRestantes = calculateHoursLeft(state.timeLeft, action.payload.horasDia);
      // Se utiliza para que nunca se pinten horas negativas en el sidebar
      if (horasRestantes <= '00:00') {
        horasRestantes = '00:00';
      }
      // 

      let balanceDia = calculateBalanceDay();

      let balanceTotal = calculateTotalBalance(state.balance, balanceDia);

      return {
        ...state,
        timeMaked: horasRealizadas,
        timeLeft: horasRestantes,
        balance: balanceTotal,
      }

    default:
      return state
  }
}