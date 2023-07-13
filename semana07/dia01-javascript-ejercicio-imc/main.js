//console.log('Hola JS')

const buttonCalcular = document.getElementById('calcular')
const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const divResultado = document.getElementById('resultado')

// console.log(inputPeso)

// inputPeso.addEventListener('input', function (event) {
//   // console.log('escribiendo en la caja de peso')
//   // console.log(event)
//   console.log(event.target.value)
//   const peso = event.target.value
// })

buttonCalcular.addEventListener('click', function (event) {
  // console.log(event)
  // console.log('click')
  const peso = inputPeso.value
  const altura = inputAltura.value

  console.log(peso, altura)

  // const indiceDeMasaCorporal = peso / (altura / 100 * altura / 100)
  const indiceDeMasaCorporal = peso / ((altura / 100) ** 2)

  console.log(indiceDeMasaCorporal)

  let resultado = ''

  if (indiceDeMasaCorporal < 18.5) {
    resultado = 'Baja'
  } else if (indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <= 24.9) {
    resultado = 'Normal'
  } else if (indiceDeMasaCorporal >= 25 && indiceDeMasaCorporal <= 29.9) {
    resultado = 'Sobrepeso'
  } else if (indiceDeMasaCorporal > 30) {
    resultado = 'Obeso'
  } else {
    resultado = 'Datos incorrectos'
  }

  console.log(resultado)

  divResultado.innerText = 'Tu Indice de Masa Corporal es ' + resultado
})