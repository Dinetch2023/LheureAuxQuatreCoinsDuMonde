// Tableau pour le templating
const majorCities = [
    {
        name: "Paris", 
        hours: "00",
        minutes: "00",
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: false,
        value: "paris",
    }, 
    {
        name: "Washington", 
        hours: "00",
        minutes: "00",
        images: {
            day: "../assets/Washington_jour.png", 
            night: "../assets/Washington_Nuit.png"
        },
        clock: false,
        value: "washington",
    }, 
    {
        name: "Mexico", 
        hours: "02",
        minutes: "00",
        images: {
            day: "../assets/Mexico_jour.png", 
            night: "../assets/Mexico_nuit.png"
        },
        clock: false,
        value: "mexico",
    }, 
    {
        name: "Sydney", 
        hours: "03",
        minutes: "00",
        images: {
            day: "../assets/Sydney_jour.png", 
            night: "../assets/Sydney_nuit.png"
        },
        clock: false,
        value: "sydney",
    }, 
    {
        name: "Tokyo", 
        hours: "04",
        minutes: "00",
        images: {
            day: "../assets/Tokyo_jour.png", 
            night: "../assets/Tokyo_nuit.png"
        },
        clock: false,
        value: "tokyo",
    }, 
    {
        name: "Le Caire", 
        hours: "05",
        minutes: "00",
        images: {
            day: "../assets/Le_Caire_jour.png", 
            night: "../assets/Le_Caire_nuit.png"
        },
        clock: false,
        value: "leCaire",
    }, 
];


// 1) On crée la logique de creation d'un bloc
function createBlock (city){

    const article = document.createElement("article");
    article.classList.add("city", "generic");
    article.setAttribute("id", city.value);

    article.style.setProperty('--img-city', `url(${city.images.day})`)


    const h2 = document.createElement("h2")
    h2.textContent = city.name;

    article.appendChild(h2);

    const p = document.createElement("p")
    p.classList.add('time');
    p.innerHTML = `${city.hours}h <br class="mobile" /> ${city.minutes}`

    article.appendChild(p)


    return article;
}

// 2) Resultat : on a une chaine de caractère avec tous nos blocs à la suite

function loopBlock (array) {
    let blocks = document.createElement("div");

    for (let i = 0; i < array.length; i++) {
        blocks.appendChild(createBlock(array[i]));
    }

    return blocks;
}

const cities = document.querySelector(".cities");
cities.appendChild(loopBlock(majorCities));