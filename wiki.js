$(document).ready(function(){
//convert search terms to variable
var input;
$("form").submit(function(event){
  input = $("#search-term").val();
  alert(input);
});
console.log(input);
//api request to https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=

//use search term variable to fill in titles

//assign results to html.
});
