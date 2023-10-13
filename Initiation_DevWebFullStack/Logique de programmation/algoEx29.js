/*
[Exercice 29]

    Ecrivez un algorithme qui trouve qui est le nombre le plus grand
    dans un tableau de 5 données (1, 4, 3, 5, 2).


VARIABLE tab : TABLEAU DE ENTIER [5]
         index, indexMax, plusGrand, plusPetit : ENTIER

DEBUT

    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        tab[index] <- Random(100) // de 1 à 99
    FIN_POUR

    plusGrand <- tab[0]
    plusPetit <- tab[0]

    POUR index DE 0 A indexMax FAIRE
        SI tab[index] > plusGrand FAIRE
            plusGrand <- tab[index]
        FIN_SI

        SINON_SI tab[index] < plusPetit FAIRE
            plusPetit <- tab[index]
        FIN_SINON_SI
    FIN_POUR

    AFFICHER ("Le nombre le plus grand dans le tableau est "+plusGrand)
    AFFICHER ("Le nombre le plus petit dans le tableau est "+plusPetit)
  
FIN
*/

// Verification sur JavaScript :

let tab = [1,4,3,5,2];
let plusGrand = tab[0];
let plusPetit = tab[0];

for (let index = 0; index < tab.length; index++) {
    if (tab[index] > plusGrand) {
        plusGrand = tab[index];
    }
    
    else if (tab[index] < plusGrand) {
        plusPetit = tab[index];
    }
}

alert(`Le nombre le plus grand dans le tableau est ${plusGrand}`);
alert(`Le nombre le plus petit dans le tableau est ${plusPetit}`);
