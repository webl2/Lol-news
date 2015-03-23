<SCRIPT language="javascript">
   function ValiderMail(formulaire) {
      if (formulaire.mail.value.indexOf("@",0)<0) {alert("Adresse mail saisie invalide.\nLe formulaire ne sera pas validé.")}
      else {
         alert("Formulaire validé.\nPour valider un formulaire : formulaire.submit()");
         // Pour valider le formulaire en javascript :
         // formulaire.submit()
      }
   }
</SCRIPT>