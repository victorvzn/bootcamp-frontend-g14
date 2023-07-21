// import constants from './constants.js'
import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'

const searchInput = document.querySelector('.app__search')
const filterSelect = document.querySelector('.app__filter')
const scrollTopButton = document.querySelector('.app_scrolltop')

let countryData = []

searchInput.addEventListener('input', (event) => {
  const value = event.target.value

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()
    const joinedCapital = country.capital.join(',') // Une todos los elementos de un arreglo en una cadena de texto
    // console.log(joinedCapital)
    const loweredCapital = joinedCapital.toLowerCase()
    const loweredValue = value.toLowerCase()

    // DONE: Adicionalmente necesitamos filtrar por capital

    return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})

filterSelect.addEventListener('input', (event) => {
  const value = event.target.value

  console.log(value)

  const filteredCountriesByRegion = countryData.filter(country => {
    const loweredRegion = country.region.toLowerCase()
    const loweredValue = value.toLowerCase()

    return loweredRegion.includes(loweredValue)
  })

  renderCountries(filteredCountriesByRegion)
})

document.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    // console.log('Scrolling....', window.scrollY)
    scrollTopButton.style.visibility = 'visible'
    scrollTopButton.style.opacity = 1
  } else {
    scrollTopButton.style.visibility = 'hidden'
    scrollTopButton.style.opacity = 0
  }
})

document.addEventListener('DOMContentLoaded', async () => {
  // console.log('EL DOM se cargo totalmente')

  // fetchCountries()
  //   .then(response => renderCountries(response))

  const data = await fetchCountries()

  countryData = data

  renderCountries(data)

  scrollTopButton.style.visibility = 'hidden'
  scrollTopButton.style.opacity = 0

  const countryMoreInfoButtons = document.querySelectorAll('.country__moreinfo')
  const dialog = document.querySelector('.app__dialog')
  const dialogBody = document.querySelector('.dialog__body')
  const dialogClose = document.querySelector('.dialog__close')

  countryMoreInfoButtons.forEach(moreInfoButton => {
    moreInfoButton.addEventListener('click', (event) => {
      // console.log(event)
      const { countryName } = event.target.dataset
      // console.log(valueData)

      const countryFound = countryData.find(
        country => country.name.common === countryName
      )

      // console.log(countryFound)
      
      const { flags: { svg }, name: { official } } = countryFound

      // console.log(svg, official)

      dialogBody.innerHTML = `
        <img src="${svg}" width="400" height="200" />
        <h2>${official}</h2>
        <p><strong>Language(s):</strong> ---</p>
        <p><strong>Capital:</strong> ---</p>
        <p><strong>Currencies(s):</strong> ---</p>
        <p><strong>Timezone(s):</strong> ---</p>
      `

      dialog.showModal()
    })
  });

  dialogClose.addEventListener('click', (event) => {
    dialog.close()
  })
})
