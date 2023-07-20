export const renderCountries = function (countries) {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    countryList = countryList + '<h2>' + country.name.common + '</h2>'
  })

  countryListElement.innerHTML = countryList
}