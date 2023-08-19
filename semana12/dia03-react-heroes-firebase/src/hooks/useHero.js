import { db } from '../services/firebase'

import { collection, addDoc } from 'firebase/firestore'

export const useHero = () => {
  const reference = collection(db, 'heroes')
  
  const createHero = async (hero) => {

    const newHero = {
      name: hero.name,
      image: hero.image
    }

    const response = await addDoc(reference, newHero)

    return {
      id: response.id,
      newHero
    }
  }

  return {
    createHero
  }
}