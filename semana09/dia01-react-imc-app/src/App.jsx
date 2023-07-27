import { useState } from "react"

function App() {
  const [peso, setPeso] = useState(180)
  const [altura, setAltura] = useState(300)

  const handleChangePeso = (event) => {
    const value = event.target.value
    setPeso(value)
  }

  return (
    <>
      <section className="w-96 mx-auto my-5 rounded-md bg-sky-500">
      
        <h1 className="text-3xl font-bold text-center text-white p-5">IMC Calculator</h1>

        <div className="bg-sky-200 p-5">
          <p className="font-bold">Peso: {peso} kg</p>

          <input
            type="range"
            className="w-full"
            min="50"
            max="200"
            onChange={handleChangePeso}
          />

          <p className="font-bold">Height: 100 cm</p>

          <input
            type="range"
            className="w-full"
            min="50"
            max="350"
          />

          <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5">Tu IMC es 99</p>
        </div>

      </section>
      
    </>
  )
}

export default App
