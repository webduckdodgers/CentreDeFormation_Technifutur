/*
[Exercice 4]

    Récupérez le nom et le prénom de l'utilisateur
    puis affichez le message "Bienvenue prenom nom".
    
VARIABLE nom, prenom : CHAINE

DEBUT

    nom <- "Romero"
    prenom <- "Marc"
    message <- "Bienvenue "+prenom+" "+nom

    AFFICHER(message)

FIN
*/

// Verification sur JavaScript :

let nom = "Romero";
let prenom = "Marc";
let message = `Bienvenue ${prenom} ${nom}`;

document.body.innerHTML = message;
