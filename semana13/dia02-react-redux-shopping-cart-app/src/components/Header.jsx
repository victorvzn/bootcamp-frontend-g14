import { AppBar, Avatar, Badge, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { removeProductFromCart } from '../store/cart/slice'

const Header = () => {
  const [show, setShow] = useState(false)

  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const removeFromCart = (id) => {
    dispatch(removeProductFromCart(id))
  }
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={cart.length} color="error">
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
                <Typography variant="h5" sx={{ padding: 2 }}>
                  Shopping Cart
                </Typography>
                {/* {JSON.stringify(cart)} */}
                <List>
                  {cart.map(product => (
                    <ListItem
                      key={product.id}
                      disablePadding
                      secondaryAction={
                        <IconButton
                          edge="end"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar src={product.thumbnail} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={product.title}
                          secondary={product.price}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header