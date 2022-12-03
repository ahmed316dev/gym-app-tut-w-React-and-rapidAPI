import { Box, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" alignItems="center" px="40px" pt="24px">
      <img src={Logo} alt="logo" width="200px" height="40px" />
      <Typography variant="h5" pb="40px" mt="20px">
        I implemented this app follwing a tut by the channel JS mastery
      </Typography>
    </Box>
  )
}

export default Footer
