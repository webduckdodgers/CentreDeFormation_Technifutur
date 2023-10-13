/*
[Exercice Bonus : Mastermind]

    L'ordinateur choisit une combinaison secrète de couleurs.
    La combinaison doit être composée de 4 couleurs (mode 4 couleurs).
    Chaque couleur est représentée par un numéro allant de 1 à 4 (pour le mode 4 couleurs).

    Le joueur a un nombre limité de tentatives pour deviner la combinaison secrète.
    Vous pouvez fixer ce nombre (par exemple, 10 tentatives).

    À chaque tentative, le joueur saisit une combinaison de 4 couleurs (mode 4 couleurs).

    Après chaque tentative, l'ordinateur doit donner un indice au joueur sur la correspondance des couleurs.
    L'indice est composé de deux éléments :

    Le nombre de couleurs correctes et bien placées dans la combinaison secrète.
    Le nombre de couleurs correctes mais mal placées dans la combinaison secrète.
    Le jeu continue jusqu'à ce que le joueur trouve la combinaison secrète ou atteigne le nombre maximum de tentatives.

    Si le joueur trouve la combinaison secrète,
    le jeu affiche un message de félicitations et le nombre de tentatives nécessaires pour trouver la combinaison.

    Si le joueur n'a pas trouvé la combinaison secrète après le nombre maximum de tentatives,
    le jeu affiche un message indiquant que le joueur a épuisé toutes ses tentatives et révèle la combinaison secrète.

    Le joueur peut choisir de jouer à nouveau ou quitter le jeu.

    BONUS : 
        Mode difficile (6 couleurs)
        Ajoutez un deuxième joueur (compétition sur la même combinaison)


VARIABLE  : ENTIER

DEBUT

FIN
*/

// Verification sur JavaScript :

function regle_du_jeu() {
    alert(`Le Mastermind est un jeu de logique et de déduction qui se joue généralement à deux joueurs.
         \nLe but du jeu est de deviner la combinaison de couleurs secrète choisie par l'autre joueur, tout en donnant des indications à chaque tentative pour aider à affiner les hypothèses.`);
    
    alert(`Mise en place :
         \nL'un des joueurs choisit une combinaison secrète de pions de couleurs et la place dans la rangée de trous, à l'abri des regards de l'autre joueur`);
    
    alert(`Les tentatives :
         \nL'autre joueur commence à deviner la combinaison secrète en plaçant des pions de couleurs dans la rangée de trous. Après chaque tentative, le joueur qui connaît la combinaison secrète fournit des indications pour aider à raffiner les hypothèses.`);

         /*
         Les indications : Les indications sont données sous la forme de pions indicateurs. Il y a deux types d'indicateurs :
         
         Pions noirs : Un pion noir est placé pour chaque pion de la tentative qui a la bonne couleur et la bonne position dans la combinaison secrète.
         Pions blancs : Un pion blanc est placé pour chaque pion de la tentative qui a la bonne couleur mais pas la bonne position dans la combinaison secrète.
         Analyse des indications : En se basant sur les pions indicateurs, le joueur qui fait la tentative ajuste sa stratégie pour la prochaine tentative en essayant de déduire quelles couleurs sont correctes et quelle est leur position.
         */
    
    alert(`Continuation :
         \nLes joueurs continuent d'alterner les rôles de codeur et de décodeur jusqu'à ce que le joueur décodeur devine la combinaison secrète en ayant un nombre limité de tentatives, ou jusqu'à ce qu'il renonce.`);

    alert(`Le jeu se base sur la logique, la déduction et la stratégie.
         \nPlus les tentatives passent, plus le joueur décodeur collecte d'informations à partir des indications, ce qui lui permet de réduire les possibilités et d'arriver plus près de la combinaison secrète.
         \nLe joueur qui réussit à deviner la combinaison secrète avec le moins de tentatives gagne la partie. Le Mastermind peut être adapté pour être joué en solo ou avec plus de deux joueurs, ainsi que sous différentes variantes en ajoutant des règles spéciales pour rendre le jeu plus complexe ou stimulant.`);
}

function choix(reponse) {

    if (reponse == 1) {
        decision = "🔴";
    } else if (reponse == 2) {
        decision = "🟠";
    } else if (reponse == 3) {
        decision = "🟡";
    } else if (reponse == 4) {
        decision = "🟢";
    } else if (reponse == 5) {
        decision = "🔵";
    } else if (reponse == 6) {
        decision = "🟣";
    }

    return(decision);
}

//
let jeu = true;
let option = false;
//
let choix_ordi = Array(6);
let afficher_choix_ordi = "";
//
let gagner = false;
let colonne;
let tentative = 0;
let numero_tentative;
let choix_joueur = Array(6)
let continuer = true;
let afficher_choix_joueur = "";
let afficher_indice = "";
let afficher_resultat = "";
let bingo = false;

alert(`\n🔴 🟠 🟡 🟢 🔵 🟣 \nBIENVENUE AU JEU MASTERMIND`);

while (jeu) {
    let menu = prompt(`MENU :
    1 ][ JOUER CONTRE L'ORDINATEUR 🤖
    2 ][ JOUER AVEC UN AMI 👨‍👩‍👦
    3 ][ REGLE DU JEU 📜
    4 ][ VOIR LES SCORES 🏆
    5 ][ SORTIR 👋🏼`);

    switch (menu) {
        case "1":            
            for (let index = 0; index < choix_ordi.length; index++) {
                choix_ordi[index] = Math.floor(Math.random() * 6 + 1);

                choix(choix_ordi[index]);
            
                afficher_choix_ordi += `[ ${decision} ]`;
            }

            if (option) {
                alert(`COMBINAISON SECRÈTE DE L'ORDINATEUR : \n${afficher_choix_ordi}`);
            }
                        
            alert(`\nDEVINE LA COMBINAISON DES COULEURS SECRÈTE CHOISIE PAR L'ORDINATEUR 🤖`);
            alert(`\nL'EST GO ! 😎`)
            while (choix_joueur != choix_ordi && continuer && tentative != 10 && !gagner) {
                tentative++;
                colonne = 0;
                for (let index = 0; index < choix_joueur.length; index++) {
                    colonne++;
                    choix_joueur[index] = Number(prompt(`TENTATIVE : ${tentative} / 10
                    \n [ ${colonne} ]  -->  [ 1 = 🔴 | 2 = 🟠 | 3 = 🟡 | 4 = 🟢 | 5 = 🔵 | 6 = 🟣 ]
                    \n [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]
                    \n${afficher_indice}
                    \n${afficher_choix_joueur}
                    \n${afficher_resultat}`));

                    while (choix_joueur[index] < 1 || choix_joueur[index] > 6){
                        alert(`ERREUR ❗️ \nVOUS DEVEZ CHOISIR ENTRE 1 À 6`);
                        choix_joueur[index] = Number(prompt(`TENTATIVE : ${tentative} / 10
                        \n [ ${colonne} ] -->  [ 1 = 🔴 | 2 = 🟠 | 3 = 🟡 | 4 = 🟢 | 5 = 🔵 | 6 = 🟣 ]
                        \n [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]
                        \n${afficher_choix_joueur}
                        \n${afficher_resultat}`));
                    }

                    choix(choix_joueur[index]);
            
                    afficher_choix_joueur += `[ ${decision} ]`;
                }
                afficher_choix_joueur += `\n`;
            
                afficher_indice = "";
                afficher_resultat = "";

                for (let index = 0; index < choix_joueur.length; index++) {
                    bingo = false;
                    if (choix_joueur[index] === choix_ordi[index]) {
                        afficher_resultat += `[ 👍🏼 ]`;

                        for (let analyser = 0; analyser < choix_joueur.length; analyser++) {
                            if (!bingo && choix_joueur[index] === choix_ordi[analyser]) {
                                afficher_indice += `[ 💡 ]`;
                                bingo = true;
                            }
                        }
                    }
                    
                    bingo = false;
                    if (choix_joueur[index] !== choix_ordi[index]) {
                        afficher_resultat += `[ 👎🏼 ]`;
                        
                        for (let analyser = 0; analyser < choix_joueur.length; analyser++) {
                            if (!bingo && choix_joueur[index] === choix_ordi[analyser]) {
                                bingo = true;
                                afficher_indice += `[ 🔋 ]`;
                            }
                        }

                        if (!bingo) {
                            afficher_indice += `[ 🪫 ]`;
                        }
                    }
                }

                if (choix_joueur.every((value, index) => value === choix_ordi[index])) {
                    gagner = true;
                    alert(`BRAVO ! TU AS TROUVE 🏆 \n${afficher_choix_ordi} \nHISTORIQUE DE VOTRE PARTIE : \n${afficher_choix_joueur}`);
                } else {
                    if (tentative === 9) {
                        alert(`ATTENTION ❗️ \nDERNIERE CHANCE`);
                    } else if (tentative === 10) {
                        alert(`VOUS AVEZ PERDU 😔 \nLA COMBINAISON SECRÈTE ETAIT : \n${afficher_choix_ordi}
                        \nHISTORIQUE DE VOTRE PARTIE : \n${afficher_choix_joueur}`);
                    } else {
                        continuer = confirm(`TENTATIVE NUMERO ${tentative} \nDESIREZ-VOUS CONTINUER LA PARTIE ?`);
                    }
                }
            }
            
            if (!continuer) {
                alert(`VOUS AVEZ ABANDONNE 😕 \nLA COMBINAISON SECRÈTE ETAIT : \n${afficher_choix_ordi}`);
            }  
            break;

        case "2":
            alert(`SALUT A TOI JOUEUR 1 !
                 \nNOUS VOULONS FAIRE UNE ATTAQUE TERRORISTE SUR UN AEROPORT, ET POUR CELA, JE VAIS TE DEMANDER DE CRÉER UNE BOMBE AVEC UNE COMBINAISON SECRÈTE DE 6 COULEURS 💣
                 \nPAR APRES, TU AURAS LE CHOIX DE CHOISIR COMBIEN DE TENTATIVE QUE TU SOUHAITES LAISSE A TON ABVERSAIRE.
                 \nCOMPRIS ?`);

            colonne = 0;
            while (!bingo) {
                afficher_choix_ordi = "";
                for (let index = 0; index < choix_ordi.length; index++) {
                    colonne++;
                    choix_ordi[index] = Number(prompt(`CRÉER TA COMBINAISON SECRÈTE :
                    \n [ ${colonne} ]  -->  [ 1 = 🔴 | 2 = 🟠 | 3 = 🟡 | 4 = 🟢 | 5 = 🔵 | 6 = 🟣 ]
                    \n [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]
                    \n${afficher_choix_ordi}`));
    
                    choix(choix_ordi[index]);
    
                    while (choix_ordi[index] < 1 || choix_ordi[index] > 6){
                        alert(`ERREUR ❗️ \nVOUS AVEZ MAL SAISI`);
                        choix_ordi[index] = Number(prompt(`CRÉER TA COMBINAISON SECRÈTE :
                        \n [ ${colonne} ]  -->  [ 1 = 🔴 | 2 = 🟠 | 3 = 🟡 | 4 = 🟢 | 5 = 🔵 | 6 = 🟣 ]
                        \n [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]
                        \n${afficher_choix_ordi}`));
                    }
                
                    afficher_choix_ordi += `[ ${decision} ]`;
                }
                bingo = confirm(`SATISFAIT DE TA COMBINAISON SECRÈTE ? \n${afficher_choix_ordi}`);
                colonne = 0;
            }
            alert(`SUPER ! \nMAINTENANT CHOISI COMBIEN DE TENTATIVE TU DESIRES LAISSE À TON ADERSAIRE.`)
            while (bingo) {
                numero_tentative = prompt(`À SAVOIR ❗️ \nVOUS DEVEZ LAISSE MINIMUM 5 TENTATIVES ET VOUS POUVEZ EN CHOISIR JUSQU'A 12`);
                while (numero_tentative < 5 || numero_tentative > 12) {
                    numero_tentative = prompt(`ERREUR ❗️ VOUS AVEZ MIT ${numero_tentative}
                                             \nVOUS DEVEZ LAISSE MINIMUM 5 TENTATIVES A TON ADVERSAIRE ET ON METTRE MAXIMUM 12`);
                }
                bingo = confirm(`TU AS MIT ${numero_tentative} TENTATIVES À TON ADVERSAIRE. \nTU VEUX CHANGER LES TENTATIVES ?`);
            }

            alert(`AU TOUR DU JOUEUR 2 🔄`)
            
            alert(`SALUT A TOI JOUEUR 2 !
                 \nNOUS AVONS BESOIN DE TOI POUR DÉSACTIVER UNE BOMBE TERRORISTE QUE NOUS AVONS TROUVÉ DANS UN AEROPORT 🏢
                 \nTA MISSION : DEVINE LA COMBINAISON SECRÈTE CHOISIE PAR TON ABVERSAIRE.`);
            alert(`\nTU AURAS SEULEMENT ${numero_tentative} TENTATIVES.. \nON CROIT EN TOI.`);
            alert(`\nL'EST GO ! 😠`)
            while (choix_joueur != choix_ordi && continuer && tentative != numero_tentative && !gagner) {
                tentative++;
                colonne = 0;
                for (let index = 0; index < choix_joueur.length; index++) {
                    colonne++;
                    choix_joueur[index] = Number(prompt(`TENTATIVE : ${tentative} / ${numero_tentative}
                    \n [ ${colonne} ]  -->  [ 1 = 🔴 | 2 = 🟠 | 3 = 🟡 | 4 = 🟢 | 5 = 🔵 | 6 = 🟣 ]
                    \n [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]
                    \n${afficher_indice}
                    \n${afficher_choix_joueur}
                    \n${afficher_resultat}`));

                    while (choix_joueur[index] < 1 || choix_joueur[index] > 6){
                        alert(`ERREUR ❗️ \nVOUS AVEZ MAL SAISI`);
                        choix_joueur[index] = Number(prompt(`TENTATIVE : ${tentative} / 10
                        \n [ ${colonne} ] -->  [ 1 = 🔴 | 2 = 🟠 | 3 = 🟡 | 4 = 🟢 | 5 = 🔵 | 6 = 🟣 ]
                        \n [ 1 ]  [ 2 ]  [ 3 ]  [ 4 ]  [ 5 ]  [ 6 ]
                        \n${afficher_choix_joueur}
                        \n${afficher_resultat}`));
                    }

                    choix(choix_joueur[index]);
            
                    afficher_choix_joueur += `[ ${decision} ]`;
                }
                afficher_choix_joueur += `\n`;
            
                afficher_indice = "";
                afficher_resultat = "";

                for (let index = 0; index < choix_joueur.length; index++) {
                    bingo = false;
                    if (choix_joueur[index] === choix_ordi[index]) {
                        afficher_resultat += `[ 👍🏼 ]`;

                        for (let analyser = 0; analyser < choix_joueur.length; analyser++) {
                            if (!bingo && choix_joueur[index] === choix_ordi[analyser]) {
                                afficher_indice += `[ 💡 ]`;
                                bingo = true;
                            }
                        }
                    }
                    
                    bingo = false;
                    if (choix_joueur[index] !== choix_ordi[index]) {
                        afficher_resultat += `[ 👎🏼 ]`;
                        
                        for (let analyser = 0; analyser < choix_joueur.length; analyser++) {
                            if (!bingo && choix_joueur[index] === choix_ordi[analyser]) {
                                bingo = true;
                                afficher_indice += `[ 🔋 ]`;
                                alert
                            }
                        }

                        if (!bingo) {
                            afficher_indice += `[ 🪫 ]`;
                        }
                    }
                }

                if (choix_joueur.every((value, index) => value === choix_ordi[index])) {
                    gagner = true;
                    alert(`BRAVO SOLDAT ! TU AS RÉUSSIT 😎 \n${afficher_choix_ordi}
                         \nHISTORIQUE DE LA PARTIE : \n${afficher_choix_joueur}`);
                    alert(`🏆 GAGNANT JOUEUR 2`);
                } else {
                    if (tentative === numero_tentative - 1) {
                        alert(`ATTENTION ❗️ \nDERNIERE CHANCE SOLDAT`);
                    } else if (tentative === numero_tentative) {
                        alert(`VOUS AVEZ PERDU 💥 \nLA COMBINAISON SECRÈTE ETAIT : \n${afficher_choix_ordi}
                        \nHISTORIQUE DE LA PARTIE : \n${afficher_choix_joueur}`);
                        alert(`🏆 GAGNANT JOUEUR 1`);
                    } else {
                        continuer = confirm(`TENTATIVE NUMERO ${tentative} \nDESIREZ-VOUS CONTINUER LA PARTIE ?`);
                    }
                }
            }
            
            if (!continuer) {
                alert(`VOUS AVEZ ABANDONNE 😱 \nLA COMBINAISON SECRÈTE ETAIT : \n${afficher_choix_ordi}`);
                alert(`🏆 GAGNANT JOUEUR 1`);
            }
            break;

        case "3":
            regle_du_jeu();
            break;

        case "4":
            alert(`404`);
            break;
        
        case "5":
            alert(`\nCREATEUR DU SCRIPT JS : \nMarc Romero ©️`);
            jeu = false;
            break;

        case "reglage":
            option = confirm(`ACTIVER L'AFFICHAGE DES COMBINAISONS DES COULEURS SECRÈTE CHOISIE PAR L'ORDINATEUR ?`);
            break;
    }        
}
        
