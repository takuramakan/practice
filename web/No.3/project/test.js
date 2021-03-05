document.addEventListener("DOMContentLoaded", function(){
    //var el = document.getElementById('topImageOrange');
    var el = document.getElementsByClassName('firstImg');

    el[0].addEventListener('animationend',function() {
        //el[0].remove();
        var name = $('img[name="notAnimeMizuiro"]').attr('name', 'doAnimeMizuiro');;
        //alert('test');
    });

    var mizuiroEl = document.getElementById("topImageMizuiro");
    mizuiroEl.addEventListener('animationend',function() {
        var name = $('img[name="notAnimeGreen"]').attr('name', 'doAnimeGreen');;
    });

    var greenEl = document.getElementById("topImageGreen");
    greenEl.addEventListener('animationend',function() {
        var name = $('img[name="notAnimeBlack"]').attr('name', 'doAnimeBlack');;
        var name = $('img[name="notAnimeWhite"]').attr('name', 'doAnimeWhite');;
    });

    var blackEl = document.getElementById("topImageBlack");
    blackEl.addEventListener('animationend',function() {
        var name = $('img[name="notAnimeRed"]').attr('name', 'doAnimeRed');;
        var name = $('img[name="notAnimeYerrow"]').attr('name', 'doAnimeYerrow');;
    });
});