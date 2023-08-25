import { Box, Container } from '@mui/material'

import Header from './components/Header'
import ProductList from './components/ProductList'

import { useEffect, useState } from 'react'

import axios from 'axios'

function App() {
  const [products, setProducts] = useState()

  const fetchProducts = async () => {
    const BASE_URL = 'https://dummyjson.com/products'
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response.data
  }

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <Header />
        </Box>

        <Box>
          <ProductList products={products} />
        </Box>
      </Container>
    </>
  )
}

export default App
