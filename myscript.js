$.ajax ({
  url : "https://flynn.boolean.careers/exercises/api/array/music",
  method : "GET",

  success: function(data) {
    var artista = data.response;
    console.log("artista " + artista); // stampo l'artista che esce

    // serve un ciclo per stampare gli artisti
    for (var i = 0; i < artista.length; i++) { // ciclo gli artisti fino a quando ci sono artisti nell'api, per stampare tutto

      var source = $("#entry-template").html(); //#entry-template è il contenitore handlebars
      console.log("source " + source);
      var template = Handlebars.compile(source); //compilo il template
      console.log("template " + template);

      var html = template(artista[i]); //"creo" l'html dell'iesimo artista
      console.log('html ' + html);
      $('.container').append(html) //appendo html all'interno del container di pagina, così ogni artista è uno dopo l'altro
    }


  }

})
