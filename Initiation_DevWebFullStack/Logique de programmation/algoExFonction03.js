/*
[Exercice Fonction : 3]

    Réalisez une procédure dont l'objectif est de
    fusionner deux tableaux d'entiers.

    
VARIABLE tabFunsion : ENTIER

DEBUT

FONCTION funsionner_deux_tableaux_entier(
    tab1: TABLEAU DE ENTIER,
    tab2: TABLEAU DE ENTIER) : ENTIER

    VARIABLE newTabSize, way : ENTIER
                         tab : TABLEAU DE ENTIER
    
    newTabSize <- size(tab1) + size(tab2)
    newTab <- TABLEAU DE ENTIER [newTabSize]

    way <- 0

    POUR index DE 0 A size(tab1)-1 FAIRE
        newTab[index + way] <- tab1[index]
    FIN_POUR

    way <- size(tab1)

    POUR index DE 0 A size(tab2)-1 FAIRE
        newTab[index + way] <- tab2[index]
    FIN_POUR

    RENVOIE(newTab)

tab1 <- [1,2,3,4,5]
tab2 <- [6,7,8,9]

tabFunsion <- funsionner_deux_tableaux_entier(tab1,tab2)

AFFICHER (tabFunsion)

FIN
*/

// Verification sur JavaScript :

function funsionner_et_trier_deux_tableaux_entier(tab1, tab2) {
    let newTabSize = tab1.length + tab2.length;
    let newTab = Array(newTabSize);

    let way = 0;

    for (let index = 0; index < tab1.length; index++) {
        newTab[index + way] = tab1[index];
    }

    way = tab1.length;

    for (let index = 0; index < tab2.length; index++) {
        newTab[index + way] = tab2[index];;
    }

    // Tri le nouveau tableau #newTab
    for (let index = 0; index < newTab.length; index++) {
        let nombrePlusGrand = index;
    
        for (let nombreTableau = index + 1; nombreTableau < newTab.length; nombreTableau++) {

            if (newTab[nombreTableau] < newTab[nombrePlusGrand]) {
                nombrePlusGrand = nombreTableau;
            }
        }
    
        if (nombrePlusGrand != index) {
            stock = newTab[index];
            newTab[index] = newTab[nombrePlusGrand];
            newTab[nombrePlusGrand] = stock;
        }
    }

    return(newTab);
}

/*
function number_random_0_99() {
    let number = Math.floor(Math.random()*100);
    return(number)
}
*/

import number_random_0_99 from "./hooks/numberRandom";

tab1 = Array(5);
for (let index = 0; index < tab1.length; index++) {
    tab1[index] = number_random_0_99();
}

tab2 = Array(5);
for (let index = 0; index < tab2.length; index++) {
    tab2[index] = number_random_0_99();
}

let tabFunsion = funsionner_et_trier_deux_tableaux_entier(tab1, tab2);

console.log("Tableau 1 : "+tab1);
console.log("Tableau 2 : "+tab2);
console.log("Nouveau tableau : "+tabFunsion);

