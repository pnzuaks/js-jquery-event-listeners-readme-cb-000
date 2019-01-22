//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
    return
  })
}

function frameIt() {
  $('img').on('load', function(){
    $( "img" ).addClass( "tasty" )
    return
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 83){
      alert('s was pressed');
  }
});
}

function submitIt() {

}

$(document).ready(function(){

// call functions here

});
