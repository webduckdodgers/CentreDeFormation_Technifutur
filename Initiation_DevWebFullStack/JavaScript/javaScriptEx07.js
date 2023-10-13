/*
    1)  Fonction pour calculer une moyenne depuis une liste de nombre
        (pensez aux fonctions native de javascript).
*/            

    // function calculer_une_moyenne (tableau) {

    //     const total = tableau.reduce((acc, nombre) => acc + nombre);
    //     const moyenne = total / tableau.length;
    
    //     return moyenne;
    // }


/*
    2)  Fonction pour convertir des C° en F°.
*/

    // function convertir_fahrenheit_a_celsius(fahrenheit) {
    //     const celsius = (fahrenheit - 32) * 5/9;
    //     return celsius;
    // }

    // function convertir_celsius_a_fahrenheit(celsius) {
    //     const fahrenheit = celsius * 9/5 + 32;
    //     return fahrenheit;
    // }


/*
    3)  Fonction pour convertir des kmh en mph.
*/

    // function convertir_kmh_a_mph(kmh) {
    //     const mph = kmh / 1.609344;
    //     return mph.toFixed(2);
    // }

    // function convertir_mph_a_kmh(mph) {
    //     const kmh = mph * 1.609344;
    //     return kmh.toFixed(2)
    // }


/*
    4)  Créez une fonction qui va inverser une chaine de caractères.
*/

    // function inverser_une_chaine(variable){
    //     return variable.split("").reverse().join("");
    // }


/*
    5)  Créez un générateur de mot de passe, le mot de passe pourra contenir des minuscules,
        majuscules, caractères spéciaux et des chiffres.
*/

    function generateur_cle_unique() {
        const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
        "abcdefghijklmnopqrstuvwxyz"+
        "0123456789"+
        "@#$&";

        let cle = ""; 
        for (let index = 1; index <= 10; index++) {
            let goupille = Math.floor(Math.random() * caracteres.length + 1);
            cle += caracteres.charAt(goupille)
        }
 
        return cle;
    }

    let utilisateur1 = generateur_cle_unique();
    let utilisateur2 = generateur_cle_unique();
    let utilisateur3 = generateur_cle_unique();

    console.log("clé de l'utilisateur 1 : "+utilisateur1);
    console.log("clé de l'utilisateur 2 : "+utilisateur2);
    console.log("clé de l'utilisateur 3 : "+utilisateur3);


