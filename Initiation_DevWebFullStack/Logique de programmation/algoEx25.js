/*
[Exercice 25]

    Écrire un algorithme qui demande de saisir 6 entiers
    et les stocke dans un tableau, puis affiche le contenu de ce tableau
    une fois qu’il est rempli et sa somme.

VARIABLE tab : TABLEAU DE ENTIER[6]
         index, indexMax, somme : ENTIER 

DEBUT
    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        AFFICHER ('Valeur du nombre ' + (index + 1) + ' : ')
        SAISIR (tab[index])
    FIN_PR

    somme <- 0
    POUR index DE indexMax A 0 PAR -1 FAIRE  
        somme <- somme + tab[index]
    FIN_PR

    AFFICHER ('La somme du tableau vaut : ' + somme)
    AFFICHER ('Les valeurs sont : ')

    POUR index DE 0 A indexMax FAIRE
        AFFICHER (tab[index])
    FIN_PR
    
FIN
*/

// Verification sur JavaScript :

let tab = Array(6);
let somme = 0;

for (let index = 0; index < tab.length; index++) {
    tab[index] = Number(prompt(`Valeur du nombre `+(index+1)+` :`));
}

for (let index = 0; index < tab.length; index++) {
    somme = somme + tab[index];
}

alert(`La somme du tableau vaut : `+somme);
alert(`Les valeurs sont : `);

for (let index = 0; index < tab.length; index++) {
    alert(`valeur ${index+1} vaut ${tab[index]}`);
}
