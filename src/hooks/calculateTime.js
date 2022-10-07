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
  console.log(timeA, timeB);

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
  console.log(timeA, timeB);

  let horasMinutosA = timeA.split(':');
  let horasMinutosB = timeB.split(':');

  let aHour = parseInt(horasMinutosA[0]);
  let aMinutes = parseInt(horasMinutosA[1]);

  let bHour = parseInt(horasMinutosB[0]);
  let bMinutes = parseInt(horasMinutosB[1]);


  let totalHours = (aHour - bHour);
  let totalMinutes = (aMinutes - bMinutes);

  if (totalMinutes <= 0) {
    totalHours -= 1;
    totalMinutes += 60;
  }

  totalHours = `${totalHours}`.padStart(2, "00");
  totalMinutes = `${totalMinutes}`.padStart(2, "00");

  let result = `${totalHours}:${totalMinutes}`;

  console.log("horas restantes", result);

  return result;
}




