console.log('hola js');

// Arrays

const numero1 = 1
const numero2 = 2
const numero3 = 3

const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true]

console.log(listaDeValores)

console.log(listaDeValores[0])
console.log(listaDeValores[3])

listaDeValores[2] = 99

console.log(listaDeValores)

listaDeValores.push('javascript')

console.log(listaDeValores)

listaDeValores.pop()

console.log(listaDeValores)

console.log('bienvenido'.length)
console.log(listaDeValores.length)


// Objetos

// { Key : Value } 
const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  'mi edad': 29,
}

console.log(miObjeto)

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad)
// console.log(miObjeto.mi edad)

console.log(miObjeto['nombre'])
console.log(miObjeto['mi edad'])

// delete miObjeto.apellido

console.log(miObjeto)

// Destructuring

const nombreValue = miObjeto.nombre

console.log(nombreValue)

const { nombre, apellido } = miObjeto

console.log(nombre, apellido)

const { nombre: nombreValor, apellido: apellidoValor } = miObjeto
console.log(nombreValor, apellidoValor)

// Spread operator ...

const producto = {
  nombre: 'Laptop',
  precio: 6800,
  producto: 'tech'
}

const cliente = {
  nombre: 'Julio',
  isVip: true
}

const nuevoObjeto = { ...producto, ...cliente }

console.log(nuevoObjeto)

const nuevoObjetoSinCOlisiones = {
  producto: { ...producto },
  cliente: { ...cliente },
}

console.log(nuevoObjetoSinCOlisiones)

console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))

