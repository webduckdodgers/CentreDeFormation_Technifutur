/*
[Exercice 19]

    Un algorithme reçoit deux nombres de l’utilisateur (justePrix et proposition);
    - Il répond : « c’est plus » lorsque proposition est plus petit que justePrix.
    - Et inversement, il répond : « c’est moins » lorsque proposition est
        plus grand que justePrix.
    - Si justePrix est égal à proposition, il répond : « C’est gagné ».

    Petit bonus en plus !
    - Ajoute un compteur avec 3 essai.


VARIABLE justePrix, proposition, compteur : ENTIER

DEBUT

justePrix <- Random(10)
compteur <- 3

TANTQUE (compteur > 0 ET proposition != justePrix) FAIRE

    AFFICHER ("Trouvez le juste prix entre 0 et 10 ?")
    SAISIR (proposition)

    SI (proposition > justePrix) ALORS
        AFFICHER ("Le prix est plus petit.")
    SINON_SI (proposition < justePrix) ALORS
            AFFICHER ("Le prix est plus grand.")
    FIN_SINON_SI
    FIN_SI

    SI (proposition != justePrix) ALORS
        compteur <- compteur - 1
        SI (compteur == 0) ALORS
            AFFICHER ("Tu as perdu !")
        FIN_SI
    FIN_SI
FIN_TQ

SI (proposition == justePrix) ALORS
    AFFICHER ("Bingo ! Tu as trouve.")
FIN_SI

FIN
*/

// Verification sur JavaScript :

const justePrix = Math.floor(Math.random() * (10 - 0 + 1)); // Entre 0 à 10
// alert (`Le juste prix vaut : `+justePrix);

let compteur = 3; // nombre de vie
let proposition;
let essai = "";

alert(`LE JEU LE JUSTE PRIX`);

while (compteur > 0 && proposition != justePrix) { // true

    proposition = Number(prompt(`Trouvez le juste prix entre 0 et 9 \nNombre d'essai : ${compteur} \nEntre precedante : ${essai}`));
    
    if (proposition > justePrix) { // superieur
        alert(`🙃 Le prix est plus petit.`);
    }
    else if (proposition < justePrix) { // inferieur
        alert(`🙂 Le prix est plus grand.`);
    }  
    
    if (proposition != justePrix) {
        compteur--;
        if (compteur == 0) {
            alert(`😕 Tu as perdu.. \nLe juste prix etait ${justePrix}`);
        }   
    }

    essai += " ["+String(proposition)+"] ";
}

if (proposition == justePrix) {
    alert(`😁 Bingo ! Tu as trouve.`);
}


