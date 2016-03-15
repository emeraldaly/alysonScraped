var request = require('request');
var cheerio = require('cheerio');


request('https://www.csmonitor.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body);
    $('h3.story_headline', '#ui-page-contents').each(function(i, elem){
         var articleTitle = $(elem).text();
         //var articleLink = $(elem).attr('href');
         var insertedArticle = new Article({
          title: articleTitle,
          //link: articleLink
         });
    console.log(articleTitle);
    //console.log(articleLink);
 });
}
  
   
});
