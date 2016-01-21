
$(document).ready(function(){

    $(".descripcionitem").toggle("fold");
          $("#1 .grupo").toggle("fold");
          $("#2 .grupo").toggle("fold");  
          $("#3 .grupo").toggle("fold");   
          $("#4 .grupo").toggle("fold");        

});


/*!  pliego uno a uno los divs */
 $(document).ready(function(){
  $("#1 .galeriaitem").click(function(event){
    event.preventDefault();
      $("#1 .descripcionitem").toggle("fold");
      $("#1 .extrainfo").toggle("fold");
  });
});

 $(document).ready(function(){
  $("#2 .galeriaitem").click(function(event){
    event.preventDefault();
      $("#2 .descripcionitem").toggle("fold");
      $("#2 .extrainfo").toggle("fold");
  });
});

  $(document).ready(function(){
  $("#3 .galeriaitem").click(function(event){
    event.preventDefault();
      $("#3 .descripcionitem").toggle("fold");
      $("#3 .extrainfo").toggle("fold");
  });
});

    $(document).ready(function(){
  $("#4 .galeriaitem").click(function(event){
    event.preventDefault();
      $("#4 .descripcionitem").toggle("fold");
      $("#4 .extrainfo").toggle("fold");
  });
});




  $(document).ready(function(){
  $("#1 .cambio").click(function(event){
    event.preventDefault();
      $("#1 .grupo").toggle("fold");
  });
});

  $(document).ready(function(){
  $("#2 .cambio").click(function(event){
    event.preventDefault();
      $("#2 .grupo").toggle("fold");
  });
});

  $(document).ready(function(){
  $("#3 .cambio").click(function(event){
    event.preventDefault();
      $("#3 .grupo").toggle("fold");
  });
});


  $(document).ready(function(){
  $("#4 .cambio").click(function(event){
    event.preventDefault();
      $("#4 .grupo").toggle("fold");
  });
});

 


        