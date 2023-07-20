const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital'

export function fetchCountries () {
  return fetch(url) // Promise
    .then(response => response.json())
    // .then(data => data)
    .catch(err => console.log(err))
}