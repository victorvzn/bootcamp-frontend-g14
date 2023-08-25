import { configureStore } from "@reduxjs/toolkit"

// REDUX-01 - configurar la store donde guardamos los datos o estados globales de nuestra app
// REDUX-02 - Usar un Provider que envuelva nuestra aplicación par que nos permita leer la store globalmente desde cualquier componente
// REDUX-03 - 

export const store = configureStore({
  reducer: {
  }
})