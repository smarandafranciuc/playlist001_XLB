$(document).ready(function()
{
    $(".song").click(
        function()
        {
            var visualizerSource = $(this).attr("visualizer");
            $("#visualizer").attr("src", visualizerSource);

            var songName = $(this).html();
            $("#display").html(songName);
        }
    );
});
