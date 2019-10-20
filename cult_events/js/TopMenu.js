$(document).on({
    click: function () {
        if ($(this).hasClass('show')) {
            $(this).children('.cat-list-sub').stop().fadeOut('fast');
            $(this).removeClass('show');
        } else {
            $('.cat-list-item').children('.cat-list-sub').stop().fadeOut('fast'); //Close others list
            $(this).children('.cat-list-sub').stop().fadeIn('fast');
            $(this).addClass('show');
        }
    }
}, '.cat-list-item');