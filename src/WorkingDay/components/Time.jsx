import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'


export const Time = () => {

  const [time, setTime] = useState()
  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setTime(time)
  }, 1000);

  return (
    <Typography fontSize={70} color='#255E9C'>
      {time}
    </Typography>
  )
}
