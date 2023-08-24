import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import { useHero } from '../hooks/useHero'

const Home = () => {
  const MySwal = withReactContent(Swal)

  const { fetchHeroes, removeHero } = useHero()

  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetchHeroes()
    .then(setHeroes)
  }, [])

  const handleRemove = (event) => {
    const button = event.target
    const id = button.dataset.id

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        removeHero(id)
          .then((response) => {
            console.log(response)
            fetchHeroes().then(setHeroes)
          })
        MySwal.fire({
          icon: 'success',
          title: 'Your hero has been deleted!',
          showConfirmButton: false,
          timer: 2500
        })
      }
    })
  }

  return (
    <div className="container mx-auto flex flex-col gap-4">

      {/* { JSON.stringify(form) } */}

      {/* <pre>{JSON.stringify(heroes, null, 2)}</pre> */}

      <section className="w-8/12 mx-auto flex justify-between py-3 px-6">
        <h2 className="text-3xl">Hero List</h2>
        <Link to='/new-hero'>
          <button className="py-2 px-3 bg-green-600 hover:bg-green-700 duration-300 text-white w-[120px]">
            New
          </button>
        </Link>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto">
        {heroes.map(heroe => {
          return (
            <div
              key={heroe.docId}
              className="relative"
            >
              <div className="flex flex-col gap-4 absolute bottom-0 left-0 right-0 h-10 bg-green-400/40 px-3 py-2 font-semibold text-center cursor-default duration-300 hover:h-full hover:text-2xl overflow-hidden overflow-ellipsis">
                <span className="text-white drop-shadow-xl">{heroe.name ? heroe.name : '-'}</span>
                <div className="mt-5 flex flex-col gap-2">
                  <button className="py-2 px-3 bg-blue-600 text-base duration-300 text-white hover:bg-blue-700">Edit</button>
                  <button
                    className="py-2 px-3 bg-red-600 text-base duration-300 text-white hover:bg-red-700"
                    data-id={heroe.docId}
                    onClick={handleRemove}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <img
                src={heroe.image}
                width={150}
                onError={(e) => e.target.src='https://placehold.co/480x640/555/FFF?text=?'}
              />
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Home