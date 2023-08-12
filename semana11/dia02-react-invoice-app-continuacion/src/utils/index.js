
export const formatNumber = (number) => {
  const locales = 'en-US'
  const options = {
    minimumFractionDigits: 2
  }
  return new Intl.NumberFormat(locales, options).format(number)
}