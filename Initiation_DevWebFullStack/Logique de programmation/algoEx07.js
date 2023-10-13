/*
[Exercice 7 - Bonus]

    Réalisez un algorithme convertisseur de secondes.
    Ce dernier reçoit un nombre de secondes et détermine le nombre de jours,
    heures, minutes et secondes auquel il correspond.

    Exemple :
    4561 secondes correspondent à 0 jour 1 heure 16 minutes et 1 seconde.

    Petit rappel !
    --> 1 jour vaut 86 400 secondes.
    --> 1 heure vaut 3600 secondes.
    --> 1 minute vaut 60 secondes.
    
VARIABLE calcul, jour, heure, minute, seconde : ENTIER

DEBUT

    AFFICHER ("Saisissiez les secondes que vous voulez calculer :")
    SAISIR ("calcul")

    jour <-
    heure <-
    minute <-
    seconde <-

FIN
*/

// Verification sur JavaScript :

let saisi = Number(prompt(`Saisissiez les secondes que vous voulez calculer :`));
let jour = 0;
let heure = 0;
let minute = 0;
let seconde = 0;

let calcul = saisi;
let saute = false;

while (calcul > 86400 || saute) { // calcul jour
    calcul = calcul - 86400;
    if (jour <= 360) {
        jour++;
    } else {
        saute = true;
    }
}
saute = false;

while (calcul > 3600 || saute) { // calcul heure
    calcul = calcul - 3600;
    if (heure <= 24) {
        heure++;
    } else {
        saute = true;
    }
}
saute = false;

while (calcul > 60 || saute) { // calcul minute
    calcul = calcul - 60;
    if (minute <= 60) {
        minute++;
    } else {
        saute = true;
    }
}
saute = false;

seconde = calcul; // le reste des secondes

alert(`${saisi} secondes correspondent à :\n${jour} jour,\n${heure} heure,\n${minute} minute,\n${seconde} seconde.`);




