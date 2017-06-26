$(document).ready(function(){
//convert search terms to variable
$("form").submit(function(){
  var message = $('input[name=search-term]').val();
  alert("You searched for " + message + "!");
  return false;
  console.log(message);
});
//api request to https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=

//use search term variable to fill in titles

//assign results to html.
});
