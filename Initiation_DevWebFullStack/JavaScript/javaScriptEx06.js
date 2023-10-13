/*
    Page :104 / 234
    
    Réalisez un programme qui permet d’afficher, dans la console,
    la structure suivante à l’aide d’une boucle.

    "A"
    "AA"
    "AAA"
    "AAAA"
    "AAAAA"
*/

// let cpt = 1;
// let tab = Array();
// while(cpt <= 5) {
//     lettre = "A";
//     tab.push(lettre);
//     console.log(`"${tab.join('')}"`);
//     cpt++;
// }

// let lettre = "A";
// for (let cpt = 0; cpt < 5; cpt++) {
//     console.log(lettre);
//     lettre += "A";
// }

let lettre = "A";
for (let cpt = 1; cpt <= 5; cpt++) {
    console.log(`"${lettre.repeat(cpt)}"`);
}
