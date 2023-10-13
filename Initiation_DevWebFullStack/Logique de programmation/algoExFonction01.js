/*
[Exercice Fonction : 1]

    Réalisez une fonction calculant le carré
    d'un nombre entier donné en paramètre.

    
VARIABLE donnee, resultat : ENTIER

DEBUT

FONCTION somme_carre(donnee: ENTIER) : ENTIER
    VARIABLE somme : ENTIER

    somme <- donnee * donnee

    RENVOIE(somme)

AFFICHER ("Qu'elle est la donnée du carré ?")
SAISIR (donnee)

resultat <- somme_carre(donnee)

AFFICHER ("La somme du carre est "+resultat)

FIN
*/

// Verification sur JavaScript :

function somme_carre(donnee) {
    let somme = donnee * donnee;
    
    return(somme);
}

let donnee = Number(prompt(`Qu'elle est la donnée du carré ?`));
let resultat = somme_carre(donnee);

alert(`La somme du carre est ${resultat}`);