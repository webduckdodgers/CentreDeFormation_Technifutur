/*
[Exercice 24 - Bonus]

    Améliorez le "c'est plus, c'est moins, c'est gagné"
    pour qu'il tourne en boucle tant que le justePrix n'a pas été trouvé.
    L'ordinateur choisit un nombre aléatoirement entre 1 et 100.
    L'utilisateur est invité à entrer un nombre et
    l'algorithme nous répond "c'est plus" ou "c'est moins".
    Lorsqu'on a trouvé le bon nombre,
    l'algorithme affiche le nombre de tentatives effectuées pour trouver le résultat.

VARIABLE nombre, tentative, justePrix : ENTIER 
         cesser : BOOLEEN

DEBUT

AFFICHER ("BIENVENUE AU JEU JUSTE PRIX !")
AFFICHER ("Trouve le juste prix entre 1 à 100 avec le moins de tentative possible.
         \nSi à tout moment vous dessirez abondonner la parti entre le nombre 0.`")

proposition <- 0
cesser <- false
justePrix <- Random(100)


TANTQUE (justePrix != proposition ET !cesser) FAIRE
    AFFICHER ("Entre un nombre entre 1 à 100")
    SAISIR ("proposition")

    SI (proposition == 0) ALORS
        cesser <- true
        AFFICHER ("Vous avez abondonner. \nNombre de tentative : "+tentative)

        SINON_SI (proposition > justePrix) ALORS
            tentative <- tentative + 1
            AFFICHER ("C'est moins !")
        FIN_SINON_SI
    
        SINON_SI (proposition < justePri)x ALORS
            tentative <- tentative + 1
            AFFICHER ("C'est plus !")
        FIN_SINON_SIN
    FIN_SI
FIN_TQ

SI (proposition == justePrix) ALORS
    AFFICHER ("Super ! Vous avez gagné. \nNombre de tentative : "+tentative)
FIN_SI
    
FIN
*/

// Verification sur JavaScript :

alert(`BIENVENUE AU JEU JUSTE PRIX !`);
alert(`Trouve le juste prix entre 1 à 100 avec le moins de tentative possible.
     \nSi à tout moment vous dessirez abondonner la parti entre le nombre 0.`);

let proposition = 0;
let tentative = 0;
let cesser = false;
let essai = "";

const justePrix = Math.floor(Math.random() * 100 - 1 + 2);
//alert(`Le juste prix est ${justePrix}`);

while (justePrix != proposition && !cesser) {
    proposition = prompt(`Entre un nombre entre 1 à 100 \nEntre precedante : ${essai}`);

    if (proposition == 0) {
        cesser = true;
        alert(`Vous avez abondonner.. 😕 \nNombre de tentative : ${tentative}`);
    } else if (proposition > justePrix) {
        tentative++;
        alert (`C'est moins ! ⬇️`);
    } else if (proposition < justePrix) {
        tentative++;
        alert (`C'est plus ! ⬆️`);
    }

    essai += ` [ ${String(proposition)} ] `;
}

if (proposition == justePrix) {
    alert(`Super ! Vous avez gagné 🥳 \nNombre de tentative : ${tentative}`);
}