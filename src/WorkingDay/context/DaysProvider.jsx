import { useEffect, useReducer } from "react";
import { calculateDiferenceHour, calculateHoursLeft, calculateMakedHours } from "../../hooks/calculateTime";
import { activeDayReducer } from "./activeDayReducer";
import { DaysContext } from "./DaysContext";
import { daysReducer } from "./daysReducer";
import { totalWeekTimeReducer } from "./totalWeekTimeReducer";

const daysWeek = [
  // {
  //   dia: 'Martes',
  //   horaInicio: 7,
  //   horaFin: 1,
  //   horasDia: 'x'
  // }, {
  //   dia: 'Miércoles',
  //   horaInicio: 7,
  //   horaFin: 9,
  //   horasDia: 'x'
  // }
];

// TODO CALCULAR FECHAS
let tiempoSemana = {
  timeToDo: '35:00',
  timeMaked: '00:00',
  timeLeft: '35:00',
}

let activeDay = {
  dia: '',
  horaInicio: '',
  horaFin: '',
  horasDia: ''
}

export const DaysProvider = ({ children }) => {

  const [daysState, dispatchWeekDays] = useReducer(daysReducer, daysWeek);
  const [totalTimeState, dispatchTotalTime] = useReducer(totalWeekTimeReducer, tiempoSemana);
  const [activeDayState, dispatchActive] = useReducer(activeDayReducer, activeDay);


  const addDay = (newDay) => {

    let type, action;

    // Llamamos a la función que nos calcula las horas para insertalas
    // newDay = { dia: 'Lunes', horaInicio: '7', horaFin: '12' }
    let horasRealizadasDia = calculateDiferenceHour(newDay.horaInicio, newDay.horaFin);
    console.log(horasRealizadasDia);
    newDay['horasDia'] = horasRealizadasDia;

    // *****************
    // *** Agregamos el nuevo día
    type = '[Add]';
    action = { type: '[Add]', payload: newDay };
    dispatchWeekDays(action);

    // Agregamos el día activo (último añadido)
    action = { type: '[AddActive]', payload: newDay };
    dispatchActive(action)


    // agregamos el tiempo total
    action = { type: '[Calcular]', payload: newDay };
    dispatchTotalTime(action);
  }


  const cleanActiveDay = () => {
    let action = { type: '[AddActive]', payload: activeDay };
    dispatchActive(action)
  }
  return (
    <DaysContext.Provider value={{
      // ...daysState,
      daysState,
      totalTimeState,
      activeDayState,
      addDay,
      cleanActiveDay,
    }}>
      {children}
    </DaysContext.Provider>
  )

};