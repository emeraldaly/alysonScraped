$(document).ready(function(){
    $.getJSON("/all", function(data){
      for(var i = 0; i < data.length; i++){
        $("#results").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].avgWeight + "</td><td>" + data[i].whatIWouldReallyCallIt + "</td></tr>" );
      }
    });

  $("#weightsort").on("click", function(){
    // get and log to the console data from the /weight endpoint
    $.getJSON("/weight", function(data){
      $("#results").empty();
      for(var i = 0; i < data.length; i++){
      $("#results").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].avgWeight + "</td><td>" + data[i].whatIWouldReallyCallIt + "</td></tr>" );
      }
    });
    console.log("weight button clicked");
  });

  $("#namesort").on("click", function(){
    $("#results").empty();
    $.getJSON("/name", function(data){
      $("#results").empty();
      for(var i = 0; i < data.length; i++){
      $("#results").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].avgWeight + "</td><td>" + data[i].whatIWouldReallyCallIt + "</td></tr>" );
      }
    });
    console.log("name button clicked");
  });
})