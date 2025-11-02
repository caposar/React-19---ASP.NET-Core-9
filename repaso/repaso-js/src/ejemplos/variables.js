export default function VariablesEjemplo() {
  let apellido = "Paredes";
  apellido = "Villalba";
  let edad = 999;
  let fecha = new Date();

  let persona = {
    nombre: "Cesar",
    apellido: "Paredes",
    edad: 999,
    fechaActual: new Date(),
    estaLogueado: true,
  };

  let miFuncion = function duplicar(valor) {
    return valor * 2;
  };

  var pais = "Argentina";
  pais = "México";

  for (let i = 1; i <= 10; i++) {
    // ...
  }

  //console.log(i); // Uncaught ReferenceError: i is not defined
  // Error esperado debido a que i no está definido en este ambito (scope)

  const continente = "América";
  //continente = 'Europa'; // Uncaught TypeError: Assignment to constant variable
  // Error debido a que no se puede reasignar el valor de una constante

  const ingredientes = ["Queso", "Jamón"];
  ingredientes.push("Vegetales");
  console.log(ingredientes);
}
