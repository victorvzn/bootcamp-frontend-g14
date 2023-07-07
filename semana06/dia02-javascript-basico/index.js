console.log("Hola Javascript");

// Esto es un comentario

/* Esto
es
un
comentario
más
largo */

// Tipos de datos

// Undefined

let nombre;
console.log(nombre);
console.log(typeof nombre);

// Null
let apellido = null;
console.log(apellido);
console.log(typeof apellido);

// Boolean -> false o true
const descuento = false;
console.log(descuento);

// Number
const numero1 = 20;
const numero2 = 20.50;
const numero3 = -36;

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

// Strings o Cadenas de texto

const alumna = 'Mylene';
const alumno = "Mylene";
const numero11 = '200';
const numero22 = 200;

console.log(typeof alumna);
console.log(typeof alumno);
console.log(typeof numero11);
console.log(typeof numero22);

// Object
// Function
// BigInt
// Symbol

// Variables y constantes

// var -> ES5
// const, let -> ES6 (Lo recomendable)

const edad = 55;
// edad = 22; // Uncaught TypeError: Assignment to constant variable.
console.log(edad);

let edad2 = 24;
edad2 = 18;
edad2 = 22;
console.log(edad2);

// Operadores matemáticos

console.log(1 + 2);
console.log(3 - 2);
console.log(2 * 2);
console.log(1 / 2);
console.log(1 % 2); // Residuo
console.log(2 ** 3);

// Operador de asignación

const genero = 'femenino'

// Operadores de comparación

// Operador de igualdad y desigualdad no estricta
1 == 1
1 == '1'
1 != 1

// Operador de igualdad y desigualdad estricta (Recomendable)
1 === 1
1 === '1'
1 !== 1

// Otro operadores, siempre deuelve un boolean
8 > 5
5 < 1
8 >= 5
8 <= 5

// Operadores lógicos (AND, OR, NEGACION)

true && false // and
true || false // or
!false // negación

// Operador de cadena (concatenación)

const saludo = 'Hola, '

const nombreCompleto = 'Victor' + ' ' + 'Villazon'

const saludoAmigo = saludo + nombreCompleto

console.log(nombreCompleto)
console.log(saludoAmigo)

// Operadore ternario
const edad1 = 24
const soyMayorOMenor = edad1 > 18 ? 'mayor' : 'menor'

console.log(soyMayorOMenor)

// EJERCICIOS

// 1. Retorna True si  dos strings tienen la misma longitud sino devolver False
const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar True si un numero es menor que 40 sino devolver False
const numero111 = 34
console.log(numero111 < 40) // true

// 3. Retornar True si un numero es menor que 60 sino devolver False
const numero222 = 45
console.log(numero222 < 40) // true

// 4. Retornar True si un numero es par sino devolver False
const numeroPar = 8 // par

console.log(numeroPar % 2 === 0)

// 5. Retornar True si un numero es impar sino devolver False
const numeroImpar = 5 // impar

console.log(numeroImpar % 2 !== 0)

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 5
const altura = 7
console.log(base * altura / 2)
console.log((base * altura) / 2)

// Condicionales

if (true) {
  // Verdadero
}

const esPar = false
      
if (esPar) {
  console.log('Este numero es par')
}

if (esPar) {
  console.log('Este numero es par')
} else {
  console.log('Este numero es impar')
}

const heroe = 'Spiderman'

if (heroe === 'Batman') {
  console.log('Soy Batman')
} else if (heroe === 'Spiderman') {
  console.log('Soy Spiderman')
} else if (heroe === 'Ironman') {
  console.log('Soy Ironman')
} else {
  console.log('No soy un heroe aun')
}
  
switch (heroe) {
  case 'Batman':
    console.log('Soy Barman')
    break
  case 'Spiderman':
    console.log('Soy Spiderman')
    break
  case 'Ironman':
    console.log('Soy Ironman')
    break
  default:
    console.log('No soy un heroe aun')
}
  
// Estructuras repetitivas

// For

for (let i = 0; i < 10; i++) {
  // console.log(i)
}

// While
let j = 0

while (j < 10) {
  // console.log(j)
  j++
}

// Do While

let k = 0

do {
  console.log(k)
  k++
} while (k < 10)
  

// EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
  
// Funciones
  
// Definiendo una función
function nombreDeLaFuncion() {
}
  
// Funciones sin parámetros

// const miNombre = 'Victor'
function imprimirMiNombre () {
  console.log('Hola soy Victor')
  console.log('Y soy frontend')
}

imprimirMiNombre()

// Funciones con parámetros

function imprimirUnNombre (nombre) {
  console.log('Hola soy ' + nombre)
}

imprimirUnNombre('Victor')

function imprimirNombreConApellido (nombre, apellido) {
  console.log('Hola soy ' + nombre + ' ' + apellido)
}

imprimirNombreConApellido('Victor', 'Villazón')
  
// EJERCICIOS
  
// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const miEdad = 22

function esMayorOMenorDeEdad (edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(miEdad)

// Funciones con retorno de valor

const miEdad2 = 22

function esMayorOMenorDeEdad2 (edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

console.log('>>>>>>')
const resultado = esMayorOMenorDeEdad2(miEdad)

console.log(resultado.toUpperCase())
  
