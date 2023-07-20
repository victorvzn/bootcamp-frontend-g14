export const renderCountries = function (countries) {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    console.log(country)
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="${country.name.common}" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.name.common}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital}
          </div>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}