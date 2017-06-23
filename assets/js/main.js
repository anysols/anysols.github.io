var $root = $('html, body');

$('a').click(function() {
    var href = $.attr(this, 'href');
    var hash;

    if(href == '#'){
        hash = $('body');
    }else if(href.match(/^#hash-[a-zA-Z0-9-]+$/g)){
        hash = $('#'+href.substring(1));
    }else
        return true;

    $root.animate({
        scrollTop: $(hash).offset().top - 60
    }, 700, function () {
        window.location.hash = href;
    });

    return false;
});

function animateLogo(elementId){
	anime({
	  targets: '#'+elementId+' polyline',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 1500,
	  delay: function(el, i) { return i * 250 }
	});
}

function loadLogo(scale, elementId, firstColor, secondColor){
	
	if($('#'+elementId).length){			
		var draw = SVG(elementId).size(55 * scale, 25 * scale);			
		var polyline = draw.polyline([[15 * scale,5 * scale], [10 * scale,0], [0,10 * scale], [20 * scale, 10 * scale], [30 * scale, 20 * scale], [15 * scale, 20 * scale]])
		polyline.fill('none').move(20 + 11 * (scale - 1), (scale * 2));
		polyline.stroke({ color: '#'+firstColor, width: 3 * scale, linecap: 'round', linejoin: 'round' })


		polyline = draw.polyline([[17 * scale,5 * scale], [0, 5 * scale], [5 * scale,0], [10 * scale,0]])
		polyline.fill('none').move(10 + (1 * (scale - 1)), (scale * 17))
		polyline.stroke({ color: '#' + secondColor, width: 2 * scale, linecap: 'round', linejoin: 'round' })

		animateLogo(elementId);
	}
}

$('.navbar-brand').on('click', function(){
	animateLogo('logo');
});

$(document).ready(function(){
    // the body of this function is in assets/js/now-ui-kit.js
	loadLogo(3, 'logo-banner', 'FFF', 'DDD');
	loadLogo(1, 'logo', 'FFF', 'DDD');
	loadLogo(1, 'logo-dark', 'FF3636', 'f85019');
    new WOW().init();
});