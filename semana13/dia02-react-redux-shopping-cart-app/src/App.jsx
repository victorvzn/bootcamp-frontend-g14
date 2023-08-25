import { Box, Container } from '@mui/material'

import Header from './components/Header'

function App() {
  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <Header />
        </Box>
      </Container>
    </>
  )
}

export default App
