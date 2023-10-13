/*
[Exercice Fonction : 2]

    Réalisez une fonction de recherche dans un tableau.
    Cette fonction va recevoir un tableau, la taille du tableau,
    et la valeur recherchée en paramètres et renvoyer l'indice
    de l'élément dans le tableau.
    Si l'élément ne s'y trouve pas, la fonction renvoie -1.


VARIABLE tab : TABLEAU DE ENTIER [5]
         index, indexMax, resultat : ENTIER

DEBUT

FONCTION rechercher_nombre_tableau(chercherNombre: ENTIER, tab: TABLEAU DE ENTIER, indexMax: ENTIER) : CHAINE
    VARIABLE reponse : BOOLEEN

    reponse <- faux

    POUR index DE 0 A indexMax FAIRE
        SI chercherNombre === tab[index] ALORS
            reponse <- vrai
        FIN_SI
    FIN_POUR

    SI reponse ALORS
        reponse <- "bien dans le tableau."
    SINON
        reponse <- "introuvable !"
    FIN_SI

    RENVOIE(reponse)

indexMax <- size(tab) - 1

POUR index DE 0 A indexMax FAIRE
    tab[index] <- Random(10)
FIN_POUR

AFFICHER ("Qu'elle nombre desirez-vous trouver dans le tableau ?")
SAISIR (chercherNombre)

resultat <- rechercher_nombre_tableau(chercherNombre, tab)

AFFICHER ("Le nombre que vous chercher est "+resultat)

FIN
*/

// Verification sur JavaScript :

function rechercher_nombre_tableau(chercherNombre, tab) {
    let reponse = false;
    
    for (let index = 0; index < tab.length; index++) {
        if (chercherNombre === tab[index]) {
            reponse = true;
        }
    }

    if (reponse) {
        reponse = "bien dans le tableau."
    } else {
        reponse = "introuvable !"
    }

    return(reponse);
}

let tab = Array(5);

for (let index = 0; index < tab.length; index++) {
    let random = Math.floor(Math.random()*10);
    tab[index] = random;
}

let chercherNombre = Number(prompt(`Qu'elle nombre desirez-vous trouver dans le tableau ?`));
let resultat = rechercher_nombre_tableau(chercherNombre, tab);

alert(`Le nombre que vous chercher est ${resultat}`);