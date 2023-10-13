/*
    Page 103 / 234
    
    Utilisez l’objet Date et des structures conditionnelles,
    écrivez un programme qui affiche le jour de la semaine.

    Exemple : « Bonjour, nous sommes lundi! »
*/

const date = new Date();

let jour = date.getDate();
let tabSemaine = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
let semaine = tabSemaine[date.getDay()];
let tabMois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","decembre"];
let mois = tabMois[date.getMonth()];
let annee = date.getFullYear();

alert(`Bonjour, nous sommes ${semaine} ${jour} ${mois} ${annee} !`)