$(document).ready(function () {
    var path = anime.path('#motionPath path');

    var motionPath = anime({
        targets: '#motionPath .el',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        duration: 5000,
        loop: true
    });
});