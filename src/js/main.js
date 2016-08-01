$(document).ready(function(){
	
    $('body').on('click', '#menu-button', function(){
            $(this).parent('#popup').toggleClass('active');
        });
});
