/*
[Exercice Bonus Tableau 3] PAS ENCORE FINI !

    À l'aide des boucles, réalsez un algorithme permettant de trier un tableau d'entier
    dans l'ordre croissant. Mettez-le ensuite en pratique avec le Flowgorithm.


VARIABLE tab : TABLEAU DE ENTIER [5]
         index, indexMax, nombrePlusGrand, stock : ENTIER

DEBUT

    indexMax <- size(tab) - 1

    POUR index DE 0 A indexMax FAIRE
        tab(index) <- Random(10) // De 0 à 10
    FIN_POUR

    nombrePlusGrand <- tab[0] // 4

    POUR index DE 0 A indexMax FAIRE
        POUR index DE 0 A indexMax FAIRE
            SI tab[index] > nombrePlusGrand ALORS
                stock <- nombrePlusGrand
                nombrePlusGrand <- tab[index] 
                tab[index] <- stock
            FIN_SI
        FIN_POUR
    FIN_POUR

FIN
*/

// Verification sur JavaScript :

/*
let tab = Array(5);

for (let index = 0; index < tab.length; index++) {
    tab[index] = Math.floor(Math.random() * (10 - 0 + 1)); // Entre 0 à 10
    console.log(`${index} = ${tab[index]}`);
}

let nombrePlusGrand = tab[0];
console.log(`nombre plus grand = ${nombrePlusGrand}`);

let stock;

for (let index = 0; index < tab.length; index++) {
    for (let index = 0; index < tab.length; index++) {
        
        if (nombrePlusGrand <= tab[index]) {
            stock = nombrePlusGrand;
            nombrePlusGrand = tab[index];
            tab[index] = stock;
        }
    }
}

console.log(tab.join());
*/

let tab = Array(5);

for (let index = 0; index < tab.length; index++) {
    tab[index] = Math.floor(Math.random() * 11); // Entre 0 et 10 inclus
    console.log(`${index} = ${tab[index]}`); // Permet de verifier les nombres qu'on été ajouter sur le tableau
}

let nombrePlusGrand, stock;

for (let index = 0; index < tab.length; index++) {
    nombrePlusGrand = index;
    // 0, 1, 2, 3, 4
    console.log("la variable nbPG = ", nombrePlusGrand);

    for (let nombreTableau = index + 1; nombreTableau < tab.length; nombreTableau++) {
        // 1, 2, 3, 4, 5


        //         1                   0
        // SI tab ... inferieur à tab ... ALORS
        // var nbPG <- nbPG
        if (tab[nombreTableau] < tab[nombrePlusGrand]) {
            nombrePlusGrand = nombreTableau;
            // nbPG <- 1
        }
    }

    if (nombrePlusGrand != index) {
        stock = tab[index];
        tab[index] = tab[nombrePlusGrand];
        tab[nombrePlusGrand] = stock;
    }
}

console.log("stock =", stock);

console.log("Nouveau tableau trié :", tab.join());

