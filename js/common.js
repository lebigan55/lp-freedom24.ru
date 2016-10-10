

$(document).ready(function () {

	$(".input-phone").mask("+_(___)___-__-__");  

    $("form .btn").click(function() {
		var text = $(this).attr("data-value");
		$(".hidden-input").val(text);
	});


    $("#your-circle").circliful({
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 15,
        percent: 75
    });
});

$('a[href^="#main-header"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false; 
   }); 
	



