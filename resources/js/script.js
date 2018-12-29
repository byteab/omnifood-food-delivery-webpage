$(document).ready(function(){

    $('.js--scroll-to-plan').click( function() {
        $('html', 'body').animate({scrollTop: $('.section-plans').offset().top}, 1000);
    });

})