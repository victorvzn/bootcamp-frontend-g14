import { auth } from '../services/firebase'

import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

export const useUser = () => {
  const navigate = useNavigate()

  const login = async () => {
    const provider = new GithubAuthProvider()

    await signInWithPopup(auth, provider)

    navigate('/')
  }

  const logout = async () => {
    await auth.signOut()

    navigate('/login')
  }

  return {
    login,
    logout
  }
}

