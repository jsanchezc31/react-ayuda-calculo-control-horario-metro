// Calcula als horas realizadas en el día
export const calculateDiferenceHour = (timeA, timeB) => {

  let horasMinutosA = timeA.split(':');
  let horasMinutosB = timeB.split(':');

  let a = new Date();
  let b = new Date();

  b.setHours(horasMinutosA[0], horasMinutosA[1]);
  a.setHours(horasMinutosB[0], horasMinutosB[1]);

  // Se le suma 15 porque SI
  a.setHours(a.getHours() - b.getHours(), a.getMinutes() - b.getMinutes() + 15);

  let result = `${(a.getHours()).toString().padStart(2, "00")}:${(a.getMinutes()).toString().padStart(2, "00")}`

  return result;
}

// Suma las horas realizadas durante la semana
export const calculateMakedHours = (timeA, timeB) => {
  // console.log(timeA, timeB);

  let horasMinutosA = timeA.split(':');
  let horasMinutosB = timeB.split(':');

  let aHour = parseInt(horasMinutosA[0]);
  let aMinutes = parseInt(horasMinutosA[1]);

  let bHour = parseInt(horasMinutosB[0]);
  let bMinutes = parseInt(horasMinutosB[1]);


  let totalHours = (aHour + bHour);
  let totalMinutes = (aMinutes + bMinutes);

  if (totalMinutes >= 60) {
    totalHours += 1;
    totalMinutes -= 60;
  }

  totalHours = `${totalHours}`.padStart(2, "00");
  totalMinutes = `${totalMinutes}`.padStart(2, "00");

  let result = `${totalHours}:${totalMinutes}`;

  return result;
}

// Calcula las horas restantes
export const calculateHoursLeft = (timeA, timeB) => {
  console.log("calculateHoursLeft", timeA, timeB);

  let horasMinutosA = timeA.split(':');
  let horasMinutosB = timeB.split(':');

  let aHour = parseInt(horasMinutosA[0]);
  let aMinutes = parseInt(horasMinutosA[1]);

  let bHour = parseInt(horasMinutosB[0]);
  let bMinutes = parseInt(horasMinutosB[1]);


  let totalHours = (aHour - bHour);
  let totalMinutes = (aMinutes - bMinutes);

  console.log("totalHours", totalHours);
  console.log("totalMinutes", totalMinutes);


  // TODO: REVISAR LOGICA AL RESTAR CUANDO ES NEGATIVO
  // Se le quita una hora si la resta de minutos tira un número negativo siempre y cuando las horas no sean negativas
  if (totalMinutes <= 0) {
    if (totalHours > 0) {
      console.log("añadiendo negativo");
      totalHours -= 1;
      totalMinutes += 60;
    }
  }


  totalHours = `${totalHours}`.padStart(2, "00");
  totalMinutes = `${totalMinutes}`.padStart(2, "00");

  let result = `${totalHours}:${totalMinutes}`;

  console.log("horas restantes", result);

  return result;
}


// Calcula horas balance del día para el saldo
export const calculateBalanceDay = (time) => {
  time = '06:15';

  // timeBalance siempre va a ser 7:30, ya que es desde donde calcular el balance
  const timeBalance = '07:30';

  let timeA = timeBalance,
    timeB = time,
    signo = "+";

  if (time < timeBalance) {
    timeA = time;
    timeB = timeBalance;
    signo = "-";
  }

  let horasMinutosA = timeA.split(':');
  let horasMinutosB = timeB.split(':');

  let a = new Date();
  let b = new Date();

  b.setHours(horasMinutosA[0], horasMinutosA[1]);
  a.setHours(horasMinutosB[0], horasMinutosB[1]);

  // Se le suma 15 porque SI
  a.setHours(a.getHours() - b.getHours(), a.getMinutes() - b.getMinutes());

  let result = `${(a.getHours()).toString().padStart(2, "00")}:${(a.getMinutes()).toString().padStart(2, "00")}`

  // console.log("result balance time:", signo, result);
  return { signo, result };
}

export const calculateTotalBalance = (totalBalance, balanceDayObjecto) => {
  console.log("total balance", totalBalance);
  console.log("day balance", balanceDayObjecto);

  let balance;

  // Si el balance total es mayor a 0 horas
  // if (totalBalance > '00:00') {
  if (balanceDayObjecto.signo === '+') {
    balance = calculateMakedHours(totalBalance, balanceDayObjecto.result);
  }
  if (balanceDayObjecto.signo === '-') {
    balance = calculateHoursLeft(totalBalance, balanceDayObjecto.result);
  }

  // }

  console.log("balance", balance);
  return balance;

}






