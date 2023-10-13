/*
[Exercice 6]

    Imaginez une méthode permettant d’inverser le contenu
    d’une variable entière sans utiliser une variable temporaire.
    
VARIABLE x, y, z : CHAINE

DEBUT

    x <- 0
    y <- 1

    z <- x
    x <- y
    y <- z

FIN
*/

// Verification sur JavaScript :

const message = document.body;

let x = 0;
let y = 1;
let z;

message.innerHTML += `Avant : X = ${x} et Y = ${y} <br>`;

z = x;
x = y;
y = z;

message.innerHTML += `Après : X = ${x} et Y = ${y} <br>`;