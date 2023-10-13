let articles = [
    { nom: 'pomme', prix : 0.5 },
    { nom: 'poire', prix : 0.4 },
    { nom: 'banane', prix : 0.45 },
    { nom: 'raisin', prix : 0.05 },
    { nom: 'melon', prix : 2.5 },
    { nom: 'ananas', prix : 4 },
    { nom: 'myrtille', prix : 0.02 },
    { nom: 'pasteque', prix : 5 },
    { nom: 'fraise', prix : 0.2 },
];

let panier = {
}

let AddFruit = (name) => {
    if(panier[name]){
        panier[name]++;
    }
    else{
        panier[name] = 1
    }
    refreshPanier()
}

let removeFruit = (name) => {
    if(panier[name]){
        if(panier[name] > 1){
            panier[name]--
        }
        else{
            delete panier[name]
        }
    }
    refreshPanier()
}

let refreshPanier = () => {
    let ulPanier = document.getElementById("panier")
    ulPanier.innerHTML = ""
    let totalPanier = 0

    for (const key in panier) {

        let prixElement = panier[key] * articles.find(a => a.nom === key).prix
        totalPanier += prixElement

        let li = document.createElement("li")
        li.innerText = `${key} : ${prixElement}€`
        ulPanier.appendChild(li)

    }

    let p = document.createElement("p")
    p.innerText = `Prix Total : ${totalPanier}€`
    ulPanier.appendChild(p)

}

let tbody = document.querySelector("#articles>tbody");
let searchItems = document.querySelectorAll('input')[0];
let searchPriceMin = document.querySelectorAll('input')[1];
let searchPriceMax = document.querySelectorAll('input')[2];

const refreshArticle = () => {
    tbody.innerHTML = '';
    for (const fruit of articles.filter(a => 
        a.nom.toLowerCase().includes(searchItems.value.toLowerCase())
        && (a.prix >= searchPriceMin.value || !searchPriceMin.value)
        && (a.prix <= searchPriceMax.value || !searchPriceMax.value))) {
            
        let tr = document.createElement("tr")
    
        let tdNom = document.createElement("td")
        tdNom.innerText = `${fruit.nom}`
        tr.appendChild(tdNom);
    
        let tdPrix = document.createElement("td")
        tdPrix.innerText = `${fruit.prix}€`
        tr.appendChild(tdPrix);
    
        const tdActions = document.createElement('td');
    
        let btnAdd = document.createElement("button");
        btnAdd.addEventListener('click', () => {
            AddFruit(fruit.nom);
        });
        btnAdd.innerText = "Ajouter";
        tdActions.appendChild(btnAdd);
    
        let btnRemove = document.createElement("button")
        btnRemove.addEventListener('click', () => {
            removeFruit(fruit.nom);
        });
        btnRemove.innerText = "Retirer";
        tdActions.appendChild(btnRemove);
    
        tr.appendChild(tdActions);
    
        tbody.appendChild(tr);
    }
}

refreshArticle();

const sortItems = document.querySelectorAll('#articles th[data-sortValue]');

for(let item of sortItems) {
    item.addEventListener('click', () => {
        // récupérer tous les valeurs des attributs data-...
        // ex: { sortvalue: 'prix', sortorder: -1 }
        const dataset = item.dataset; 

        // trier par la propriété (sortvalue) multiplié par -1 ou 1 (sortorder) 
        articles.sort((a, b) => 
            dataset.sortorder * a[dataset.sortvalue].toString()
                .localeCompare(b[dataset.sortvalue].toString())
        );

        // modifie la valeur de l'attribut (data-sortOrder) par 1 ou -1
        dataset.sortorder *= -1;
        // item.setAttribute('data-sortOrder', dataset.sortorder * -1)
        for(let th of sortItems) {
            th.classList.remove('active');
        }
        item.classList.add('active');

        refreshArticle();
    });
}
