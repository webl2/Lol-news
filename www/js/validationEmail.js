(function()
{
	var formulaire = document.getElementById('formulaire');
	var email = document.getElementById('email');
	var nomUtilisateur = document.getElementsByName('nomUtilisateur');
	var prenom = document.getElementsByName('prenom');
	var nom = document.getElementsByName('nom');
	var mdp = document.getElementsByName('mdp');
	var date = document.getElementsByName('dateNaissance');
	//Tableau de taille 6 contenant les icones HTML validation ok
	var valid = document.getElementsByClassName('icon-check');
	//Tableau de taille 6 contenant les icones HTML validation not ok
	var notvalid = document.getElementsByClassName('icon-cancel');
	var mailreg = new RegExp(/^[0-9a-zA-Z._-]+@[0-9a-z._-]+\.[a-z]{2,}$/);
	var ins = document.getElementsByClassName('champInscription');
	var datereg = new RegExp(/^\d{2}[./-]\d{2}[./-]\d{4}$/);
	
	

	//Validation champ Date
	ins[2].addEventListener('input', function()
	{
		if(datereg.test(date[0].value))
		{
			valid[2].style.display='initial';
			notvalid[2].style.display='none';
			date[0].style.borderColor='rgba(0, 184, 34, 0.66)';

		}
		else
		{
			valid[2].style.display='none';
			notvalid[2].style.display='initial';
			date[0].style.borderColor='rgba(230, 12, 12, 0.66)';
		}
	});
	//Validation champ Email	
	ins[5].addEventListener('input', function()
	{
		if(mailreg.test(email.value))
		{
			valid[5].style.display='initial';
			notvalid[5].style.display='none';
			email.style.borderColor='rgba(0, 184, 34, 0.66)';

		}
		else
		{
			valid[5].style.display='none';
			notvalid[5].style.display='initial';
			email.style.borderColor='rgba(230, 12, 12, 0.66)';
		}
	});

	//Validation champ nom utilisateur
	ins[3].addEventListener('input', function()
	{
		if(nomUtilisateur[0].value.length >= 6)
		{
			valid[3].style.display='initial';
			notvalid[3].style.display='none';
			nomUtilisateur[0].style.borderColor='rgba(0, 184, 34, 0.66)';
		}
		else
		{
			valid[3].style.display='none';
			notvalid[3].style.display='initial';
			nomUtilisateur[0].style.borderColor='rgba(230, 12, 12, 0.66)';
		}
	});
	//Validation champ Prenom
	ins[0].addEventListener('input', function()
	{
		if(prenom[0].value)
		{
			valid[0].style.display='initial';
			notvalid[0].style.display='none';
			prenom[0].style.borderColor='rgba(0, 184, 34, 0.66)';

		}
		else
		{
			valid[0].style.display='none';
			notvalid[0].style.display='initial';
			prenom[0].style.borderColor='rgba(230, 12, 12, 0.66)';
		}
	});
	//Validation champ Nom
	ins[1].addEventListener('input', function()
	{
		if(nom[0].value)
		{
			valid[1].style.display='initial';
			notvalid[1].style.display='none';
			nom[0].style.borderColor='rgba(0, 184, 34, 0.66)';

		}
		else
		{
			valid[1].style.display='none';
			notvalid[1].style.display='initial';
			nom[0].style.borderColor='rgba(230, 12, 12, 0.66)';
		}
	});
	//Validation champ Mot de passe
	ins[4].addEventListener('input', function()
	{
		alert(mdpreg.test(mdp[0].value));
		if(mdp[0].value.length >=8)
		{
			valid[4].style.display='initial';
			notvalid[4].style.display='none';
			mdp[0].style.borderColor='rgba(0, 184, 34, 0.66)';

		}
		else
		{
			valid[4].style.display='none';
			notvalid[4].style.display='initial';
			mdp[0].style.borderColor='rgba(230, 12, 12, 0.66)';
		}
	});

}());