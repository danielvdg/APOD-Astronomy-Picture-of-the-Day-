// utilizando o cifrão e abrindo o paretesse inicializamos o nosso jQuery

$("#btnSelecionar").on("click", function(){  
    
    $("#data").val()
    
    $.ajax({
         url:"https://api.nasa.gov/planetary/apod?api_key=bwEwY80LWIuDs7EmdAaxay3yyF2hr60HOLWpFztL&date=" +  $("#data").val(),

        "success": function(resultado){

                        
            $("#textoContainer").html(`<p>${resultado.explanation}</p> <img src="${resultado.url}">`)

           
            
            
            console.log(resultado)
        },
       
        
    })
    

})


