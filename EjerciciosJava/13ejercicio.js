/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function lookForName(array, element) {
  if(array.includes(element)){
    return `${true}, posicion: ${array.indexOf(element)}`
  } else {
    return false;
  }
  
}

console.log(lookForName(nameFinder, "Cory"));