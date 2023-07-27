import Counter from './Counter'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Counter</h1>

      <Counter iniciador={5} />
      <Counter />
    </>
  )
}

// const App = () => {
//   return <h1>Hola React!</h1>
// }

export default App
