import Saludar, { PI, saludar, usuario } from './constantes.js'
import { aritmetica as aritm } from './aritmetica.js'

console.log('Archivo modulos.js')
console.log(PI)
console.log(usuario)
console.log(aritm.sumar(3, 4))

saludar()

let saludo = new Saludar()