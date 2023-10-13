/*
[Exercice 17]

    Reprenez l’algorithme du lanceur de balles de tennis et faites en sorte
    qu’il lance une balle tant que le stock n’est pas vide.
    
    Attention ! Il y a donc 2 variables (stockBalles et pret).

    À savoir !
    Dans une boucle le code est répété tant que la condition spécifiée soit vrai.

VARIABLE stockBalles :ENTIER
         pret : BOOLEEN

DEBUT

    stoackBalles <- 3
    pret <- true

    TANTQUE (stockBalles < 0 ET pret) FAIRE

        AFFICHER("Etes-vous prêt ?")
        SAISIE(pret)
        
        SI (pret) ALORS
            AFFICHER ("Balle !")
            stockBalles <- stockBalles - 1
        FIN_SI
    FIN_TQ

    SI (stockBalles == 0) ALORS
        AFFICHER ("Stock de balle vide")
    FIN_SI

FIN
*/

// Verification sur JavaScript :

let stockBalles = 3;
let pret = true;

while (stockBalles > 0 && pret) { // true

    pret = confirm(`Nombre de balle : ${stockBalles} \nEtes-vous prêt ?`);

    if (pret) {
        alert(`Lancer la balle !`);
        stockBalles--;
    } else {
        alert(`Ne pas lancer la balle !`);
    }

    if (stockBalles == 0) {
        alert(`Veillez remplir votre stock à balle.`);
    }
}

