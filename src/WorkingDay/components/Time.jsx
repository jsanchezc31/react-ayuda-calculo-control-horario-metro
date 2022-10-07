import { Typography } from '@mui/material';
import React, { useState } from 'react'


export const Time = () => {

  const [time, setTime] = useState()

  setInterval(() => {
    let date, time;

    date = new Date();

    time = date.toLocaleTimeString();

    time = `${time}`
    setTime(time)
  }, 1000);

  return (
    <Typography fontSize={70} color='#255E9C'>
      {time}
    </Typography>
  )
}
