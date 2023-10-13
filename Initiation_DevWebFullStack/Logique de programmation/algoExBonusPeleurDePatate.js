/*
[Exercice Bonus : Peleur de patate]

    Le peleur de patate possède un seau dans lequel se trouvent
    les pommes de terre non pelées.

    Il prend uno pomme de terre dans ce seau, la pelle et la place
    ensuite dans une grosse marmite jusqu'à ce qu'elle soit pleine.
    Si le seau est vide, il est capable de le remplir.

    La marmite peut contenir un maximum de 50 pommes de terre tandis
    que le seau peut en contenir maximum 17.


VARIABLE : ENTIER


DEBUT

FIN
*/

// Verification sur JavaScript :

let patatesPelees = 0;
let patatesNonPelees = 100; // pommmes de terre non pelées
let patatesCuite = 0;

let seau = 0;
let seauRempli = false;

let resteDansLeSeau = 0;

let marmite = 0;
let marmiteRempli = false;

let cuisinier = 0

while (patatesNonPelees > 0) {
    console.log("patate pelees = "+patatesPelees);
    console.log("patate non pelees = "+patatesNonPelees);
    
    while (!seauRempli) { // max 17 pommes de terre
        cuisinier++;
        patatesNonPelees-- ;
        seau++
        if (seau == 17) {
            seauRempli = true;
        }
    }

    while (!marmiteRempli) { // max 50 pommes de terre
        marmite = marmite + seau;
        seauRempli = false;
        if (marmite >= 50) {
            marmiteRempli = true;
            resteDansLeSeau = marmite - 50;
            seau = resteDansLeSeau;
            patatesCuite = patatesCuite + 50;
            marmiteRempli = false;
        } else {
            seau = 0;
        }
    }
}

console.log("Fini !");





