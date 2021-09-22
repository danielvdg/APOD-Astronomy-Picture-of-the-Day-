// utilizando o cifrão e abrindo o paretesse inicializamos o nosso jQuery


$("#data").on("change", function () {
  $("#data").val();

  $.ajax({
    url:
      "https://api.nasa.gov/planetary/apod?api_key=bwEwY80LWIuDs7EmdAaxay3yyF2hr60HOLWpFztL&date=" +
      $("#data").val(),

    success: function (resultado) {
      $("#textoContainer").html(
        `
        <ul class='card'>
            <li class='itens'><p class='texto'>${resultado.explanation}</p> </li>
            <li class='itens'><img class='imgPrincipal' src="${resultado.url}"</li>
            
        </ul>
        
        >`
      );

      console.log(resultado);
    },
  });
});
