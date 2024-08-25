/**Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeat(param) {
    
   const count = {} 
    
   for (let i = 0; i < param.length; i++) {
        
        if(count[param[i]] >= 1) {
            count[param[i]]++;
        } else {
            count[param[i]] = 1;
        }
        
    }

    console.log(count);
  }

  repeat(counterWords) // { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
