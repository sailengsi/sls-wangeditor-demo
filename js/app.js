$(function() {
    var editor = new wangEditor('wang-content');
    editor.create();


    $('#wang-render-btn').click(function() {
        var html = editor.$txt.html();
        console.log(html);
        $('#wang-render-text').html(html);
    });


    $('code.hljs').each(function(i, block) {
        hljs.lineNumbersBlock(block);
    });
});