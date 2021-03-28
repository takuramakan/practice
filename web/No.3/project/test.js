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
        var name = $('li[name="notAnimeBlack"]').attr('name', 'doAnimeBlack');;
        var name = $('li[name="notAnimeWhite"]').attr('name', 'doAnimeWhite');;
    });

    var blackEl = document.getElementById("topBlack");
    blackEl.addEventListener('animationend',function() {
        var name = $('li[name="notAnimeRed"]').attr('name', 'doAnimeRed');;
        var name = $('li[name="notAnimeYerrow"]').attr('name', 'doAnimeYerrow');;
    });

    $("#yajirusi").click(function() {
        $("#hanbagamenuContainer").hide();
        $("#top").attr('class','shrink');
        $("#top").on('transitionend webkitTransitionEnd',function(){
            // CSSのtransitionプロパティで設定したものが終了した時に実行する内容
            $("#topImageContainer").attr('class','pageLeft');;
        });
            //$("#topImageContainer").attr('class','pageLeft');;
    });

    // transitionプロパティの場合
    $("#top").on('transitionend webkitTransitionEnd',function(){
        // CSSのtransitionプロパティで設定したものが終了した時に実行する内容
        //$("#topImageContainer").attr('class','pageLeft');;
    });
});
$(function() {
    //マウスダウンの位置
    var pos1;
    var pos2;
    //要素位置の修正値
    var posX1;
    var posY1;
 
    //要素内でマウスがあった場合
    $("#hanbaga").mouseover(function(evt1) {
  
            //要素の位置取得
            pos1 = $("#hanbaga").position();
            //要素位置を取得して修正値を計算
            posX1 = evt1.clientX - pos1.left;
            posY1 = evt1.clientY - pos1.top;
   
    });

    //ドキュメント上でマウスポインタが動いた場合
    $("#hanbagaContainer").mousemove(function(evt2) {
        //ドラッグ中の場合
            //要素位置をCSSで設定
            $("#hanbaga").css("left",(evt2.clientX - posX1));
            $("#hanbaga").css("top",(evt2.clientY - posY1));
    });
/*
    //ドキュメント上でマウスポインタが離れた場合
    $("#hanbagaContainer").mouseout(function() {
        //ドラッグ中の場合
            //要素位置をCSSで設定
            var leftper = "20%";
            var rightper = "60%";
            $("#hanbaga").css("left",leftper);
            $("#hanbaga").css("top",rightper);
    });
*/
    var clickFlg = false;
    $("#hanbaga").click(function() {
        var leftper = "0%";
        if (clickFlg) {
            leftper = "100%";
            clickFlg = false;
        } else {
            leftper = "70%";
            clickFlg = true;
        }
        $("#hanbagamenuContainer").css("left",leftper);
    })
});