
/*
    PAGE : 159 / 234

    3)  Créez le programme permettant d’ajouter des articles dans un panier.
        Il faut pouvoir calculer le total des achats en temps réel.
*/

// HTML
let stock = {
    "chaise" :
        {
            "nom" : "Chaise",
            "prix" : 25,
            "quantite" : 5
        },
    "table" :
        {
            "nom" : "Table",
            "prix" : 150,
            "quantite" : 5
        },
    "meuble" :
        {
            "nom" : "Meuble TV",
            "prix" : 250,
            "quantite" : 5
        }
}

const descriptifProduit = document.createElement("table");
descriptifProduit.innerHTML += `
<caption>Descriptif produit</caption>
<tr>
    <th>Article</th>
    <th>Stock</th>
    <th>Prix</th>
</tr>
`;
for (const cle in stock) {
    descriptifProduit.innerHTML += `
    <tr>
        <td>${stock[cle].nom}</td>
        <td>${stock[cle].quantite}</td>
        <td>${stock[cle].prix} €</td>
        <td><button class="btnAdd">Ajouter</button></td>
    </tr>
    `;
}
document.body.appendChild(descriptifProduit);

const monPanier = document.createElement("table");
const panier = {};
let total = null;
let prix = null;

function refresh_panier() {
    monPanier.innerHTML = `
    <caption>Mon Panier</caption>
    <tr>
        <th>Article</th>
        <th>Quantite</th>
        <th>Prix</th>
    </tr>
    `;

    total = 0

    for (const cle in panier) {
        monPanier.innerHTML += `
        <tr>
            <td>${panier[cle].nom}</td>
            <td>${panier[cle].quantite}</td>
            <td>${panier[cle].prix} €</td>
        </tr>
        `;
        prix = panier[cle].prix * panier[cle].quantite;
        total += prix ;
    }

    monPanier.innerHTML += `
    <tr>
        <td>Total :</td>
        <td colspan="2" id="total">${total} €</td>
    </tr>
    `;

    document.body.appendChild(monPanier);
}


const btnAdd = document.querySelectorAll(".btnAdd");

btnAdd.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let produit = stock[Object.keys(stock)[index]];

        if (produit.quantite > 0) {
            produit.quantite--;

            if (panier[produit.nom]) {
                panier[produit.nom].quantite++;

            } else {
                panier[produit.nom] = {
                    nom: produit.nom,
                    prix: produit.prix,
                    quantite: 1
                };
            }
            refresh_panier();
        }
    });
});

// CSS
const style = document.createElement("style");
document.head.appendChild(style);

style.innerText = `
    caption {
        text-transform: uppercase;
        font-size: large;
        margin-bottom: 5px;
    }

    table {
        margin: 20px;
        border: 2px solid black;
    }

    td, th {
        padding: 5px;
    }

    th {
        background-color: black;
        color: white;
    }

    td:nth-child(1) {
        width: 100px;
    }

    td:nth-child(2) {
        text-align: center;
    }

    td:nth-child(3) {
        text-align: end;
    }

    #total {
        text-align: end;
        color: red;
    }
`;