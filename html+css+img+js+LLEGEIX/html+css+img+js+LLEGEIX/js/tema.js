//Part D
// Variables
const button = document.querySelector(".background_switch");//Assigna la constant que fa d'interruptor amb una classe

button.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode"); /*Si quan es pren el botó no està assignada la 
  classe del dark mode s'assigna, si està activada es desassigna i torna al mode normal*/
});

//Quan es pren un dels botons de compra dirigeix a l'usuari a la pàgina d'error
document.addEventListener("click", (event) => { 
  if (event.target.closest(".errorhtml")) { /*Amb el closest el programa busca constantment el 
    botó amb la classe indicada (el que dirigeix a Error.html). Si no es troba un botó així en la pàgina *
    el programa retorna null i el codi funciona amb normalitat */
    window.location.href="Error.html";
  }
    });
