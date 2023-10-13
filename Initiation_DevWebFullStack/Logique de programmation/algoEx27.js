/*
[Exercice 27]

    Initialiser un tableau de 10 entiers avec les valeurs 2, 4, 8, 16, 32, 64, 
    128, 256, 512, 1024 à l’aide d’une boucle. Ensuite, à l’aide d’une boucle afficher 
    la valeur de chaque cellule du tableau avec l’opération afficher().


VARIABLE tab : TABLEAU DE ENTIER [10]
         index, indexMax, nombre : ENTIER

DEBUT

    nombre <- 1;
    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        nombre <- nombre*2
        tab[index] <- nombre
    FIN_POUR

    POUR index DE 0 A indexMax FAIRE
        AFFICHER(tab[index]);
    FIN_POUR
  
FIN
*/

// Verification sur JavaScript :

let tab = Array(10);
let nombre = 1;

for (let index = 0; index < tab.length; index++) {
    nombre = nombre * 2;
    tab[index] = nombre; 
}

for (let index = 0; index < tab.length; index++) {
    document.body.innerHTML += `${tab[index]}<br>`; // affichage.
}
