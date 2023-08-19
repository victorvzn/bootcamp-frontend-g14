import { db } from '../services/firebase'

export const useHero = () => {
  const reference = db.collection('heroes')

  const createHero = async (hero) => {

    const newHero = {
      name: hero.name,
      image: hero.image
    }

    const response = await reference.add(newHero)

    return {
      id: response.id,
      newHero
    }
  }

  return {
    createHero
  }
}