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
  $('input').on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
})
}

function submitIt() {
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
})
}

$(document).ready(function(){

// call functions here

});
