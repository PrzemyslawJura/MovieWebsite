$(document).ready(function() {

	//Walidacja nazwy
	$('#name').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 5 && name_length <= 15){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("Wprowadzono poprawną nazwę.").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Nazwa musi mieć więcej niż 4 i mniej niż 16 znaków!").removeClass("ok").addClass("blad");

		}
	});
    //Walidacja email
	$('#email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
			input.next('.komunikat').text("Wprowadzono poprawny email.").removeClass("blad").addClass("ok");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.komunikat').text("Wprowadź poprawny email!").removeClass("ok").addClass("blad");
		}
	});	
});