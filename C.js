/*
En base al trabajo realizado en la parte B, realiza las 
modificaciones necesarias para satisfacer los requerimientos que se 
detallan a continuación.


* Mejorar el ejercicio anterior, recibiendo ahora 3 notas 
por parámetro, calcular el promedio y en base a este retornar el estado 
del alumno.
*/

function calcularPromedio(nota1, nota2, nota3) {
  const notas = [nota1, nota2, nota3];
  let total = 0;
  for (let i = 0; i < notas.length; i++) {
    total += notas[i];
  }
  return total / notas.length;
}

function condicionEstudiante(nota1, nota2, nota3) {
  let libre = false;
  let promedio = 0;
  if (
    nota1 < 1 ||
    nota1 > 10 ||
    nota2 < 1 ||
    nota2 > 10 ||
    nota3 < 1 ||
    nota3 > 10
  ) {
    return "La nota ingresada no es valida";
  } else {
    promedio = calcularPromedio(nota1, nota2, nota3);
    if (promedio < 4) {
      libre = true;
      return "LIBRE";
    } else if (promedio < 7 && !libre) {
      return "REGULAR";
    } else if (promedio > 6) {
      return "PROMOCIONADO";
    }
  }
}

console.log(condicionEstudiante(10, 10, 10)); // PROMOCIONADO
console.log(condicionEstudiante(5, 6, 5)); // REGULAR
console.log(condicionEstudiante(2, 2, 3)); // LIBRE
console.log(condicionEstudiante(-1, 10, 10)); // La nota ingresada no es valida
console.log(condicionEstudiante(200, 10, 10)); // La nota ingresada no es valida
