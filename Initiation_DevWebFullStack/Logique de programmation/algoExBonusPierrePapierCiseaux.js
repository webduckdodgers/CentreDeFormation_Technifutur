/*
[Exercice Bonus : Pierre, papier, ciseaux]

    Affichez un message de bienvenue pour le joueur et expliquez les règles du jeu.

    Initialisez une variable score_joueur à 0 pour garder une trace du score du joueur,
    et une variable score_ordi à 0 pour garder une trace du score de l'ordinateur.

    Démarrez la boucle principale du jeu pour les manches :
    Répétez tant que le joueur souhaite continuer à jouer.
    Demandez au joueur de choisir entre pierre, papier ou ciseaux en entrant "P", "PA", ou "C".
    Générez un choix aléatoire pour l'ordinateur entre pierre, papier ou ciseaux.
    Comparez le choix du joueur avec celui de l'ordinateur :
    Si le joueur et l'ordinateur choisissent la même chose, c'est une égalité.
    Affichez un message de résultat et ne modifiez pas les scores.
    Si le joueur gagne (par exemple, en choisissant "P" contre "C"), incrémentez score_joueur de 1.
    Si l'ordinateur gagne (par exemple, en choisissant "C" contre "P"), incrémentez score_ordi de 1.

    Affichez les choix du joueur et de l'ordinateur, ainsi que les scores actuels.

    Demandez au joueur s'il souhaite continuer à jouer :
        S'il répond par oui, retournez à l'étape 4 pour une nouvelle manche.
        S'il répond par non, affichez un message de fin de jeu et indiquez le score final du joueur et de l'ordinateur.


VARIABLE score_joueur, score_ordi, choix_joueur, choix_ordi : ENTIER
         continuer : BOOLEEN

DEBUT

    AFFICHER ("BIENVENUE AU JEU PIERRE - PAPIER - CISEAUX")
    AFFICHER ("But du jeu :
                Gagne contre ton adverser en accumulant
                le plus de point possible.
             \nRegle du jeu :
                La pierre écrase les ciseaux et gagne.
                La feuille enveloppe la pierre et gagne.
                Les ciseaux découpent la feuille et gagnent.
                A partir de là chaque forme en bat une autre
                et perd contre une autre.")

    score_joueur <- 0
    score_ordi <- 0
    continuer <- true

    TANTQUE (continuer) FAIRE

        AFFICHER ("Tape ton choix entre : Pierre = P, Papier = PA ou Ciseaux = C")
        SAISIR (choix_joueur)

        choix_ordi <- Random(3) // 0 à 2

        SI (choix_ordi == 0) ALORS
            choix_ordi <- "P"

            SINON_SI (choix_ordi == 1) ALORS
                choix_ordi <- "PA"
            FIN_SINON_SI

            SINON_SI (choix_ordi == 2) ALORS
                choix_ordi <- "C"
            FIN_SINON_SI
        FIN_SI

        SELONQUE choix_joueur VAUT
            "P" :   SI (choix_ordi == "C") ALORS
                        AFFICHER ("Pierre gagne à Ciseaux \nTu gagnes !");
                        score_joueur <- score_joueur + 1

                        SINON_SI (choix_ordi == "P") ALORS
                            AFFICHER ("Pierre et Pierre \nÉgalité !");
                        FIN_SINON_SI

                        SINON_SI (choix_ordi == "PA") ALORS
                            AFFICHER ("Pierre perd contre Papier \nOrdi gagne !");
                            score_ordi <- score_ordi + 1
                        FIN_SINON_SI
                    FIN_SI

            "PA" :  SI (choix_ordi == "P") ALORS
                        AFFICHER ("Papier gagne à Pierre \nTu gagnes !");
                        score_joueur <- score_joueur + 1

                        SINON_SI (choix_ordi == "PA") ALORS
                            AFFICHER ("Papier et Papier \nÉgalité !");
                        FIN_SINON_SI

                        SINON_SI (choix_ordi == "C") ALORS
                            AFFICHER ("Papier perd contre Ciseaux \nOrdi gagne !");
                            score_ordi <- score_ordi + 1
                        FIN_SINON_SI
                    FIN_SI

            "C" :   SI (choix_ordi == "PA") ALORS
                        AFFICHER ("Ciseaux gagne à Papier \nTu gagnes !");
                        score_joueur <- score_joueur + 1

                        SINON_SI (choix_ordi == "C") ALORS
                            AFFICHER ("Ciseaux et Ciseaux \nÉgalité !");
                        FIN_SINON_SI

                        SINON_SI (choix_ordi == "P") ALORS
                            AFFICHER ("Ciseaux perd contre Pierre \nOrdi gagne !");
                            score_ordi <- score_ordi + 1
                        FIN_SINON_SI
                    FIN_SI
        FIN_SELONQUE
    
        AFFICHER ("Score : Vous [ "+score_joueur+" ] Vs. Ordi [ "+score_ordi+" ]")
        AFFICHER ("Vous voulez continuer la partie ?")
        SAISIR (continuer)
    FIN_TQ

FIN
*/

// Verification sur JavaScript :

alert(`BIENVENUE AU JEU PIERRE - PAPIER - CISEAUX`);
alert(`But du jeu :
        Gagne contre ton adverser en accumulant
        le plus de point possible.
     \nRegle du jeu :
        La pierre écrase les ciseaux et gagne.
        La feuille enveloppe la pierre et gagne.
        Les ciseaux découpent la feuille et gagnent.
        A partir de là chaque forme en bat une autre
        et perd contre une autre. `);

let score_joueur = 0;
let score_ordi = 0;
let continuer = true;

while (continuer) {
    let choix_joueur = prompt(`Tape ton choix entre : Pierre = P, Papier = PA ou Ciseaux = C`);
    let choix_ordi = Math.floor(Math.random() * 3);

    if (choix_ordi == 0) {
        choix_ordi = "P";
    } else if (choix_ordi == 1) {
        choix_ordi = "PA";
    } else if (choix_ordi == 2) {
        choix_ordi = "C";
    }

    switch (choix_joueur) {
        case "P":
            if (choix_ordi == "C") {
                alert(`Pierre gagne à Ciseaux \nTu gagnes !`);
                score_joueur++;

            } else if (choix_ordi == "P") {
                alert(`Pierre et Pierre \nÉgalité !`);

            } else if(choix_ordi == "PA") {
                alert(`Pierre perd contre Papier \nOrdi gagne !`);
                score_ordi++;
            }
            break;
    
        case "PA":
            if (choix_ordi == "P") {
                alert(`Papier gagne à Pierre \nTu gagnes !`);
                score_joueur++;

            } else if (choix_ordi == "PA") {
                alert(`Papier et Papier \nÉgalité !`);
    
            } else if(choix_ordi == "C") {
                alert(`Papier perd contre Ciseaux \nOrdi gagne !`);
                score_ordi++;
            }
            break;
    
        case "C":
            if (choix_ordi == "PA") {
                alert(`Ciseaux gagne à Papier \nTu gagnes !`);
                score_joueur++;

            } else if (choix_ordi == "C") {
                alert(`Ciseaux et Ciseaux \nÉgalité !`);

            } else if(choix_ordi == "P") {
                alert(`Ciseaux perd contre Pierre \nOrdi gagne !`);
                score_ordi++;
            }
            break;
    }

    alert(`Score : Vous [ ${score_joueur} ] Vs. Ordi [ ${score_ordi} ]`)

    continuer = confirm(`Vous voulez continuer la partie ?`);
}

