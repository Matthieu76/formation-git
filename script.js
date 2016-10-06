function myMove() {

    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var interval = setInterval(frame, 10);

    function frame() {
        if (pos == 350) {
        clearInterval(interval);
        }
        else
        {
        pos++;
        elem.style.top = pos + 'px';
        }
    }
}