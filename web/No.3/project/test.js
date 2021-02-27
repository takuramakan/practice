document.addEventListener("DOMContentLoaded", function(){
    var el = document.getElementById('testtest');

    el.addEventListener('animationend',function() {
        alert('test');
    });
});