
let animated = false;
function secondSlide () {
    if (animated == false) {
            animated = true;
        document.getElementById('line').style.stroke = "#fc0";
        anime({
            targets: '#line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            complete: function () {
                document.getElementById('circle').style.stroke = "#fc0";
                anime({
                    targets: '#circle',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 1500
                });
            }
        });
    }
}