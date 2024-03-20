/********** PAETIE 1 RECUPERATION DE TIMESZONES PUIS CALCUL DE LEUR HEURE ************/
const getCities = document.querySelector(".cities");
const getMinor = document.querySelector(".minor");
const getNavigation = document.querySelector("nav");
const userTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
//Création des données (DONNEES)
const majorCities = [
    {
        name: "Paris",
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: false,
        status: "major"
    }, 
    {
        name: "Chicago", 
        images: {
            day: "../assets/Chicago_jour.png", 
            night: "../assets/Chicago_Nuit.png"
        },
        clock: false,
        status: "major"
    }, 
    {
        name: "Johannesburg", 
        images: {
            day: "../assets/Johannesburg_jour.png", 
            night: "../assets/Johannesburg_nuit.png"
        },
        clock: false,
        status: "major"
    }, 
    {
        name: "Sydney", 
        images: {
            day: "../assets/Sydney_jour.png", 
            night: "../assets/Sydney_nuit.png"
        },
        clock: false,
        status: "major"
    }, 
    {
        name: "Tokyo", 
        images: {
            day: "../assets/Tokyo_jour.png", 
            night: "../assets/Tokyo_nuit.png"
        },
        clock: false,
        status: "major"
    }, 
    {
        name: "Casablanca", 
        images: {
            day: "../assets/Casablanca_jour.png", 
            night: "../assets/Casablanca_nuit.png"
        },
        clock: false,
        status: "major"
    }, 
];
const minorCities = [
    {
        name: "Baku", 
        images: {
            day: "../assets/Baku_jour.png", 
            night: "../assets/Baku_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
    {
        name: "Cancun", 
        images: {
            day: "../assets/Cancun_jour.png", 
            night: "../assets/Cancun_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
    {
        name: "Auckland", 
        images: {
            day: "../assets/Auckland_jour.png", 
            night: "../assets/Auckland_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
    {
        name: "Reykjavik",
        images: {
            day: "../assets/Reykjavik_jour.png", 
            night: "../assets/Reykjavik_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
   
];
//Création du tableau de timezones (SOURCE)
const timesZones = [
    `${userTimeZone}`,
    

    'Africa/Casablanca',
    'Africa/Johannesburg',
    
    'America/Cancun',
    'America/Chicago',


    'Asia/Baku',

    
  
    'Asia/Tokyo',
    'Australia/Sydney',
    
   
    'Atlantic/Reykjavik',
    'Europe/Paris',
   
    'Pacific/Auckland',
    
    ];

// Manipulation de la source pour y appliquer des valeurs de l'heure locale par TimeZone (SOURCE --> MAJ SOURCE)
function setDateLocal(timesZones) {

    //set array empty to populate data
    const datesLocales = [];
    for (i = 0; i < timesZones.length; i++) {
        let timeZone = timesZones[i];

        //Initialisation de la date puis ajout d'options pour la formater
        const date = new Date ();
        const dateLocal = new Intl.DateTimeFormat('fr-FR', {
            timeStyle: 'long',
            timeZone: timeZone,
        }).format(date).replace(":", "h");

        //Calcul des degrés de rotation pour chaque timezone
        const seconds = Number(dateLocal.split(":")[1].split(" ")[0]);
        const minutes = Number(dateLocal.split("h")[1].split(":")[0]);
        const hours = Number(dateLocal.split("h")[0]);

        const secondsRatio = (seconds / 60);
        const minutesRatio = ((secondsRatio + minutes) / 60);
        const hoursRatio = ((minutesRatio + hours) / 12);

        const secondsDegres = (secondsRatio * 360);
        const minutesDegres = (minutesRatio * 360);
        const hourDegres = (hoursRatio * 360) - 360;


        // Populate le tableau d'objets
        datesLocales.push({
            timeZone: {
                zone: timeZone.split("/")[0],
                area: timeZone.split("/")[2] ? timeZone.split("/")[2] : timeZone.split("/")[1] && timeZone.split("/")[1] ? timeZone.split("/")[1] : timeZone,
                timeZone
            }, 
            dateLocal: {
                hours: dateLocal.split("h")[0],
                minutes: dateLocal.split("h")[1].split(":")[0],
                secondes: dateLocal.split(":")[1].split(" ")[0],
                utc: dateLocal.split(":")[1].split(" ")[1],
                dateLocal
            },
            degres: {
                hours: hourDegres,
                minutes: minutesDegres,
                seconds: secondsDegres,
            }, 
        });
    }
    // Resultat : un tableau des heures locales par timeZone
    return datesLocales
}

// Creation d'un tableaux d'objets (LA BDD) pour récupérer les données de la function (SOURCE --> BDD)
// const formatedTimesZonesArray = setDateLocal(timesZones);

// Creation d'une fonction search pour matcher la MajorCity (DONNEES) avec la BDD (DONNEES in BDD ?)
function search(nameKey, arrayBDD){
    for (let i=0; i < arrayBDD.length; i++) {
        if (arrayBDD[i].timeZone.area === nameKey) {
            return i;
        }
    }
}


/********** PARTIE 2: FORMATAGE DES DONNEES POUR LE TEMPLATING ************/

// STEP 1 - trouver l'index de la MajorCity (DONNEE) dans le tableau de BDD (INDEX DONNEES IN BDD ?)
function updateDataArray(arrayToCheck, arrayBDD) {
    for (let i = 0; i < arrayToCheck.length; i++) {
        // J'ajoute un index à mon objet de ma cities
        arrayToCheck[i].indexBDD = search(arrayToCheck[i].name, arrayBDD); 

        // J'ajoute les informations de mon horloge
        arrayToCheck[i].hours = arrayBDD[arrayToCheck[i].indexBDD].dateLocal.hours;
        arrayToCheck[i].minutes = arrayBDD[arrayToCheck[i].indexBDD].dateLocal.minutes;
        arrayToCheck[i].secondes = arrayBDD[arrayToCheck[i].indexBDD].dateLocal.secondes;

        // J'ajoute la valeur UTC à mon objet
        arrayToCheck[i].utc = arrayBDD[arrayToCheck[i].indexBDD].dateLocal.utc;
        arrayToCheck[i].name = arrayBDD[arrayToCheck[i].indexBDD].timeZone.area;
        arrayToCheck[i].value = arrayBDD[arrayToCheck[i].indexBDD].timeZone.area.toLowerCase();

        // Les mêmes info que précédent mais pour l'horloge analogique
        arrayToCheck[i].hoursDegres = arrayBDD[arrayToCheck[i].indexBDD].degres.hours;
        arrayToCheck[i].minutesDegres = arrayBDD[arrayToCheck[i].indexBDD].degres.minutes;
        arrayToCheck[i].secondsDegres = arrayBDD[arrayToCheck[i].indexBDD].degres.seconds;  

        // switch général horloge ou analogique
        const input = document.querySelector("input[name=horlogerie]");
        input.addEventListener('change', function() {
            if (input.checked) {
                arrayToCheck[i].clock = true;
            } else {
                arrayToCheck[i].clock = false;
            }
            });

    }
}


// STEP 2 - Récupérer la donnée d'heure et de minute de la BDD grâce à mon index de DONNEE  (DONNEE UPDATED --> INJECTION HTML)
/********** PARTIE 3 - CREATION DE LA LOGIQUE DE TEMPLATING ************/

// Ajout de l'heure local du user dans le HTML
const local = document.querySelector("#userTimeZone");
local.innerHTML = setDateLocal(timesZones)[0].dateLocal.dateLocal.split(":")[0];

// 1) On crée la logique de creation d'un bloc
function createBlock (city){

    if (city.status === "major") {

        const nav = document.querySelector(".navDesktop");
        const ul = document.createElement("ul"); 
        nav.appendChild(ul);
        
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${city.value}">${city.name}</a>`
        ul.appendChild(li);



        const article = document.createElement("article");
        article.classList.add("city");
        article.setAttribute("id", city.value);

        if ( city.hours >= 6 && city.hours < 19 ) {
            article.style.setProperty('--img-city', `url(${city.images.day})`)
        } else {
            article.style.setProperty('--img-city', `url(${city.images.night})`)
        }

        const h2 = document.createElement("h2")
        h2.textContent = city.name;

        article.appendChild(h2);

        
        if (city.clock === false) {
            const p = document.createElement("p")
            p.classList.add('time');
            p.innerHTML = `${city.hours ? city.hours : "00"}h${city.minutes ? city.minutes : "00"}`

            article.appendChild(p)
        } else {
            const clock = document.createElement("div")
            clock.classList.add('clock');

            //On sélectionne les aiguilles
            const hourHand = document.createElement('div');
            hourHand.classList.add('hour');
            const minuteHand = document.createElement('div');
            minuteHand.classList.add('minute');
            const secondHand = document.createElement('div');
            secondHand.classList.add('second');
            const round = document.createElement('div');
            round.classList.add('round');


             //On set nos degres
            hourHand.style.setProperty('--hours-degres', `rotate(${city.hoursDegres}deg)`);
            minuteHand.style.setProperty('--minutes-degres', `rotate(${city.minutesDegres}deg)`);
            secondHand.style.setProperty('--seconds-degres', `rotate(${city.secondsDegres}deg)`);

            clock.innerHTML = `
            <div>12</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        `
            article.appendChild(clock)
            clock.appendChild(hourHand);
            clock.appendChild(minuteHand);
            clock.appendChild(secondHand);
            clock.appendChild(round);
        }

        



        return article;

    } else if (city.status === "minor") {

        const article = document.createElement("article");
        article.setAttribute("id", city.value);

        const img = document.createElement("img")
        img.classList.add("imgMinor");

        if ( city.hours >= 6 && city.hours < 19 ) {
        img.src = city.images.day;
        } else {
            img.src = city.images.night;
        }

        article.appendChild(img);

        const h3 = document.createElement("h3")
        h3.textContent = city.name;

        article.appendChild(h3);

        const p = document.createElement("p")
        p.innerHTML = `${city.hours}h${city.minutes}`
        article.appendChild(p)

        return article;

    }

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
const minor = document.querySelector(".minor");

    
setInterval(() => {
    updateDataArray(majorCities, setDateLocal(timesZones));
    updateDataArray(minorCities, setDateLocal(timesZones)); 
    const local = document.querySelector("#userTimeZone");
    local.innerHTML = setDateLocal(timesZones)[0].dateLocal.dateLocal.split(":")[0];
    
    // Je réinialise le dom pour ajouter les nouvelles données de l'horloge / de la nav / 
    getCities.innerHTML = "";
    getMinor.innerHTML = "";
    getNavigation.innerHTML = "";
    
    // update les villes
    cities.appendChild(loopBlock(majorCities));
    minor.appendChild(loopBlock(minorCities));
}, 1000);

cities.appendChild(loopBlock(majorCities));
minor.appendChild(loopBlock(minorCities));


/**
 * Ajout d'un setTimeout d'une second pour avoir le temps d'accèder aux horloges du monde entier :)
 * Un petit loader avec l'html <progress />
 */
