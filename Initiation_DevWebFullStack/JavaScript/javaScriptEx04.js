/*
    Page 93 / 234
    
    Écrire un programme qui calcul la TVA :
        1. Demande à l’utilisateur un prix unitaire hors taxe d’un livre.
        2. Demande à l’utilisateur la quantité de livre.
        3. Calcule et affiche le prix total TTC de la commande, en utilisant une TVA de 21%.
*/

let prix = prompt(`Bonjour ! \nCombien vaut le livre ?`);
let quantite = prompt(`quantité :`);
let article = prix * quantite;

let reponse = false;
while (!reponse) {
    let prixTTC = null;
    let TVA = prompt(`Quelle TVA vous voulez imposer ? \n1: 21% \n2: 12% \n3: 6% \n0: Sortir`);
    switch (TVA) {
        case "0":
            reponse = true;
            alert(`Le calcul à été annuler`);
            break;

        case "1":
            reponse = true;
            prixTTC = article*1.21;
            alert(`Le livre vaut ${prix}€, vous avez prit ${quantite}. Cela ferra ${article}€ et il a été imposé a 21%.`);
            alert(`Le prix sera de ${prixTTC}`);
            break;
    
        case "2":
            reponse = true;
            prixTTC = article*1.12;
            alert(`Le livre vaut ${prix}€, vous avez prit ${quantite}. Cela ferra ${article}€ et il a été imposé a 12%.`);
            alert(`Le prix sera de ${prixTTC}`);
            break;
        
        case "3":
            reponse = true;
            prixTTC = article*1.06;
            alert(`Le livre vaut ${prix}€, vous avez prit ${quantite}. Cela ferra ${article}€ et il a été imposé a 6%.`);
            alert(`Le prix sera de ${prixTTC}`);
            break;
    
        default:
            alert(`Erreur ! \nVous pouvez seulement choisir 1, 2 et 3 sinon si vous voulez sortir choisisez 0`);
            break;
    }
}