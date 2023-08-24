import { db } from '../services/firebase'

import { collection, addDoc, deleteDoc, query, getDocs, doc } from 'firebase/firestore'

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

  const removeHero = async (id) => {
    console.log('removeHero', id)

    const document = doc(db, 'heroes', id)

    const response = await deleteDoc(document)

    return response
  }

  const getHero =  async () => {
    
  }

  const fetchHeroes = async () => {
    const q = query(reference)

    const data = await getDocs(q)

    console.log(data)

    const results = []

    data.forEach(doc => {
      console.log(doc.id, doc.data())
      results.push({
        docId: doc.id,
        ...doc.data()
      })
    })

    return results
  }

  return {
    createHero,
    fetchHeroes,
    removeHero,
    getHero
  }
}