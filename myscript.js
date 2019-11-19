$.ajax ({
  url : "https://flynn.boolean.careers/exercises/api/array/music",
  method : "GET",

  success: function(data) {
    var artista = data.response;
    console.log(artista); // stampo il numero che esce
  
  }

})
