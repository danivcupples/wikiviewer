$(document).ready(function(){
//convert search terms to variable
var message;
$("form").submit("click", function(){
  message = $('input[name=search-term]').val();
  //alert("You searched for " + message + "!");
  var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=revisions&origin=\*&page=" + message;

  //api request to https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=
  $.getJSON(url, function(response){
    console.log(response);

    //pass response into reader field
    const reader = document.querySelector("#content");
    reader.innerHTML =
      "<dl><dt>" + response.parse.title + "</dt>"
      "<dd>" + response.parse.wikitext.* + "</dd></dl>"

  });

  return false;
});


//use search term variable to fill in titles

//assign results to html.
});
