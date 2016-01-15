$(document).ready(function(){
  $.getJSON('js/projects.json', function(data){
    var projectsTemplate = $('#projects-template').html();
    var compiledHTML = Handlebars.compile(projectsTemplate)(data);
    $('.projects').html(compiledHTML);
  });

  $.getJSON('js/blog.json', function(data){
    var blogTemplate = $('#blog-template').html();
    var compiledHTML = Handlebars.compile(blogTemplate)(data);
    $('.blog').html(compiledHTML);
  });

  $.getJSON('js/photos.json', function(data){
    var photosTemplate = $('#photos-template').html();
    data["photos"] = shuffle(data["photos"]);
    var compiledHTML = Handlebars.compile(photosTemplate)(data);
    $('.photos ul').html(compiledHTML);
  })
})


// F-Y Shuffle, from the internet
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}