$(document).ready(function(){
  $('li').click(function(event){
    event.preventDefault();

    $('li').removeClass('italic');
    $(this).addClass('italic');

    var sectionClass = '.' + $(this).attr('class').match(/^(.+)-nav/)[1];

    $('.page').hide();
    $(sectionClass).show();
    drawDots(sectionClass);
  });
});

function drawDots(section){
  var pageWidth = $('.container').width();
  var tocItems = $(section).children('.toc-item');

  $.each(tocItems, function(item){

  })

}