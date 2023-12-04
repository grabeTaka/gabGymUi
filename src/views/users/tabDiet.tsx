// ** MUI Imports
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CardDiet from 'src/views/cards/CardDiet'
import { Divider, Typography } from '@mui/material'
import React from 'react'

const TabDiet = () => {
  const [meals, setMeals] = React.useState([
    
  ])

  return (
    <CardContent>
      <Grid container spacing={7}>
        <Grid item xs={11}>
          <Typography variant='h4' component='h4'>
            {' '}
            Diet register{' '}
          </Typography>
          <Typography mt={2} mb={3}>
            {' '}
            Register a new diet of user (user name here)
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button variant='contained' endIcon={<AddCircleIcon />}>
            New
          </Button>
        </Grid>
      </Grid>

      <Divider />

      <Grid container spacing={7}>
        <Grid item sm={12} md={6}>
          <CardDiet />
        </Grid>
        <Grid item sm={12} md={6}>
          <CardDiet />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TabDiet
