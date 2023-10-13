/*
[Exercice : 13 - Note]

    Réaliser l’algorithme d’une calculatrice basique.
    L’utilisateur est invité à saisir un nombre, un opérateur, et un deuxième nombre.
    La calculatrice affiche ensuite le résultat.
    Attetion ! Gére la division par 0.

VARIABLE nb1, nb2 : ENTIER
         operateur : REEL

DEBUT

    AFFICHER ("Entrez votre 1er nombre :")
    SAISIR ("nb1")
    AFFICHER ("Entrez votre 2eme nombre :")
    SAISIR ("nb2")
    AFFICHER ("Entrez l'operateur desirez :");
    SAISIR ("operateur")

    SELONQUE operateur VAUT
        "+" : AFFICHER (nb1+operateur+nb2+" = "+(nb1+nb2))
        "-" : AFFICHER (nb1+operateur+nb2+" = "+(nb1-nb2))
        "*" : AFFICHER (nb1+"x"+nb2+" = "+(nb1*nb2))
        ":" : SI (nb2 == 0) ALORS
                AFFICHER ("Erreur ! Vous pouvez pas diviser par 0")
              SINON
                AFFICHER (nb1+operateur+nb2+" = "+(nb1/nb2))
              FIN_SI

        SINON : AFFICHER ("Erreur ! Vous avez mal choisie l'operateur")
    FIN_Q

FIN
*/

// Verification sur JavaScript :

let message = document.body;
let nb1 = Number(prompt("Entrez le 1ere nombre :"));
let nb2 = Number(prompt("Entrez le 2eme nombre :"));
let operateur = prompt("Entre l'opérateur :");

switch (operateur) {
    case "+":
        message.innerHTML += nb1+operateur+nb2+" = "+(nb1+nb2);
        break;

    case "-":
        message.innerHTML += nb1+operateur+nb2+" = "+(nb1-nb2);
        break;

    case "*":
        message.innerHTML += nb1+"x"+nb2+" = "+(nb1*nb2);
        break;

    case "/":
        if (nb2 == 0) {
        message.innerHTML += "Erreur ! Vous pouvez pas diviser par 0";            
        } else {
        message.innerHTML += nb1+operateur+nb2+" = "+(nb1/nb2);
        }
        break;

    default:
        message.innerHTML += "Erreur ! Vous avez mal choisie l'operateur";
        break;
}



