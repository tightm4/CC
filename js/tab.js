$(function(){
    function switchImg() {
        var acSrc = $(this).attr('src').replace('yes', 'ac');
        var tabInner = $('.tabs .tabs_inner');
        var title = $(this).attr('title');
        var len = $('.tabs .selection a img').length;
        for (i = 0; i < len; i++) {
            var img = $('.tabs .selection a img:eq(' + i + ')');
            var src = img.attr('src');
            if (src.match('ac')) {
                var titleOff = img.attr('title');
                img.attr('src', src.replace('ac', 'no'));
                tabInner.children('div[class *= ' + titleOff + ']').addClass('tab_hidden').removeClass('tab_active');
                break;
            }
        }
        tabInner.children('div[class *= ' + title + ']').removeClass('tab_hidden').addClass('tab_active');
        $(this).attr('src', acSrc);
    }
    
    $('.tabs .selection a img').click(switchImg);

    $('.tabs .selection a').children('img').hover(function(){
        var onSrc = $(this).attr('src').replace('no', 'yes');
        $(this).attr('src', onSrc);
    }, function() {
        var offSrc = $(this).attr('src').replace('yes', 'no');
        $(this).attr('src', offSrc);
    });
    
});