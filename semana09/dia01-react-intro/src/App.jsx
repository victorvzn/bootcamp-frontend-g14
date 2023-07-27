import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(1)

  return (
    <>
      <h1>Counter</h1>

      <button onClick={() => setContador(contador + 1)}>+</button>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </>
  )
}

// const App = () => {
//   return <h1>Hola React!</h1>
// }

export default App
