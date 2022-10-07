import { TurnedInNot, Work } from '@mui/icons-material'
import { Avatar, Grid, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const DaysItems = ({ day }) => {
  return (
    <ListItem
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <Grid container color='#255E9C' >
          <ListItemText primary={day.dia} secondary={`${day.horaInicio} - ${day.horaFin}`} />
        </Grid>
        <Grid item color='#255E9C'>
          <ListItemText primary={`(${day.horasDia})`} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
