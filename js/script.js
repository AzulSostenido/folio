
/*! 

$(document).ready(function(){
  $('.menuDesplegable').hide();
  $("#primera #grupo").toggle("fold");
  $("#segunda  #grupo").toggle("fold");
  $("#tercera  #grupo").toggle("fold");
    $(".galeriaitem").toggle("fold");
});



$(document).ready(function(){
  $("#primera h2").click(function(event){
    event.preventDefault();
    $("#primera #grupo").toggle("fold");

  });
});



$(document).ready(function(){
   $("#segunda h2").click(function(event){
    event.preventDefault();
    $("#segunda  #grupo").toggle("fold");
         });
});

$(document).ready(function(){
   $("#tercera h2").click(function(event){
    event.preventDefault();
    $("#tercera  #grupo").toggle("fold");
         });
});




$(document).ready(function(){
   $("#primera .descripciontxt").hover(function(){
    event.preventDefault();
    $("#primera .galeriaitem").toggle("fold");
         });
});

$(document).ready(function(){
   $("#segunda .descripciontxt").hover(function(){
    event.preventDefault();
    $("#segunda .galeriaitem").toggle("fold");
         });
});
$(document).ready(function(){
   $("#tercera .descripciontxt").hover(function(){
    event.preventDefault();
    $("#tercera .galeriaitem").toggle("fold");
         });
});


 */
$(document).ready(function(){

    $(".descripcionitem").toggle("fold");

});


 $(document).ready(function(){
  $(".1 .galeriaitem").click(function(event){
    event.preventDefault();
      $(".1 .descripcionitem").toggle("fold");
      $(".1 .extrainfo").toggle("fold");
  });
});

  $(document).ready(function(){
  $(".cambio").click(function(event){
    event.preventDefault();
      $(".itemfolio").toggle("fold");
      $(".extrainfo").toggle("fold");
  });
});

function resaltar_elemento(){
        var elementoAResaltar = document.getElementById('undiv').lastChild;
        elementoAResaltar.style.backgroundColor = '#FF3';
    }
        