/*Parte A

Ejercicio:

Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO.
*/

function condicionEstudiante(nota) {
  let libre = false;
  if (nota < 4) {
    libre = true;
    return "LIBRE";
  } else if (nota < 7 && !libre) {
    return "REGULAR";
  } else if (nota > 6) {
    return "PROMOCIONADO";
  }
}

console.log(condicionEstudiante(10)); // Nota es menor a 4 - LIBRE
console.log(condicionEstudiante(5)); // Nota es menor a 7 y no es LIBRE - REGULAR
console.log(condicionEstudiante(2)); // Nota mayor que 6  - PROMOCIONADO.
