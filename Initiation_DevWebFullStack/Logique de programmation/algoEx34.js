/*
[Exercice 34]

    Ecrivez un algorithme qui affiche
    tous les jours de la semaine qui ont la lettre a.

    
VARIABLE tab : TABLEAU DE CHAÎNE ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
         tabLettreA : TABLEAU DE CHAÎNE []
         analyser : CHAÎNE
         mot, lettre, index : ENTIER

DEBUT

    analyser <- "a"

    POUR mot DE 0 A size(tab) - 1 FAIRE
        POUR lettre DE 0 A size(tab[mot]) - 1 FAIRE
            SI tab[mot][lettre] == analyser ALORS
                AJOUTER (tab[mot] à tabLettreA)
            FIN_SI
        FIN_POUR
    FIN_POUR

    AFFICHER ("Voici les jours de la semaine qui ont la lettre 'a' :")
    
    POUR index DE 0 A size(tabLettreA) - 1 FAIRE
        AFFICHER (tabLettreA[index])
    FIN_POUR
FIN
*/

// Verification sur JavaScript :

const tab = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
const tabLettreA = Array();
let analyser = "a";

for (let mot = 0; mot < tab.length; mot++) {
    //console.log(`boucle mot : ${tab[mot]}`);

    for (let lettre = 0; lettre < tab[mot].length; lettre++) {
        //console.log(`boucle lettre : ${tab[mot][lettre]}`);

        if (tab[mot][lettre] == analyser) {
            tabLettreA.push(tab[mot]);
            break;
        }
    }
}

let motsAvecLettreA = tabLettreA.join(", ");
alert(`Voici les jours de la semaine qui ont la lettre "a" :\n${motsAvecLettreA}`);

