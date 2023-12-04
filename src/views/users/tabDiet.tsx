// ** MUI Imports
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { Divider, Typography } from '@mui/material'


const TabDiet = (props: {setRegisteredUser(value: boolean): void}) => {
  return (
    <CardContent>
      <Typography variant='h4' component='h4'> Diet register </Typography>
      <Typography mt={2} mb={5}> Register a new diet of user (user name here)</Typography>
      <Divider/>

      <form>
        <Grid container spacing={7} mt={5}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Full Name' placeholder='Full name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='test@gmail.com'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label='Role' defaultValue='patient'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='patient'>Patient</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label='Status' defaultValue='active'>
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Age' placeholder='Age.'/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Age' placeholder='Age.'/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Weight' placeholder='Weight.'/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='height' placeholder='Height.'/>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label='Gender'>
                <MenuItem value='woman'>Woman</MenuItem>
                <MenuItem value='man'>Man</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={() => props.setRegisteredUser(true)}>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabDiet
