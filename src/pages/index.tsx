// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import UserModal from 'src/views/users/createUsersModal'
import React from 'react';

const Dashboard = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container   justifyContent="space-between" direction="row"   alignItems="center">
            <Grid item xs={11}>
              <h1> Usuários </h1>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleClickOpen}>
                New
              </Button>
            </Grid>
          </Grid>
          
          <Table />
        </Grid>
        
        <UserModal open={open} setOpen={setOpen} handleClose={handleClose}/>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
