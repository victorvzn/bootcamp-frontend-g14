import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              color="warning"
            >
              Cart
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header