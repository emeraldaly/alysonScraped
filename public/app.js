$(document).ready(function(){
  $("tbody").empty();
  response.forEach(function(Articles){
    var newTr = "<tr>";
    newTr += "<td>" + h3.story_headline + "</td>";
    newTr += "<td>" + link + "</td>";
    newTr += "<td>" + summary +"</td>";
    newTr += "<td>" +
                "<form action='/submit' method='post'>
                  <textarea type='text' name='body'>Write Note Here</textarea>
                  <input class='btn btn-info' id='noteAdd' type='submit' value='Add Note'>
                </form>" + "</td>"
    newTr += "<td"  + "<input class='btn btn-danger' id='delete' type='submit' value='Delete'>" +
              "</td>""
    newTr += "</tr>";
    $("tbody").append(newTr);
  });
});
