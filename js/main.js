var $container = $('#container');
// initialize
$container.masonry({
    columnWidth: 100,
    itemSelector: '.case'
});
var $container = $('.container');
// initialize
$container.masonry({
    columnWidth: 100,
    itemSelector: '.case'
});

// GALLERY-BUTTON
// cf http://jsfiddle.net/lfurter/QJftM/
$('.next').click(function () {
    var $current = $(this).parent().parent().find('.image-gallery:not(.hidden)');
    var $next = $current.next();
    if ($next.hasClass("hidden")) {
        $current.addClass("hidden");
        $next.removeClass("hidden");
    }
});
$('.previous').click(function () {
    var $current = $(this).parent().parent().find('.image-gallery:not(.hidden)');
    var $previous = $current.prev();
    if ($previous.hasClass("hidden")) {
        $current.addClass("hidden");
        $previous.removeClass("hidden");
    }
});

// HOVER
$('.MHTCLL').hover(function () {
    $('.MHTCLL .title').css('background-color', 'rgb(0, 126, 97)');
}, function() {
    $('.MHTCLL .title').css('background-color', 'white');
});
$('.MBSKJE').hover(function () {
    $('.MBSKJE .title').css('background-color', 'rgb(0, 126, 97)');
}, function() {
    $('.MBSKJE .title').css('background-color', 'white');
});
$('.DTCFMK').hover(function () {
    $('.DTCFMK .title').css('background-color', 'rgb(0, 126, 97)');
}, function() {
    $('.DTCFMK .title').css('background-color', 'white');
});
$('.CDRZHS').hover(function () {
    $('.CDRZHS .title').css('background-color', 'rgb(0, 126, 97)');
}, function() {
    $('.CDRZHS .title').css('background-color', 'white');
});

$('a').smoothScroll();