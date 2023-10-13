document.getElementsByTagName("title")[0].textContent = "Curriculum Vitae";

function tag_h1(variable, parent, text) {
    variable = document.createElement("h1");
    variable.textContent = text;
    parent.appendChild(variable);
    return(variable);
}

function tag_h2(variable, parent, text) {
    variable = document.createElement("h2");
    variable.textContent = text;
    parent.appendChild(variable);
    return(variable);
}

function tag_div(variable, parent, nomID) {
    variable = document.createElement("div");
    variable.id = nomID;
    parent.appendChild(variable);
    return(variable);
}

function tag_ul(variable, parent) {
    variable = document.createElement("ul");
    parent.appendChild(variable);
    return(variable);
}

function tag_li(variable, parent, text) {
    variable = document.createElement("li");
    variable.textContent = text;
    parent.appendChild(variable);
    return(variable);
}

function tag_img(variable, parent, dimensionWidth, source) {
    variable = new Image();
    variable.src = source;
    variable.style.width = dimensionWidth;
    parent.appendChild(variable);
    return(variable);
}

// HTML
const body = document.body
const header = document.createElement("header");
const main = document.createElement("main");
body.appendChild(header);
body.appendChild(main);

let titre = tag_h1("", main, "CV");
let photo = tag_img("", main, "200px", "./img/daffy_duck.png");

let divProfil = tag_div("", main, "divProfil");
let profil = tag_h2("", divProfil, "Profil");
let ulProfil = tag_ul("", divProfil);
let nom = tag_li("", ulProfil, "Nom : Romero");
let prenom = tag_li("", ulProfil, "Prénom : Marc");
let age = tag_li("", ulProfil, "Âge : 30 ans");

let divLangue = tag_div("", main, "divLangue");
let langues = tag_h2("", divLangue, "Langues");
let ulLangues = tag_ul("", divLangue)
let anglais = tag_li("", ulLangues, "Anglais : Niveau A1");
let espagnol = tag_li("", ulLangues, "Espagnol : Niveau C2");
let français = tag_li("", ulLangues, "Français : Niveau C1");

let divFormations = tag_div("", main, "divFormations");
let formations = tag_h2("", divFormations, "Formations");
let ulFormations = tag_ul("", divFormations);
let proforma = tag_li("", ulFormations, "2023 : Initiatio à la programmation");
let becode = tag_li("", ulFormations, "2023 : Digital sprint");
let construForm = tag_li("", ulFormations, "2019 : Autocad 2D / 3D");
let uLiege = tag_li("", ulFormations, "2015 - 2017 : Bachelier en architecture");

// STYLE
body.style.background = "gray";
body.style.width = "100vw";
body.style.height = "100vh";
body.style.margin = "0";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

main.style.padding = "30px"
main.style.background = "white";
main.style.width = "500px";

titre.style.textAlign = "center";

