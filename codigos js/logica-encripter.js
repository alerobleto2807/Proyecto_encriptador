// iniciando la logica de programacion del programa//
function codificar(){
  var texto = document.querySelector("input").value;

  var cambiar = {

     a:"ai",
     e:"enter",
     i:"imes",
     o:"ober",
     u:"ufat"

  };

  var codificar = new RegExp(Object.keys(cambiar).join("|"),"g");

  texto = texto.replace(codificar, function(cambio){

     return cambiar[cambio];

  });
  document.getElementById("clave").innerHTML = texto;


}


function decodificar(){
  var texto = document.querySelector("input").value;

  var cambiar = {
        ai:"a",
 		  enter:"e",
 		  imes:"i",
 		  ober:"o",
 		  ufat:"u"

  };

  var decodificar = new RegExp(Object.keys(cambiar).join("|"),"g");

  texto = texto.replace(decodificar, function(cambio){

     return cambiar[cambio];

  });
  document.getElementById("clave").innerHTML = texto;

  }




  function copiar() {

   var copiar = document.getElementById('clave').innerHTML;

   var text = "Example text to appear on clipboard";
   navigator.clipboard.writeText(copiar).then(function() {
    console.log('Async: Copying to clipboard was successful!');
   }, function(err) {
     console.error('Async: Could not copy text: ', err);
   });

   
  alert("Texto Copiado con exito");
}