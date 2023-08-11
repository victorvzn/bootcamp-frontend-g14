import { RouterProvider } from "react-router-dom"
import { PrimaryRouter } from "./routes/PrimaryRouter"

function App() {
  return (
    <RouterProvider router={PrimaryRouter} />
  )
}

export default App
