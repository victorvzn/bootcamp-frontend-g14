import ProductItem from "./ProductItem"

import { ImageList } from "@mui/material"

const ProductList = ({ products }) => {
  return (
    <ImageList>
      {/* {JSON.stringify(products)} */}
      {products && products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ImageList>
  )
}

export default ProductList