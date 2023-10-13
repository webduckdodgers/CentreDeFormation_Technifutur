/*
[Exercice 33]

    Ecrivez un algorithme qui contient un tableau
    avec les jours de la semaine et qui les affichent
    dans l'ordre inverse (dimanche, samedi, ...).

    
VARIABLE tab : TABLEAU DE CHAÎNE ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
         index, indexMax : ENTIER

DEBUT

    indexMax <- size(tab) - 1

    POUR index DE indexMax A 0 -1 FAIRE
        AFFICHER (tab[index])
    FIN_POUR
  
FIN
*/

// Verification sur JavaScript :

let tab = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
let message = document.body;

for (let index = tab.length - 1; index >= 0; index--) {
    message.innerHTML += `${tab[index]}<br>`;
}