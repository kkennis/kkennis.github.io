$(document).ready(function(){
  $.getJSON('js/projects.json', function(data){
    var projectsTemplate = $('#projects-template').html();
    var compiledHTML = Handlebars.compile(projectsTemplate)(data);
    $('.projects').html(compiledHTML);
  })

  $.getJSON('js/blog.json', function(data){
    var blogTemplate = $('#blog-template').html();
    var compiledHTML = Handlebars.compile(blogTemplate)(data);
    $('.blog').html(compiledHTML);
  })
})