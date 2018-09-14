

//API key 
var apiKey = "mMKyNZ5JaQbki7NuFViDXSMyh2MtvBTl";
//url
var queryurl = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + apiKey;
console.log(queryurl);


var topics = ["music", "movies", "memes"];

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

  })


function buttonsAppear() {
  
  $("#gif-view").empty();

  // Looping through the array
  for (var i = 0; i < topics.length; i++) {

// generate buttons for gif topics, add class and attribute

    var a = $("<button>");
    a.addClass("gif");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#gif-view").append(a);
  }
}

// 
$("#add-gif").on("click", function(event) {
  event.preventDefault();


  var gif = $("#gif-input").val().trim();
  topics.push(gif);
  buttonsAppear();

});

buttonsAppear();


