import { Button, ImageListItem, ImageListItemBar } from "@mui/material"

import AddIcon from "@mui/icons-material/Add"

import { useDispatch } from "react-redux"
import { addProductToCart } from "../store/cart/slice"


const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(addProductToCart(product))
  }

  return (
    <ImageListItem>
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={product.title}
        subtitle={product.price}
        actionIcon={
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: 2 }}
            onClick={() => addToCart(product)}
          >
            <AddIcon />
          </Button>
        }
      >
      </ImageListItemBar>
    </ImageListItem>
  )
}

export default ProductItem