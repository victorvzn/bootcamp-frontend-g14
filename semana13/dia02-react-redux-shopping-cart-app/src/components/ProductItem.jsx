import { Button, ImageListItem, ImageListItemBar } from "@mui/material"

import AddIcon from "@mui/icons-material/Add"

const ProductItem = ({ product }) => {
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