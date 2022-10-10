import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { DaysContext } from '../context/DaysContext'
import { DaysItems } from './DaysItems'

export const SideBar = ({ width }) => {

  const { daysState: daysInfo, totalTimeState } = useContext(DaysContext);

  // ordenamos el array de objetos para que salga siempre lunes [0] primero
  daysInfo.sort((a, b) => {
    return (a.key - b.key);
  });

  // console.log("total time", totalTimeState);

  return (
    <Box
      component='nav'
      sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}
    >
      <Drawer variant='permanent' open={true}
        // Hace que se superponga
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width }
        }}
      >
        <Toolbar />
        <Toolbar sx={{ mb: 4 }}>
          <Typography variant="h4" component='div' align='center' color='#255E9C'>
            Horas a cumplir <span>{totalTimeState.timeToDo}</span>
          </Typography>
        </Toolbar>
        <Divider sx={{ mb: 2 }} />

        <Toolbar sx={{ mb: 2 }}>
          <Typography variant="h5" component='div' align='center' color='#255E9C'>
            Horas realizadas: <br></br><span>{totalTimeState.timeMaked}</span>
          </Typography>
          <Typography variant="h5" component='div' align='center' color='#255E9C'>
            Horas restantes: <br></br><span>{totalTimeState.timeLeft}</span>
          </Typography>
        </Toolbar>
        {/* TODO */}
        {/* <Toolbar sx={{ mb: 2, justifyContent: 'center' }}>
          <Typography variant="h5" component='div' align='center' color='#255E9C'>
            Saldo: <span>{totalTimeState.balance}</span>
          </Typography>
        </Toolbar> */}

        <Divider />
        <Typography variant="h5" component='div' color='#255E9C' sx={{ mt: 3, ml: 4 }}>
          Días de la semana:
        </Typography>
        <List>
          {
            daysInfo.map(day => (
              <DaysItems key={day.key} day={day} />
            )
            )
          }
        </List>

      </Drawer >

    </Box >
  )
}
