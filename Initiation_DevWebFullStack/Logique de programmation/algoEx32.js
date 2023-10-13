/*
[Exercice 32]

    Ecrivez un algorithme qui contient un tableau
    avec les jours de la semaine et qui les affichent
    dans l'ordre chronologique (lundi, mardi, ...)

    
VARIABLE tab : TABLEAU DE CHAÎNE ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
         index, indexMax : ENTIER

DEBUT

    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        AFFICHER (tab[index])
    FIN_POUR
  
FIN
*/

// Verification sur JavaScript :

let tab = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
let message = document.body;

for (let index = 0; index < tab.length; index++) {
    message.innerHTML += `${tab[index]}<br>`;
}