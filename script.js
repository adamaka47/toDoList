$(document).ready(function() {

	var lists = $('#toDoList'),
		  textInput = $('#toDoInput'),
		  placeholderText = $('#placeholderText'),
		  buttonAdd = $('#toDoAdd');

		  $(buttonAdd).on('click', function() {
		  	if (!textInput.val()) {
		  		return false;
		  	} else {
		  		lists.append('<li>' + textInput.val() +  '<button class="remove">x</button></li>');
		  		textInput.val('');
		  		checkOut();
		  		$('.remove').on('click', function() {
		  			var mom = $(this).parent();
		  			mom.remove();
		  			checkOut();
		  		});
		  	}
		  });

		  function checkOut() {
		  	if (!lists.children().length) {
		  		placeholderText.css('display', 'block');
		  	} else {
		  		placeholderText.css('display', 'none');

		  	}
		  }

});