(function()
{
	var formulaire = document.getElementById('formulaire');
	var email = document.getElementById('email');

	formulaire.addEventListener('input', function()
	{
		var mail = new RegExp(/^[0-9a-zA-Z._-]+@[0-9a-z._-]+\.[a-z]{2,}$/);
		var test = mail.test(email.value);
	
		if(test)
		{
			var element = document.getElementsByClassName(icon-check);
			element.style.display = initial;
		}
	});
}());