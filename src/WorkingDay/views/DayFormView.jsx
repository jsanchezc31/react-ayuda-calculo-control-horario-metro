import { useContext, useEffect, useState } from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { TimelapseOutlined } from '@mui/icons-material'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import useForm from '../../hooks/useForm';
import { Time } from '../components/Time';
import { DaysContext } from '../context/DaysContext';
import { calculateDiferenceHour } from '../../hooks/calculateTime';

const formData = {
  dia: '',
  horaInicio: '',
  horaFin: '',
  horasDia: '',
}

// Todo: revisar las validaciones
const formValidations = {
  dia: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  horaInicio: [(value) => value.length === 4, 'El password debe de tener más de 6 letras'],
  horaFin: [(value) => value.length === 4, 'El nombre es obligatorio'],
}

export const DayFormView = () => {

  // Contexto
  const { daysState: daysInfo, addDay, activeDayState, cleanActiveDay } = useContext(DaysContext);

  // console.log(activeDayState)
  // Formulario
  const { dia, horaInicio, horaFin, formState, onInputChange, onResetForm } = useForm(formData, formValidations);

  // Stado de las horas calculadas
  let horasDia;
  const [stateHorasDia, setStateHorasDia] = useState()


  // Cuando el select del día cambia limpiamos el día
  useEffect(() => {
    cleanActiveDay();
  }, [dia])


  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log("Enviando Form");
    // console.log("state", daysInfo);

    // En el formstate ya viene el formulario con los cambios
    // validamos que no vengan vacias las horas de inicio y fin
    if (dia.length === 0) {
      Swal.fire('ERROR', 'Selecciona el día de la semana', 'error');
      return;
    };

    // Validamos que no se repita la key
    let keyRepetida = false
    // Añadimos key
    let key; //variable usada para ordenar y validaciones

    if (dia === 'Lunes') key = 0;
    if (dia === 'Martes') key = 1;
    if (dia === 'Miercoles') key = 2;
    if (dia === 'Jueves') key = 3;
    if (dia === 'Viernes') key = 4;

    daysInfo.map(day => {
      if (day.key === key) keyRepetida = true;
    });

    if (keyRepetida) {
      Swal.fire('ERROR', 'Día introducido previamente, selecciona otro día', 'error');
      return;
    };

    // Validamos las horas de inicio y fin
    if (horaInicio.length <= 0) {
      Swal.fire('ERROR', 'Introduce hora inicio de jornada', 'error');
      return;
    };
    if (horaFin.length <= 0) {
      Swal.fire('ERROR', 'Introduce hora fin de jornada', 'error');
      return;
    };

    if (horaInicio >= horaFin) {
      Swal.fire('ERROR', 'La hora de inicio no puede se mayor o igual a la hora de fin de jornada', 'error');
      return;
    }


    let newDay = {
      key,
      dia: dia,
      horaInicio: horaInicio,
      horaFin: horaFin,
      horasDia: stateHorasDia
    }

    addDay(newDay);
    onResetForm();
    Swal.fire('Día introducido correctamente', '', 'success');
  }



  useEffect(() => {
    setStateHorasDia("")
    if (horaInicio.length <= 0) return;
    if (horaFin.length <= 0) return;
    horasDia = calculateDiferenceHour(horaInicio, horaFin);
    setStateHorasDia(horasDia);
  }, [horaInicio, horaFin])




  return (

    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

      <Grid container justifyContent='center' mb={5}>
        <Grid>
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Día de la semana</InputLabel>
            <Select
              label="daysWeek"
              sx={{ width: 250, fontSize: 40 }}
              name='dia'
              value={dia}
              onChange={onInputChange}
              variant='filled'

            >
              <MenuItem value={'Lunes'}>Lunes</MenuItem>
              <MenuItem value={'Martes'}>Martes</MenuItem>
              <MenuItem value={'Miercoles'}>Miércoles</MenuItem>
              <MenuItem value={'Jueves'}>Jueves</MenuItem>
              <MenuItem value={'Viernes'}>Viernes</MenuItem>

            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid container
          display='flex'
          sx={{ p: 7, border: '3px solid #255E9C', borderRadius: '10px', width: 700, display: 'flex', justifyContent: 'center' }}>

          <Grid container justifyContent='center'>
            <Grid item >
              <TextField
                type='time'
                variant="filled"
                sx={{ border: 'none', mb: 1, mr: 5, }}
                label='Hora inicio'
                InputLabelProps={{
                  shrink: true,
                }}
                name='horaInicio'
                value={horaInicio}
                onChange={onInputChange}
                inputProps={{ step: 300 }}
              />

              <TextField
                type='time'
                variant="filled"
                sx={{ border: 'none', mb: 1, mr: 5, }}
                label='Hora Fin'
                InputLabelProps={{
                  shrink: true,
                }}
                name='horaFin'
                value={horaFin}
                onChange={onInputChange}
              />

              {/* Botón para guardar */}
              <Button
                variant="contained"
                size="large"
                sx={{ mt: 1 }}
                onClick={onFormSubmit}

              >
                <TimelapseOutlined />
                &nbsp; &nbsp; AÑADIR DÍA
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent='center' sx={{ alignItems: 'center', mt: 4 }}  >
            <Typography fontSize={25} fontWeight='light' color='#255E9C'>
              Horas realizadas en el día: <span>{stateHorasDia}</span>  *
            </Typography>
          </Grid>

          <Grid container justifyContent='center' sx={{ alignItems: 'center', mt: 3 }}  >
            <Typography fontSize={15} fontWeight='light' color='#255E9C'>
              * Se suman 15 minutos al tiempo total del rango de horas, por ejemplo: si haces de 8:00 a 14:00 estarías sumando 6:15 en vez de solo 6 horas
            </Typography>
          </Grid>

        </Grid>
      </Grid>
      <Grid container justifyContent='center' mt={5}>
        {/* */}
        <Time />
      </Grid>
    </Grid >
  )
}
