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
        hours: "00",
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
        hours: "00",
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
        hours: "00",
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
        hours: "00",
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

    const newBlock = `<section class="cities"  id="${city.value}">
    <h2>${city.name}</h2>
    <p class="time">${city.hours}h<br class="mobile">${city.minutes}</p>
</section>
<hr>`;

    return newBlock;
}

// 2) Resultat : on a une chaine de caractère avec tous nos blocs à la suite

function loopBlock (array) {
    let blocks = "";

    for (let i = 0; i < array.length; i++) {
        blocks = blocks + createBlock(array[i]);
    }

    return blocks;
}

const blocks = document.querySelector(".blocks");
blocks.innerHTML = loopBlock(majorCities);

console.log(blocks.innerHTML)