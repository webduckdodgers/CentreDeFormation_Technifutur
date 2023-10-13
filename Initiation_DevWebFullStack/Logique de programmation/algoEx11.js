/*
[Exercice 11 : Lanceur de balles de tennis]

    Réalisez l’algorithme d’un lanceur de balles de tennis.
    Ce lanceur possède deux états (variables) :
        – pret : Permet de savoir si le tennisman est prêt.
                 (Il ne faut pas lancer de balles dans le cas contraire)
        – panierVide : Permet de savoir s’il y a encore des balles disponibles.
    
        Le lanceur de balle possède l’opération « lancerBalle »
        qui, vous l’aurez compris, permet de lancer une balle.


VARIABLE pret, panierVide : BOOLEENS

DEBUT

    AFFICHER ("Etes-vous prêt ?")
    SAISIR (pret);
    
    SI (pret == false) ALORS
        AFFICHER("Ne pas lancer la balle !");

    SINON_SI (pret == true) ALORS
        AFFICHER ("Le panier est-il vide ?")
        SAISIR (panierVide);

        SI (panierVide == true) ALORS
            AFFICHER ("Ne pas lancer, car le panier est vide.")
    
        SINON_SI (pret == true ET panierVide == false) ALORS
            AFFICHER ("Lancer la balle !");
    FIN_SI

FIN
*/

// Verification sur JavaScript :

let message = document.body;
let pret = confirm("Etes-vous prêt ?");

if (pret == false) {
    message.innerHTML += `Ne pas lancer la balle !`;
}
else if (pret == true) {
    let panierVide = confirm("Le panier est-il vide ?")

    if (panierVide == false) {
        message.innerHTML += `Ne pas lancer, car le panier est rempli.`;
    }

    else if (pret == true && panierVide == true) {
        message.innerHTML += `Lancer la balle !`;
    }
}
