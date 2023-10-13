alert(`Bienvenue sur mon site`);

/* Détection de types et de validité des variables avec les méthodes */

// typeof
console.log("1) "+typeof "John");                       // string
console.log("2) "+typeof 3.14);                         // number
console.log("3) "+typeof NaN);                          // number
console.log("4) "+typeof false);                        // boolean
console.log("5) "+typeof [1,2,3,4]);                    // object
console.log("6) "+typeof {name:'John', age:34});        // object
console.log("7) "+typeof new Date());                   // objet
console.log("8) "+typeof function () {});               // function
console.log("9) "+typeof null);                         // object

console.log("---------------------");

// constructor
console.log("1) "+"John".constructor);                  // function String()
console.log("2) "+3.14.constructor);                    // function Number()
console.log("3) "+NaN.constructor);                     // function Number()
console.log("4) "+false.constructor);                   // function Boolean()
console.log("5) "+[1,2,3,4].constructor);               // function Array()
console.log("6) "+{name:"John", age:34}.constructor);   // function Object()
console.log("7) "+new Date().constructor);              // function Date()
console.log("8) "+function () {}.constructor);          // function Function()
console.log("9) "+null.constructor);                    // Error!