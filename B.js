/*
En base al trabajo realizado en la parte A, realiza las modificaciones necesarias para satisfacer los requerimientos que se detallan a continuación.

* Mejorar el ejercicio anterior agregando un return de mensaje de error si la nota es menor que 1 o mayor que 10.
*/

function condicionEstudiante(nota) {
  let libre = false;
  if (nota < 1 || nota > 10) {
    return "La nota ingresada no es valida";
  } else {
    if (nota < 4) {
      libre = true;
      return "LIBRE";
    } else if (nota < 7 && !libre) {
      return "REGULAR";
    } else if (nota > 6) {
      return "PROMOCIONADO";
    }
  }
}

console.log(condicionEstudiante(10)); // PROMOCIONADO
console.log(condicionEstudiante(5)); // REGULAR
console.log(condicionEstudiante(2)); // LIBRE
console.log(condicionEstudiante(-1)); // La nota ingresada no es valida
console.log(condicionEstudiante(200)); // La nota ingresada no es valida
