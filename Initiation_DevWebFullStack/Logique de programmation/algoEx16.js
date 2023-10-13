/*
[Exercice 16]

    À l’aide d’une boucle, affichez la table de multiplication par 2.

VARIABLE i, multiplicateur : ENTIER

DEBUT

    multiplicateur <- 2
    i <- 0

    TANTQUE (i <= 10) FAIRE
        AFFICHER (multiplicateur+" x "+i+" = "+(multiplicateur*i))
        i <- i + 1
    FINT_Q

FIN
*/

// Verification sur JavaScript :

let message = document.body;
let multiplicateur = 2;
let i = 0;

while (i <= 10) {
    message.innerHTML += multiplicateur+" x "+i+" = "+(multiplicateur*i)+"<br>";
    i++;
}