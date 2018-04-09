$(document).ready(function(){

var apiKey = "api-key=38a27ae797ff4ab4b1eff38c11ee4596";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"

var searchTerm = "";
var numResults = 0;
var startYear  = 0;
var endYear    = 0;

var queryURL = url + apiKey;

function getQuery (numResults, newURL) {

$.ajax({
    url: newURL,
    method: 'GET',
  }).done(function(result) {
    console.log(queryURL);
    console.log("Results - " + numResults);
    console.log(result);
    //
    for (var i=0; i<numResults; i++) {
      console.log("Headline");
      console.log("-------------------");
      console.log(result.response.docs[i].headline.main);
      console.log(result.response.docs[i].section_name);
      console.log(result.response.docs[i].byline.original);
      console.log(result.response.docs[i].pub_date);
      console.log(result.response.docs[i].web_url);

      // Populate HTML
      var cardSection = $("<div>");
      cardSection.addClass("card-body");
      cardSection.attr('id', 'headline');
      var headline = $("<h2>").text(result.response.docs[i].headline.main);
      var section_name = $("<h3>").text(result.response.docs[i].section_name);
      var author = $("<h4>").text(result.response.docs[i].byline.original);
      var date = $("<h4>").text(result.response.docs[i].pub_date);
      var web_url = $("<h4>").text(result.response.docs[i].web_url);
      cardSection.append(headline);
      cardSection.append(section_name);
      cardSection.append(author);
      cardSection.append(date);
      cardSection.append(web_url);
      $('.cardSection').append(cardSection);


    }

    $("#title").text(result.response.docs[0].headline.main)
    $("#author").text(result.response.docs[0].byline.original)
    $("#section").text(result.response.docs[0].section_name)
    $("#date").text(result.response.docs[0].pub_date)
    $("#link").text(result.response.docs[0].web_url)
  })
};

$("#searchBtn").on("click", function () {

  searchTerm = $("#search").val().trim();
  // if (typeOf(searchTerm) == "undefined"){
  //   searchTerm = ""
  // }

  var newURL = queryURL + "&q=" + searchTerm;


  numResults = $("#recordReq").val();

  startYear = $("#startYear").val().trim();
  endYear = $("#endYear").val().trim();

  if (parseInt(startYear)){
    startYear = startYear + "0101";
    // Add the Startdate to the URL
    newURL = newURL + "&begin_date=" + startYear;
  };
  if (parseInt(endYear)){
    endYear = endYear + "0101";
    // Add the Enddate to the URL
    newURL = newURL + "&end_date" + endYear;
  };
console.log( "NewURL - " + newURL);
  getQuery(numResults, newURL);
  return(false);

});

});
