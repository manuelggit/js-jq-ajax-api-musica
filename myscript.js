$.ajax ({
  url : "https://flynn.boolean.careers/exercises/api/array/music",
  method : "GET",

  success: function(data) {
    var artista = data.response;
    console.log("artista " + artista); // stampo l'artista che esce

    // serve un ciclo per stampare gli artisti
    var source = $("#entry-template").html();
    console.log("source " + source);
    var template = Handlebars.compile(source);
    console.log("template " + template);

  }

})
