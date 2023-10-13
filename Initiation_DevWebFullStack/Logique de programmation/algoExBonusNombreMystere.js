/*
[Exercice Bonus : Nombre Mystère ]

    Affichez un message de bienvenue pour le joueur et expliquez les règles du jeu.
    Générez un nombre aléatoire entre 1 et 100 et stockez-le dans une variable nombre_a_deviner.
    Initialisez une variable nombre_d_essais à 0 pour garder une trace du nombre d'essais du joueur.
    Démarrez la boucle principale du jeu pour les essais du joueur :
    Répétez tant que le joueur n'a pas deviné le nombre correct et qu'il reste des essais.
    Demandez au joueur de saisir un nombre en lui indiquant le nombre d'essais restants.
    Incrémentez le nombre d'essais (nombre_d_essais) de 1.
    Vérifiez si le nombre saisi par le joueur est égal à nombre_a_deviner :
    Si oui, affichez un message de félicitations et le nombre d'essais qu'il a fallu au joueur pour deviner le nombre.
    Si non, affichez un message indiquant si le nombre à deviner est plus grand ou plus petit que le nombre saisi par le joueur.
    Répétez l'étape 4 jusqu'à ce que le joueur devine correctement le nombre ou utilise tous ses essais.
    Si le joueur n'a pas deviné le nombre correct après le nombre d'essais limité, affichez un message indiquant que la partie est terminée et révélez le nombre à deviner.

    BONUS : Proposez au joueur de choisir lui même la plage de nombres.


VARIABLE nombre_a_deviner, nombre_d_essais, proposition : ENTIER 
         cesser : BOOLEEN

DEBUT

AFFICHER ("BIENVENUE AU JEU NOMBRE MYSTERE !")
AFFICHER ("But du jeu : Trouve le nombre mystère entre 1 à 100 avec le moins de tentative possible.
         \nSi à tout moment vous dessirez abondonner la parti entre le nombre 0.`")

proposition <- 0
tentative <- 0
cesser <- false
nombre_a_deviner <- Random(100)

AFFICHER ("Pour plus de difficulté créer un nombre d'essaies souhaitez :")
SAISIR (nombre_d_essais)

TANTQUE (nombre_a_deviner != proposition ET !cesser ET nombre_d_essais != 0) FAIRE
    AFFICHER ("Entre un nombre entre 1 à 100")
    SAISIR ("proposition")

    SI (proposition == 0) ALORS
        cesser <- true
        AFFICHER ("Vous avez abondonner. \nNombre de tentative : "+tentative)

        SINON_SI (proposition > nombre_a_deviner) ALORS
            nombre_d_essais <- nombre_d_essais - 1
            tentative <- tentative + 1
            AFFICHER ("C'est moins !")
        FIN_SINON_SI
    
        SINON_SI (proposition < nombre_a_deviner) ALORS
            nombre_d_essais <- nombre_d_essais - 1
            tentative <- tentative + 1
            AFFICHER ("C'est plus !")
        FIN_SINON_SIN
    FIN_SI

    SI (nombre_d_essais == 0) ALORS
        AFFICHER ("Vous avez perdu !")
    FIN_SI
FIN_TQ

SI (proposition == nombre_a_deviner) ALORS
    AFFICHER ("Super ! Vous avez gagné. \nNombre de tentative : "+tentative)
FIN_SI
    
FIN
*/

// Verification sur JavaScript :

/*
alert(`BIENVENUE AU JEU NOMBRE MYSTERE !`);
alert(`But du jeu : Trouvez le nombre mystère entre 1 à 100 avec le moins d'essais possible.
     \nSi à tout moment vous dessirez abondonner la parti entre le nombre 0.`);

let proposition = 0;
let tentative = 0;
let cesser = false;
let essai = "";

const nombre_a_deviner = Math.floor(Math.random() * 100 - 1 + 2);
//alert(`Le nombre mystère est ${nombre_a_deviner}`);

let nombre_d_essais = Number(prompt(`Pour plus de difficulté créer un nombre d'essaies souhaitez :`));

while (nombre_a_deviner != proposition && !cesser && nombre_d_essais != 0) {
    proposition = prompt(`Entre un nombre entre 1 à 100 \nNombre d'essais : ${nombre_d_essais} \nEntre precedante : ${essai}`);

    if (proposition == 0) {
        cesser = true;
        alert(`Vous avez abondonner.. 😕 \nNombre de tentative : ${tentative}`);
    } else if (proposition > nombre_a_deviner) {
        nombre_d_essais--;
        tentative++;
        alert (`C'est moins ! ⬇️`);
    } else if (proposition < nombre_a_deviner) {
        nombre_d_essais--;
        tentative++;
        alert (`C'est plus ! ⬆️`);
    }
    
    if (nombre_d_essais == 0) {
        alert(`Vous avez perdu ! 🪦`);
    }

    essai += ` [ ${String(proposition)} ] `;
}

if (proposition == nombre_a_deviner) {
    alert(`Super ! Vous avez gagné 🥳 \nNombre de tentative : ${tentative}`);
}
*/

let jeu = true;
alert(`BIENVENUE AU JEU NUMÉRO MYSTÈRE !`);

while (jeu) {
    const menu = prompt(`
    ========== MENU ==========
        Veuillez choisir une option :
        1. Jouer contre la machine 🤖
        2. Jouer avec un ami 👨‍👩‍👦
        0. Sortir du jeu
    `);
    
    let proposition = 0;
    let tentative = 0;
    let cesser = false;
    let essai = "";
    let nombreMystere;

    switch (menu) {
        case "1":
            nombreMystere = Math.floor(Math.random() * 100 - 1 + 2);
            //alert(`Le nombre mystère est ${nombreMystere}`);
    
            alert(`Trouve le nombre mystère entre 1 à 100 avec le moins de tentative possible.
                 \nÀ SAVOIR ! Si à tout moment vous dessirez abondonner la parti entre le nombre 0️`);
    
            while (nombreMystere != proposition && !cesser) {
                proposition = prompt(`Entre un nombre entre 1 à 100 \nEntre precedante : ${essai}`);
    
                if (proposition == 0) {
                    cesser = true;
                    alert(`Vous avez abondonner.. 😕 \nNombre de tentative : ${tentative} \nLe nombre mystère etait : ${nombreMystere}`);
                } else if (proposition > nombreMystere) {
                    tentative++;
                    alert (`C'est moins ! ⬇️`);
                } else if (proposition < nombreMystere) {
                    tentative++;
                    alert (`C'est plus ! ⬆️`);
                }
    
                essai += ` [ ${String(proposition)} ] `;
            }
    
            if (proposition == nombreMystere) {
                alert(`Super ! Vous avez gagné 🥳 \nNombre de tentative : ${tentative}`);
            }
            break;
    
        case "2":
            alert(`JOEUR 1,
                 \nVotre objectif serra de créer une plage de nombres que vous desirez, avec un numéro mystère et le nombre de vie qu'aura le joeur numéro 2.`);
            let nombreMin = Number(prompt(`Choisissez le petit nombre :`));
            let nombreMax = Number(prompt(`Choisissez le grand nombre :`));
            while (nombreMax < (nombreMin + 2)) {
                nombreMax = Number(prompt(`Votre nombre doit etre superieur ⬆️ à votre petit nombre = ${nombreMin}
                                         \nATTENTION ! Veuillez laisse un espacement en + pour votre numero mystère.`));
            }
    
            nombreMystere = Number(prompt(`Top !
                                         \nMaintenant, choisissez le numéro mystère entre ${nombreMin} à ${nombreMax}`));
            while (nombreMystere > nombreMax || nombreMystere < nombreMin) {
                nombreMystere = Number(prompt(`ERREUR !
                                         \nVous devez choisir votre numéro mystère entre ${nombreMin} jusqu'a ${nombreMax}`));
            }
    
            tentative = Number(prompt(`Maintenant, choisissez combien de vie 💖 aura le jouer numéro 2 :
                                     \nATTENTION ! Vous devez donner minimum 3 vies au joeur.`));
            while (tentative < 3) {
                tentative = Number(prompt(`ERREUR ! Vous devez donner minimum 3 vies au joeur.`));
            }
    
            alert(`L'EST GO ! 🔄`);
            alert(`JOUER 2 :
                 \nTrouve le nombre mystère entre ${nombreMin} à ${nombreMax} avec le moins de tentative possible.
                 \nNombre de vie : ${tentative} 💖
                 \nÀ SAVOIR ! Si à tout moment vous dessirez abondonner la parti entre le nombre 0️`);
    
            while (nombreMystere != proposition && !cesser && tentative != 0) {
                if (tentative === 1) {
                    alert (`Attention ❗️ Derniere chance..`);
                }
    
                proposition = prompt(`Entre un nombre entre ${nombreMin} à ${nombreMax} \nEntre precedante : ${essai}`);
    
                if (proposition == 0) {
                    cesser = true;
                    alert(`Vous avez abondonner.. 😕 \nLe nombre mystère etait : ${nombreMystere}`);
                    alert(`GAGNANT JOUER 1 🏆`);
                } else if (proposition > nombreMystere) {
                    tentative--;
                    alert (`C'est moins ! ⬇️`);
                } else if (proposition < nombreMystere) {
                    tentative--;
                    alert (`C'est plus ! ⬆️`);
                }
    
                essai += ` [ ${String(proposition)} ] `;
            }
    
            if (tentative == 0) {
                alert(`Vous avez perdu 😔 \nLe nombre mystère etait : ${nombreMystere}`);
                alert(`GAGNANT JOUER 1 🏆`);e
            }
    
            if (proposition == nombreMystere) {
                alert(`Super ! Vous avez gagné 🥳 \nNombre de vie restant : ${tentative}`);
                alert(`GAGNANT JOUER 2 🏆`);
            }
            break;
    
        case "0":
            jeu = false;
            alert(`À bientôt ! 👋🏼`);
            break;
    }
}
