
function CambiarEstilo(id) {
  var elemento = document.getElementById(id);
  if (elemento.className == "aspecto1") {
  elemento.className = "aspecto2";
  }
  else {
  elemento.className = "aspecto1";
  }
}