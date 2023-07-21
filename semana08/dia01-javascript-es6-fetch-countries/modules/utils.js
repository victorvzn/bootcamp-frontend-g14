export const renderCountries = function (countries) {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  if (countries.length === 0) {
    countryListElement.classList.add('app__list--no-found')
    countryListElement.innerHTML = `
      <img src="./images/icon-sad-square.svg" width="100" height="100" />
      Sorry, no results found!
    `
    return
  }

  countryListElement.classList.remove('app__list--no-found')

  countries.forEach(country => {
    // console.log(country)
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="${country.name.common}" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${formatNumber(country.population)}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital}
          </div>
          <button class="country__moreinfo" data-country-name="${country.name.common}">More info</button>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}

export const formatNumber = (number) => {
  return new Intl.NumberFormat('es-PE').format(number)
}