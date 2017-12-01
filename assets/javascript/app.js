$(document).ready(function(){

var apiKey = "api-key=4595d4f0289d40c5b7db109a3d506dea";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"

var searchTerm;
var numResults;
var startYear;
var endYear;

var queryURL = url + apiKey + "&q=trump" + "&begin_date=20170101" + "&end_date=20170130"

$.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    console.log(result.response.docs[0].headline.main)
    console.log(result.response.docs[0].byline.original)
    console.log(result.response.docs[0].section_name)
    console.log(result.response.docs[0].pub_date)
    console.log(result.response.docs[0].web_url)
  })


})


