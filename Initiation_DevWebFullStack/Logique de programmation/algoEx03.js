/*
[Exercice 3]

    Trouvez une méthode permettant d’inverser le contenu
    de deux variables (du type chaine).
    
VARIABLE contenuUn, contenuDeux : CHAINE

DEBUT

    contenuUn <- "coca"
    contenuDeux <- "fanta"

    AFFICHER("Avant : contenu 1 = "+contenuUn+" et contenu 2 = "+contenuDeux")

    contenuUn <- "fanta"
    contenuDeux <- "coca"

    AFFICHER("Après : contenu 1 = "+contenuUn+" et contenu 2 = "+contenuDeux")

FIN
*/

// Verification sur JavaScript :

let message = document.body; // var message permet directemnt d'envoyer le contenu sur le body de l'HTML.
let contenuUn = "coca";
let contenuDeux = "fanta";

// innerHTML permert d'écrire (afficher) le contenu directement sur une balise HTML.
// Attention ! Mettre [+=] au lieu de [=] car elle permet d'accumerler le contenu sans être ecrasser la variable (message).
message.innerHTML += "Avant : contenu 1 = "+contenuUn+" et contenu 2 = "+contenuDeux+"<br>";

    contenuUn = "fanta";
    contenuDeux = "coca";

message.innerHTML += "Après : contenu 1 = "+contenuUn+" et contenu 2 = "+contenuDeux+"<br>";
