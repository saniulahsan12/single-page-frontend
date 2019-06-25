$(document).ready(function(){

    // menu buttons nav menu buttons on tabs nd mobiles
    $('.navbar-toggler').click(function(){
        $('.social-wrapper').addClass('show-index');
        // $('.overlay').show();
        $('.overlay').removeClass('animated slideOutRight');
        $('.overlay').addClass('animated slideInRight');
    });
    $('.closebtn').click(function(){
        $('.social-wrapper').removeClass('show-index');
        // $('.overlay').hide();
        $('.overlay').removeClass('animated slideInRight');
        $('.overlay').addClass('animated slideOutRight');
    });

    // make the non scrollable for potrait devices  as design provided
    $('#parent') .css({'min-height': (($(window).height()))+'px'});
    $(window).bind('resize', function(){
        $('#parent') .css({'min-height': (($(window).height()))+'px'});
        $('.overlay').removeClass('animated slideOutRight');
    });
});
