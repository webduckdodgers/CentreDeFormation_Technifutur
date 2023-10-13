document.title = "Panier courses";

let containerArticle = document.createElement("ul");
containerArticle.id = "articleList";
document.body.appendChild(containerArticle);

let containerPanier = document.createElement("ul");
containerPanier.id = "panier";
document.body.appendChild(containerPanier);

let articles = {
    pomme : 0.5,
    poire : 0.4,
    banane : 0.45,
    raisin : 0.05,
    melon : 2.5,
    ananas : 4,
    myrtille : 0.02,
    pasteque : 5
}

let panier = {
}

let addFruit = (produit) => {
    if (panier[produit]) {
        panier[produit]++;
    } else {
        panier[produit] = 1;   
    }
    refreshPanier()
}

let removeFruit = (produit) => {
    if (panier[produit]) {
        if (panier[produit] > 1) {
            panier[produit]--;
        } else {
            delete panier[produit]
        }
    }
    refreshPanier()
}

let refreshPanier = () => {
    let listPanier = document.getElementById("panier");
    listPanier.textContent = "";
    let totalPanier = 0;

    for (const index in panier) {
        let prixElement = panier[index] * articles[index];
        totalPanier += prixElement;
        let li = document.createElement("li");
        li.innerText = `${index} : ${prixElement.toFixed(2)} €`;
        listPanier.appendChild(li);
    }

    let p = document.createElement("p");
    p.innerText = `Prix total : ${totalPanier.toFixed(2)} €`;
    listPanier.appendChild(p);
}

let articleList = document.getElementById("articleList");

for (const index in articles) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = `${index} : ${articles[index].toFixed(2)} €`;
    li.appendChild(p);
    let btnAdd = document.createElement("button");
    btnAdd.onclick = () => { addFruit(index) }
    btnAdd.innerText = "Ajouter";
    li.appendChild(btnAdd);
    let btnRemove = document.createElement("button");
    btnRemove.onclick = () => { removeFruit(index) }
    btnRemove.textContent = "Retirer";
    li.appendChild(btnRemove);

    articleList.appendChild(li)
}