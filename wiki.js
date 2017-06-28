$(document).ready(function(){
//convert search terms to variable
var message;
$("form").submit("click", function(){
  message = $('input[name=search-term]').val();
  //alert("You searched for " + message + "!");
  var url = "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=\*&page=" + message + "&utf8=1";

  //api request to https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=
  $.getJSON(url, function(response){
    console.log(response.parse.displaytitle);
    console.log(response.parse.text);
  });

  return false;
});


//use search term variable to fill in titles

//assign results to html.
});
