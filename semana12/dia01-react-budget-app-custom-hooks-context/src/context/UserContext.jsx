import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth') || null ))

  const storeUser = (dataUser) => {
    localStorage.setItem('auth', JSON.stringify(dataUser))
    setUser(dataUser)
  }

  const cleanUser = () => {
    localStorage.removeItem('auth')
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{ user, storeUser, cleanUser }}
    >
      {children}
    </UserContext.Provider>
  )
}