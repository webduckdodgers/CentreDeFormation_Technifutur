/*
    Page : 174 / 234

    1)  Affichez l’heure actuelle (heure : minutes : secondes)
        dans le titre de la fenêtre de votre navigateur
        en utilisant setTimeout et ensuite setInterval.
*/

// setInterval(function(){
//     const date = new Date();

//     let heure   = date.getHours();
//     if (heure < 10) { heure = "0" + heure; }
//     let minute  = date.getMinutes();
//     if (minute < 10) { minute = "0" + minute; }
//     let seconde = date.getSeconds();
//     if (seconde < 10) { seconde = "0" + seconde; }

//     document.title = `${heure} : ${minute} : ${seconde}`;
// }, 1000);


// let show_hour = () => {
//     let hour = new Date().toLocaleTimeString("fr-FR",{
//         hour : "2-digit", minute :"2-digit", second : "2-digit"
//     })
//     document.title = hour;
// }

// show_hour()
// setInterval(show_hour,1000)


/*
    Page : 174 / 234

    2)  Affichez la date et l’heure sur votre page web.
*/

let tag = document.createElement("div");
document.body.appendChild(tag);

let horloge = () => {
    const date = new Date();

    let jour = date.getDate();
    let tabSemaine = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
    let semaine = tabSemaine[date.getDay()];
    let tabMois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","decembre"];
    let mois = tabMois[date.getMonth()];
    
    let heure = date.getHours();
    if (heure < 10) { heure = "0" + heure; }
    let minute = date.getMinutes();
    if (minute < 10) { minute = "0" + minute; }
    let seconde = date.getSeconds();
    if (seconde < 10) { seconde = "0" + seconde; }

    tag.innerHTML = `
    <p>${semaine} ${jour} ${mois}</p>
    <p>${heure} : ${minute} : ${seconde}</p>
    `;
}

horloge()
setInterval(horloge, 1000)

