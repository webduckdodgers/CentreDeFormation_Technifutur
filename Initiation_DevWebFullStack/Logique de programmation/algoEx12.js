/*
[Exercice 12 : Distributeur de boissons]

    Réalisez l’algorithme d’un distributeur de boissons.
    Ce dernier propose plusieurs boissons et l’utilisateur
    choisit celle qu’il désire en entrant le numéro correspondant.
    N'oubliez pas de vérifier s’il y a encore des boissons en stock.


VARIABLE choix, stockCoca, stockEau : ENTIER

DEBUT

    stockCoca <- 0
    stockEau <- 1

    AFFICHER ("Choisissez votre boisson : 1 = coca, 2 = eau")

    SELONQUE choix VAUT
        1 : SI (stockCoca > 0) ALORS
                AFFICHER ("Voici votre Coca");
            SINON
                AFFICHER ("Il n'y a plus de Coca");
            FIN_SI

        2 : SI (stockEau > 0) ALORS
                AFFICHER ("Voici votre Eau");
            SINON
                AFFICHER ("Il n'y a plus d'Eau");
            FIN_SI

        SINON : AFFICHER ("Choix inconnu");
    FIN_SELONQUE

FIN
*/

// Verification sur JavaScript :

let message = document.body;
let stockCoca = 0;
let stockEau = 1;
let choix = prompt("Choisissez votre boisson : 1 = coca, 2 = eau");

switch (choix) {
    case "1":
        if (stockCoca > 0) {
            message.innerHTML += `Voici votre Coca.`;
        } else {
            message.innerHTML += `Il n'y a plus de Coca.`;
        }
        break;

    case "2":
        if (stockEau > 0) {
            messageinnerHTML += `Voici votre Eau.`;
        } else {
            message.innerHTML += `Il n'y a plus d'Eau.`;
        }
        break;

    default:
        message.innerHTML += `Choix inconnu !`;
        break;
}