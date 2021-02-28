document.addEventListener("DOMContentLoaded", function(){
    //var el = document.getElementById('topImageOrange');
    var el = document.getElementsByClassName('animeTest');


    el[0].addEventListener('animationend',function() {
        el[0].remove();
        //alert('test');
    });
});