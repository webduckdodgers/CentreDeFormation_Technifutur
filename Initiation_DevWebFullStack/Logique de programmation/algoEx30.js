/*
[Exercice 30]

    Ecrivez un algorithme qui calcule
    la somme des valeurs du tableau.

VARIABLE tab : TABLEAU DE ENTIER [5]
         index, indexMax, somme : ENTIER

DEBUT

    indexMax = size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        tab[index] <= Random(10) // de 1 à 9
    FIN_POUR

    somme <= 0

    POUR index DE 0 A indexMax FAIRE
        somme <= somme + tab[index]
    FIN_POUR

    AFFICHER ("La somme du tableau est "+somme)
  
FIN
*/

// Verification sur JavaScript :

let tab = Array(5)
let somme = 0;

for (let index = 0; index < tab.length; index++) {
    tab[index] = Math.floor(Math.random() * (10 - 0 + 1)); // Entre 0 à 10
}

for (let index = 0; index < tab.length; index++) {
    somme = somme + tab[index];
}

alert(`La somme du tableau est ${somme}`);