/*
[Exercice 28]

    Ecrivez un algorithme qui trouve qui est le nombre le plus grand
    dans un tableau de 5 données (1, 4, 3, 5, 2).


VARIABLE tab : TABLEAU DE ENTIER [5]
         index, indexMax, examinerNombre : ENTIER

DEBUT

    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        tab[index] <- Random(100) // de 1 à 99
    FIN_POUR

    examinerNombre <- tab[0]

    POUR index DE 0 A indexMax FAIRE
        SI examinerNombre < tab[index] FAIRE
            examinerNombre <- tab[index]
        FIN_SI
    FIN_POUR

    AFFICHER ("Le nombre le plus grand dans le tableau est "+examinerNombre)
  
FIN
*/

// Verification sur JavaScript :

let tab = [1,4,3,5,2];
let examinerNombre = tab[0];

for (let index = 0; index < tab.length; index++) {
    if (examinerNombre < tab[index]) {
        examinerNombre = tab[index];
    }
}

alert(`Le nombre le plus grand dans le tableau est ${examinerNombre}`);
