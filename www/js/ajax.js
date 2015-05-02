(function(){
	var form = document.getElementById('form_connection');

	form.addEventListener("submit", function(e) {
	e.preventDefault();
    var xhr;
		try
		{
			xhr = new ActiveXOject('Msxml2.XMLHTTP');
		}
		catch (e)
		{
			try
			{
				xhr = new ActiveXOject('Microsoft.XMLHTTP');
			}
			catch (e2)
			{
				try
				{
					xhr = new XMLHttpRequest();
				}
				catch (e3)
				{
					xhr = false;
				}
			}
		}

		xhr.onreadystatechange = function()
		{
			if(xhr.readyState == 4)
			{
				if(xhr.status == 200)
				{
					document.getElementById("reponse").innerHTML=xhr.responseText;
				}
				else
					document.getElementById("reponse").innerHTML=xhr.responseText;
			}
		};

		xhr.open("POST", "../htbin/login.py", true);

		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send("username=" + form.identifiant.value + "&userpwd=" + form.motdepasse.value);
		

		

	}, false);

})();