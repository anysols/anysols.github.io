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
	
	
	
	
	$('#contact-form-send').on('click', function(){
		$('#contact-form-error').addClass('hidden-xs-up');
		$('#contact-form-success').addClass('hidden-xs-up');
		
		var name = $('#contact-form-name').val();
		var regex = /^[a-zA-Z ]{2,30}$/;
		
		var sender = $('#contact-form-email').val();
		function isEmail( value ) {
		   if(typeof value == 'string'){
				return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
			}else{
				return false;
			}
		}
		
		var message = $('#contact-form-message').val();
		
		var errorMessage;
		if(!name){
			errorMessage = "Name cannot be empty.";
		} else if(!regex.test(name)){
			errorMessage = "Please enter valid name";
		} else if(!sender){
			errorMessage = "Email cannot be empty.";
		} else if(!isEmail(sender)){
			errorMessage = "Please enter valid email";
		} else if(!message){
			errorMessage = "Message cannot be empty.";
		}
		
		if(errorMessage){
			$('#contact-form-error').removeClass('hidden-xs-up');
			$('#contact-form-error-message').text(errorMessage);
		} else {
			
			
			$.ajax({
				  type: 'POST',
				  url: "http://anysols-india.appspot.com",
				  data: {subject: 'Contact Form', sender: sender, name: name, message: message,client:'00991af838dc88386' + 'd5dfdaed62a47cc'},
				  dataType: "text",
				  success: function(resultData) { 
						$('#contact-form-name').val('');
						$('#contact-form-email').val('');
						$('#contact-form-message').val('');
						$('#contact-form-success').removeClass('hidden-xs-up');
				  },
				  error: function(){
						$('#contact-form-error').removeClass('hidden-xs-up');
						$('#contact-form-error-message').text('Something went wrong, please try after sometime.');
				  }
			});
		}
		
	});
});