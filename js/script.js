$(document).ready(function()
{
  // clicco su quadrato
  $('.quadrato').click(function(){
    // risparmio operazioni al browser usando il this:
    var clickedSquare = $(this);
    // chiamata ajax
    $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(dataResponse){
          var numeroGenerato = dataResponse.response;

          var classe;
          // quadrato giallo se numero inferiore o uguale a 5
          if(numeroGenerato <= 5){
            classe = 'giallo';
            // quadrato verde se numero maggiore di 5
          } else {
            classe = 'verde';
          }
          // do classe a quadrato cliccato
          clickedSquare.addClass(classe);
          // scrivo numero dentro span
          clickedSquare.children('span').text(numeroGenerato);
        },
        error: function() {
          alert("errore");
        }
      }
    );
  });
});
