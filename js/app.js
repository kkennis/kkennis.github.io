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

  $.each(tocItems, function(index, item){
    var title = $(item).children('.toc-title');
    var date = $(item).children('.toc-date');

    var itemWidth = pageWidth - title.width() - date.width();

    var numDots = Math.floor(itemWidth / 8.82813) - 1;
    var dots = title.next().width(itemWidth);

    var count = 0;

    if (dots.is(':empty')){
      var dotPainter = setInterval(function(){
        dots.append($('<span> . </span>'));
        count++;
        if (count === numDots) clearInterval(dotPainter);
      });
    }

  });
}

