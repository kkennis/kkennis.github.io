$(document).ready(function(){
    Handlebars.registerHelper('lookupProp', function (obj, key) {
        return obj[key];
    });

    ['projects', 'blog', 'photos'].forEach(loadJSON);
});

function loadJSON(section){
    $.getJSON('js/' + section + '.json', function(data){
        var template = $('#' + section + '-template').html();
        var compiledHTML;

        if (section === "photos") {
            data["photos"] = shuffle(data["photos"]);
            compiledHTML = Handlebars.compile(template)(data);
            $('.' + section + ' ul').html(compiledHTML);

            var viewer = new Viewer(document.getElementById('image-list'), {

            });
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