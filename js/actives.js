$(function() {
    $('input:checkbox').on('change', function() {
        $(this).parent("li").toggleClass('stroked');
    });
});
