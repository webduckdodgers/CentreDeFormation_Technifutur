
/*
    Page : 157 / 234

    1)  Créez un programme qui permet d’ajouter un élément à une liste
        lorsque l’on clique sur un bouton.
*/

// let btn = document.createElement("button");
// document.body.appendChild(btn);
// btn.textContent = "Ajouter element";

// let ul = document.createElement("ul");
// document.body.appendChild(ul);

// btn.onclick = () => {
//     let li = document.createElement("li");
//     li.innerHTML = "item";
//     ul.appendChild(li)
// }

/*
        Page : 158 / 234

    2)  En reprenant le code précédent,
        permettre à l’utilisateur d’écrire l’élément à l’aide d’un input.
*/

let form = document.createElement("form");
document.body.appendChild(form);

let text = document.createElement("input");
form.appendChild(text);
text.type = "text";
text.maxLength = 30;
text.placeholder = "Entrée un mot";

let btn = document.createElement("input");
form.appendChild(btn);
btn.type = "button";
btn.value = "Ajouter element";

let ul = document.createElement("ul");
document.body.appendChild(ul);


btn.addEventListener("click", ajouter_un_mot)

function ajouter_un_mot() {
    if (text.value == ""*"") {
        alert("Erreur ! \nChamp vide..");
    } else {
        let li = document.createElement("li");
        li.innerText = text.value;
        ul.appendChild(li);
        text.value = null;
    }
}
