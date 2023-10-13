/*
[Exercice : 14 - Note]

    Ecrire un algorithme qui met l'appréciation par rapport à des notes.
    Ces notes sont comprises entre 0 et 20.

    0-10 : Insuffisant,
    11-12 : Suffrisant,
    13-15 : Bien,
    16-18 : Très Bien,
    19-20 : Excellent.

    Attention ! Gérer les erreurs.
    Exemple : -2, 25, ...


VARIABLE note : ENTIER

DEBUT

    AFFICHER ("Entrez la note de l'étudiant :")
    SAISIR ("note")

    SI (note >= 0 ET note <= 10) ALORS
        AFFICHER ("Insuffisant")

        SINON_SI (note >= 11 ET note <= 12) ALORS
            AFFICHER ("Suffisant")

        SINON_SI (note >= 13 ET note <= 15) ALORS
            AFFICHER ("Bien")

        SINON_SI (note >= 16 ET note <= 18) ALORS
            AFFICHER ("Très Bien")

        SINON_SI (note >= 19 ET note <= 20) ALORS
            AFFICHER ("Excellent")

        SINON
            AFFICHER ("Erreur ! Veillez revoir les notes")
    FIN_SI

FIN
*/

// Verification sur JavaScript :

let message = document.body;
let note = prompt("Entrez la note de l'étudiant :");

if (note >= 0 && note <= 10) {
    message.innerHTML += "Insuffisant";
}
else if (note >= 11 && note <= 12) {
    message.innerHTML += "Suffisant";
}
else if (note >= 13 && note <= 15) {
    message.innerHTML += "Bien";
}
else if (note >= 16 && note <= 18) {
    message.innerHTML += "Très Bien";
}
else if (note >= 19 && note <= 20) {
    message.innerHTML += "Excellent";
}
else {
    message.innerHTML += "Erreur ! Veillez revoir les notes.";
}