/*
[Exercice 10 : Année bissextile]

    Réalisez un petit algorithme qui sur base d’une année donnée
    va déterminer s’il s’agit d’une année bissextile.
    Une année est bissextile si elle est divisible par 4,
    mais non divisible par 100. Ou si elle est divisible par 400.

    Exemple :
        Bissextile : 2000, 1996
        Non bissextile : 1900, 1997

VARIABLE annee : ENTIER 
    
DEBUT

    SI (((annee MOD 4 == 0) ET (annee MOD 100)) OU (annee MOD 400 ==0)) ALORS
        AFFICHER ("l'année est bissextile")
    SINON
        AFFICHER ("l'année n'est pas bissextile")
    FIN_SI

FIN
*/

// Verification sur JavaScript :

let annee = prompt();
let message = document.body;

if (((annee % 4 == 0) && (annee % 100)) || (annee % 400 == 0)) {
    message.innerHTML += `l'année ${annee} est bissextile`;
} else {
    message.innerHTML += `l'année ${annee} n'est pas bissextile`;
}