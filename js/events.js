//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
    return
  })
}

function frameIt() {
  $('img').on('load', function(){
    $( "p" ).addClass( "myClass yourClass" )
  });
}

function pressIt() {

}

function submitIt() {

}

$(document).ready(function(){

// call functions here

});
