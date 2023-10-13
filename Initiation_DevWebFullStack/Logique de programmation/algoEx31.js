/*
[Exercice 31]

    Ecrivez un algorithme qui calcule
    la moyenne des valeurs du tableau.

VARIABLE tab : TABLEAU DE ENTIER [5]
         index, indexMax, somme, moyenne : ENTIER

DEBUT

    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        tab[index] <- Random(10)
    FIN_POUR

    somme <- 0

    POUR index DE 0 A indexMax FAIRE
        somme <- somme + tab[index]
    FIN_POUR

    moyenne <- somme / indexMax

    AFFICHER ("La moyenne du tableau est "+moyenne)
  
FIN
*/

// Verification sur JavaScript :

let tab = Array(5)
let somme = 0;
let moyenne = 0;

for (let index = 0; index < tab.length; index++) {
    tab[index] = Math.floor(Math.random() * (10 - 0 + 1)); // Entre 0 à 10
}

for (let index = 0; index < tab.length; index++) {
    somme = somme + tab[index];
}

moyenne = somme / tab.length;

alert(`La moyenne du tableau est ${somme}`);