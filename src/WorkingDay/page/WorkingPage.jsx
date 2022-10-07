import { Box, Toolbar } from '@mui/material'
import React, { useEffect } from 'react'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { DayFormView } from '../views/DayFormView'


const widthPage = 300
export const WorkingPage = () => {


  // useEffect(() => {

  // }, [])

  return (
    <Box sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar />

      <SideBar width={widthPage} />

      <Box
        compoment='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Toolbar />

        <DayFormView />
      </Box>
    </Box>

  )
}
