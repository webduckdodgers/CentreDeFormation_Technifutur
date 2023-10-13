/*
[Exercice 5]

    Déterminez la valeur des variables de ce pseudo-code.
    
VARIABLE a, b, c, d, e : ENTIER

DEBUT

    a <- 8 % 3                      // a = 2
    b <- 4 + a                      // b = 6
    c <- b * a                      // c = 12
    d <- (c – a) * b                // d = 60
    e <- ((a + 7) * (d / a)) * 0    // e = 0

FIN
*/

// Verification sur JavaScript :

let a = 8 % 3;
let b = 4 + a;
let c = b * a;
let d = (c - a) * b;
let e = ((a + 7) * (d / a)) * 0;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
