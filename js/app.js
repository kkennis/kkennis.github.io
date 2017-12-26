$(document).ready(function(){
  slideTitleDown();

  $('li').click(function(event){
    event.preventDefault();
    var self = this;

    if (parseInt($('.landing').css('top'),10) >= 15){
      slideTitleUp();
      setTimeout(function(){
        switchTab(self);
      }, 1000);
    } else {
      switchTab(self);
    }
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
    var dotPainter;

    if (dots.is(':empty')){
      dotPainter = setInterval(function(){
        dots.append($('<span> . </span>'));
        count++;
        if (count >= numDots) clearInterval(dotPainter);
      });
    }
  });
}

function switchTab(context){
  $('li').removeClass('italic');
  $(context).addClass('italic');

  var sectionClass = '.' + $(context).attr('class').match(/^(.+)-nav/)[1];

  $('.page').hide();
  $(sectionClass).show();
  if (sectionClass === '.projects' || sectionClass === '.blog') {
    drawDots(sectionClass);
  }
}

function slideTitleDown(){
  var slideHeight = getSlideHeight();

  $('.landing').animate({
    top: "+="+slideHeight
  }, 1000);
}

function slideTitleUp(){
  var slideHeight = getSlideHeight();

  $('.landing').animate({
    top: "-="+slideHeight
  }, 1000);
}

function getSlideHeight(){
  var height = window.innerHeight;
  var titleHeight = $('.landing').height();
  return height / 2 - titleHeight;
}