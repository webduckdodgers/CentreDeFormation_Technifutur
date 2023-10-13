/*
    1)  Utilisez la fonction join pour concat tous les élements
        d'un tableau de string en un seul string séparé par des '-'.
*/

    // let groupe1 = ["Marc", "Sabrina", "Chris"];
    // let groupe2 = ["Rodrigue", "Julie", "Maud"];

    // let classe = groupe1.concat(groupe2);
    // console.log(classe.join('-'));


/*
    2)  Écrivez une fonction qui prend un array de nombre et utilise
        la fonction splice pour supprimer le 2ème et 3ème élément.
*/

    // let array = [1,2,3,4,5];
    // console.log("Mon tableau : "+array);

    // array.splice(1,2);
    // console.log("Mon nouveau tableau : "+array);


/*
    3)  Créez un array avec des noms de fruits et utilisez la fonction
        slice pour créer un nouvel array contenant uniquement les 2 premiers.
*/

    // let array = ["banane", "kiwi", "fraise", "pomme"];
    // console.log("Mon tableau : "+array);

    // newArray = array.splice(0,2);
    // console.log("Mon nouveau tableau : "+newArray);


/*
    4)  Écrivez une fonction qui prend un array de nombre et utlisez la fonction
        sort pour trier par ordre croissant.
*/

    // array = Array(5);

    // for (let index = 0; index < array.length; index++) {
    //     array[index] = Math.floor(Math.random()* 10 + 1);
    // }

    // array.sort();
    // console.log(array);

    
/* 
    5)  Créez un array de noms de pays et utilisez la fonction reverse pour inverse
        l'ordre des éléments de l'array.
*/

    // arrayCountry = ["Belgique", "Espagne", "France"];
    // console.log("Tableau : "+arrayCountry);

    // arrayCountry.reverse();
    // console.log("Reverser mon tableau : "+arrayCountry);


/*
    6)  Créez 2 arrays contenant des noms de couleurs et utilisez la fonction concat
        pour fusionner en un seul array.
*/

    // arrayColor1 = ["red", "blue", "yellow"];
    // arrayColor2 = ["black", "pink"];

    // newArrayColor = arrayColor1.concat(arrayColor2);
    // console.log(newArrayColor);

    
/*
    7)  Écrivez une fonction qui prend un array de nombre et utilise la fonction pop
        pour supprimer le dernier élement du tableau.
*/

    // array = [1,2,3,4,5];
    // console.log("Tableau : "+array);

    // array.pop();
    // console.log("Nouveau tableau : "+array);


/*
    8)  Créez un array vide sans raccourci et utilisez la fonction push pour insérer
        des noms d'animaux, ensuite triez-le.
*/

    array = Array();

    array.push("chien");
    array.push("chat");
    array.push("poulet");

    console.log("Mon tableau : "+array);

