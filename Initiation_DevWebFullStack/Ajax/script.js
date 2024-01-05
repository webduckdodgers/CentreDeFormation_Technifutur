import * as funct from "./functions.js";

const tagInputNumber = document.querySelector("input");
const tagButton = document.getElementsByTagName("button")[0];
const tagMain = document.getElementsByTagName("main")[0];

let pokemonID = null;
let tagImg = null;
let tagH2 = null;

tagButton.addEventListener("click", () => {
  pokemonID = tagInputNumber.value;

  if (pokemonID >= 1 && pokemonID <= 151) {
    if (tagH2) {
      tagMain.removeChild(tagH2);
    }

    if (tagImg) {
      tagMain.removeChild(tagImg);
    }

    funct.requestGet(
      `https://pokeapi.co/api/v2/pokemon/${pokemonID}`,
      (data) => {
        tagH2 = document.createElement("h2");
        tagH2.innerText = data["name"];
        tagMain.appendChild(tagH2);

        tagImg = document.createElement("img");
        tagImg.src = data["sprites"]["front_default"];
        tagMain.appendChild(tagImg);
      }
    );
  }
});
