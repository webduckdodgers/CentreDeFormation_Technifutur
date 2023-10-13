/*
[Exercice 18]

    À l’aide de deux boucles, affichez les tables de multiplication de 1 à 9.


VARIABLE table, multiplicateur : ENTIER

DEBUT

table <- 1

TANTQUE (table <= 9) FAIRE
    AFFICHAGE ("Table de [ "+table+" ] ")
    multiplicateur <- 1;

    TANTQUE (multiplicateur <= 10) FAIRE
        AFFICHAGE (table+" x "+multiplicateur+" = "+(table*multiplicateur));
        multiplicateur <- multiplicateur + 1;
    FIN_TQ
    table <- table + 1;
FIN_TQ

FIN
*/

// Verification sur JavaScript :

const affichage = document.body;

let table = 1;
while (table <= 9) {
    affichage.innerHTML += "<br><strong>Table de multiplication de "+table+" </strong><br>";
    let multiplicateur = 1;

    while (multiplicateur <= 10) {
        affichage.innerHTML += table+" x "+multiplicateur+" = "+(table*multiplicateur)+"<br>";
        multiplicateur++;
    }
    table++;
}