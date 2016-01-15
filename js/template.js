$(document).ready(function(){
  ['projects', 'blog', 'photos'].forEach(loadJSON);

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
    $('img').unveil(200);
    $('img').trigger('unveil');
  })
})

function loadJSON(section){
  $.getJSON('js/' + section + '.json', function(data){
    var template = $('#' + section + '-template').html();
    var compiledHTML;

    if (section === "photos"){
      data["photos"] = shuffle(data["photos"]);
      compiledHTML = Handlebars.compile(template)(data);
      $('.' + section + ' ul').html(compiledHTML);
      $('img').unveil(200);
      $('img').trigger('unveil');
    } else {
      compiledHTML = Handlebars.compile(template)(data);
      $('.' + section).html(compiledHTML);
    }
  })
}

// F-Y Shuffle, from the internet, so photos are more fun
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