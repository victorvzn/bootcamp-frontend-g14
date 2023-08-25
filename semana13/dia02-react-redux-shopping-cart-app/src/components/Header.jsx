import { AppBar, Badge, Box, Button, Container, Drawer, Toolbar, Typography } from "@mui/material"
import { useState } from "react"

const Header = () => {
  const [show, setShow] = useState(false)
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={9} color="error">
              <Button
                variant="contained"
                color="warning"
                onClick={() => setShow(true)}
              >
                Cart
              </Button>

              <Drawer
                anchor="right"
                open={show}
                onClose={() => setShow(false)}
                sx={{
                  width: 360  ,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: 360  ,
                    boxSizing: 'border-box',
                  },
                }}
              >
                <Typography variant="h6">
                  Cart
                </Typography>
              </Drawer>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header