(function()
{
	var formulaire = document.getElementById('formulaire');
	var email = document.getElementById('email');
	var element = document.getElementById('icon-checkID');
	
	element.style.display = 'initial';

	formulaire.addEventListener('input', function()
	{
		var mail = new RegExp(/^[0-9a-zA-Z._-]+@[0-9a-z._-]+\.[a-z]{2,}$/);
		var test = mail.test(email.value);
	
		if(test)
		{
			element.style.display = 'initial';
		}
	});
}());