$(document).ready(function(){
  $.getJSON('js/projects.json', function(data){
    var projectsTemplate = $('#projects-template').html();
    console.log(projectsTemplate);
    var tempScript = Handlebars.compile(projectsTemplate);
    var compiledHTML = tempScript(data);
    console.log(compiledHTML);
    $('.projects').html(compiledHTML);
  })
  .fail(function(err){
  });
})