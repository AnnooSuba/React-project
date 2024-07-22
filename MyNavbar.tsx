import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
// import MenuIcon from '@mui/icons-material'
export const MyNavbar=()=> {
    return <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Login
          </Typography>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
}