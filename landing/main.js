/********** PAETIE 1 RECUPERATION DE TIMESZONES PUIS CALCUL DE LEUR HEURE ************/
const getCities = document.querySelector(".cities");
const getMinor = document.querySelector(".minor");
const userTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
//Création des données (DONNEES)
const majorCities = [
    {
        name: "Paris",
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: true,
        status: "major"
    }, 
    {
        name: "Phoenix", 
        images: {
            day: "../assets/Washington_jour.png", 
            night: "../assets/Washington_Nuit.png"
        },
        clock: true,
        status: "major"
    }, 
    {
        name: "Montevideo", 
        images: {
            day: "../assets/Mexico_jour.png", 
            night: "../assets/Mexico_nuit.png"
        },
        clock: true,
        status: "major"
    }, 
    {
        name: "Sydney", 
        images: {
            day: "../assets/Sydney_jour.png", 
            night: "../assets/Sydney_nuit.png"
        },
        clock: true,
        status: "major"
    }, 
    {
        name: "Tokyo", 
        images: {
            day: "../assets/Tokyo_jour.png", 
            night: "../assets/Tokyo_nuit.png"
        },
        clock: true,
        status: "major"
    }, 
    {
        name: "Casablanca", 
        images: {
            day: "../assets/Le_Caire_jour.png", 
            night: "../assets/Le_Caire_nuit.png"
        },
        clock: false,
        status: "major"
    }, 
];
const minorCities = [
    {
        name: "Baku", 
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
    {
        name: "Cancun", 
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
    {
        name: "Ushuaia", 
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
    {
        name: "Abidjan",
        images: {
            day: "../assets/Paris_jour.png", 
            night: "../assets/Paris_nuit.png"
        },
        clock: false,
        status: "minor"
    }, 
   
];
//Création du tableau de timezones (SOURCE)
const timesZones = [
    `${userTimeZone}`,
    'Africa/Abidjan',
    'Africa/Accra',
    'Africa/Addis_Ababa',
    'Africa/Algiers',
    'Africa/Asmara',
    'Africa/Asmera',
    'Africa/Bamako',
    'Africa/Bangui',
    'Africa/Banjul',
    'Africa/Bissau',
    'Africa/Blantyre',
    'Africa/Brazzaville',
    'Africa/Bujumbura',
    'Africa/Cairo',
    'Africa/Casablanca',
    'Africa/Ceuta',
    'Africa/Conakry',
    'Africa/Dakar',
    'Africa/Dar_es_Salaam',
    'Africa/Djibouti',
    'Africa/Douala',
    'Africa/El_Aaiun',
    'Africa/Freetown',
    'Africa/Gaborone',
    'Africa/Harare',
    'Africa/Johannesburg',
    'Africa/Juba',
    'Africa/Kampala',
    'Africa/Khartoum',
    'Africa/Kigali',
    'Africa/Kinshasa',
    'Africa/Lagos',
    'Africa/Libreville',
    'Africa/Lome',
    'Africa/Luanda',
    'Africa/Lubumbashi',
    'Africa/Lusaka',
    'Africa/Malabo',
    'Africa/Maputo',
    'Africa/Maseru',
    'Africa/Mbabane',
    'Africa/Mogadishu',
    'Africa/Monrovia',
    'Africa/Nairobi',
    'Africa/Ndjamena',
    'Africa/Niamey',
    'Africa/Nouakchott',
    'Africa/Ouagadougou',
    'Africa/Porto-Novo',
    'Africa/Sao_Tome',
    'Africa/Timbuktu',
    'Africa/Tripoli',
    'Africa/Tunis',
    'Africa/Windhoek',
    'America/Adak',
    'America/Anchorage',
    'America/Anguilla',
    'America/Antigua',
    'America/Araguaina',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Catamarca',
    'America/Argentina/ComodRivadavia',
    'America/Argentina/Cordoba',
    'America/Argentina/Jujuy',
    'America/Argentina/La_Rioja',
    'America/Argentina/Mendoza',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Salta',
    'America/Argentina/San_Juan',
    'America/Argentina/San_Luis',
    'America/Argentina/Tucuman',
    'America/Argentina/Ushuaia',
    'America/Aruba',
    'America/Asuncion',
    'America/Atikokan',
    'America/Atka',
    'America/Bahia',
    'America/Bahia_Banderas',
    'America/Barbados',
    'America/Belem',
    'America/Belize',
    'America/Blanc-Sablon',
    'America/Boa_Vista',
    'America/Bogota',
    'America/Boise',
    'America/Buenos_Aires',
    'America/Cambridge_Bay',
    'America/Campo_Grande',
    'America/Cancun',
    'America/Caracas',
    'America/Catamarca',
    'America/Cayenne',
    'America/Cayman',
    'America/Chicago',
    'America/Chihuahua',
    'America/Coral_Harbour',
    'America/Cordoba',
    'America/Costa_Rica',
    'America/Creston',
    'America/Cuiaba',
    'America/Curacao',
    'America/Danmarkshavn',
    'America/Dawson',
    'America/Dawson_Creek',
    'America/Denver',
    'America/Detroit',
    'America/Dominica',
    'America/Edmonton',
    'America/Eirunepe',
    'America/El_Salvador',
    'America/Ensenada',
    'America/Fort_Nelson',
    'America/Fort_Wayne',
    'America/Fortaleza',
    'America/Glace_Bay',
    'America/Godthab',
    'America/Goose_Bay',
    'America/Grand_Turk',
    'America/Grenada',
    'America/Guadeloupe',
    'America/Guatemala',
    'America/Guayaquil',
    'America/Guyana',
    'America/Halifax',
    'America/Havana',
    'America/Hermosillo',
    'America/Indiana/Indianapolis',
    'America/Indiana/Knox',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Tell_City',
    'America/Indiana/Vevay',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indianapolis',
    'America/Inuvik',
    'America/Iqaluit',
    'America/Jamaica',
    'America/Jujuy',
    'America/Juneau',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Knox_IN',
    'America/Kralendijk',
    'America/La_Paz',
    'America/Lima',
    'America/Los_Angeles',
    'America/Louisville',
    'America/Lower_Princes',
    'America/Maceio',
    'America/Managua',
    'America/Manaus',
    'America/Marigot',
    'America/Martinique',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Mendoza',
    'America/Menominee',
    'America/Merida',
    'America/Metlakatla',
    'America/Mexico_City',
    'America/Miquelon',
    'America/Moncton',
    'America/Monterrey',
    'America/Montevideo',
    'America/Montreal',
    'America/Montserrat',
    'America/Nassau',
    'America/New_York',
    'America/Nipigon',
    'America/Nome',
    'America/Noronha',
    'America/North_Dakota/Beulah',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/Ojinaga',
    'America/Panama',
    'America/Pangnirtung',
    'America/Paramaribo',
    'America/Phoenix',
    'America/Port-au-Prince',
    'America/Port_of_Spain',
    'America/Porto_Acre',
    'America/Porto_Velho',
    'America/Puerto_Rico',
    'America/Punta_Arenas',
    'America/Rainy_River',
    'America/Rankin_Inlet',
    'America/Recife',
    'America/Regina',
    'America/Resolute',
    'America/Rio_Branco',
    'America/Rosario',
    'America/Santa_Isabel',
    'America/Santarem',
    'America/Santiago',
    'America/Santo_Domingo',
    'America/Sao_Paulo',
    'America/Scoresbysund',
    'America/Shiprock',
    'America/Sitka',
    'America/St_Barthelemy',
    'America/St_Johns',
    'America/St_Kitts',
    'America/St_Lucia',
    'America/St_Thomas',
    'America/St_Vincent',
    'America/Swift_Current',
    'America/Tegucigalpa',
    'America/Thule',
    'America/Thunder_Bay',
    'America/Tijuana',
    'America/Toronto',
    'America/Tortola',
    'America/Vancouver',
    'America/Virgin',
    'America/Whitehorse',
    'America/Winnipeg',
    'America/Yakutat',
    'America/Yellowknife',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville',
    'Antarctica/Macquarie',
    'Antarctica/Mawson',
    'Antarctica/McMurdo',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/South_Pole',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'Arctic/Longyearbyen',
    'Asia/Aden',
    'Asia/Almaty',
    'Asia/Amman',
    'Asia/Anadyr',
    'Asia/Aqtau',
    'Asia/Aqtobe',
    'Asia/Ashgabat',
    'Asia/Ashkhabad',
    'Asia/Atyrau',
    'Asia/Baghdad',
    'Asia/Bahrain',
    'Asia/Baku',
    'Asia/Bangkok',
    'Asia/Barnaul',
    'Asia/Beirut',
    'Asia/Bishkek',
    'Asia/Brunei',
    'Asia/Calcutta',
    'Asia/Chita',
    'Asia/Choibalsan',
    'Asia/Chongqing',
    'Asia/Chungking',
    'Asia/Colombo',
    'Asia/Dacca',
    'Asia/Damascus',
    'Asia/Dhaka',
    'Asia/Dili',
    'Asia/Dubai',
    'Asia/Dushanbe',
    'Asia/Famagusta',
    'Asia/Gaza',
    'Asia/Harbin',
    'Asia/Hebron',
    'Asia/Ho_Chi_Minh',
    'Asia/Hong_Kong',
    'Asia/Hovd',
    'Asia/Irkutsk',
    'Asia/Istanbul',
    'Asia/Jakarta',
    'Asia/Jayapura',
    'Asia/Jerusalem',
    'Asia/Kabul',
    'Asia/Kamchatka',
    'Asia/Karachi',
    'Asia/Kashgar',
    'Asia/Kathmandu',
    'Asia/Katmandu',
    'Asia/Khandyga',
    'Asia/Kolkata',
    'Asia/Krasnoyarsk',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Asia/Kuwait',
    'Asia/Macao',
    'Asia/Macau',
    'Asia/Magadan',
    'Asia/Makassar',
    'Asia/Manila',
    'Asia/Muscat',
    'Asia/Nicosia',
    'Asia/Novokuznetsk',
    'Asia/Novosibirsk',
    'Asia/Omsk',
    'Asia/Oral',
    'Asia/Phnom_Penh',
    'Asia/Pontianak',
    'Asia/Pyongyang',
    'Asia/Qatar',
    'Asia/Qyzylorda',
    'Asia/Rangoon',
    'Asia/Riyadh',
    'Asia/Saigon',
    'Asia/Sakhalin',
    'Asia/Samarkand',
    'Asia/Seoul',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Srednekolymsk',
    'Asia/Taipei',
    'Asia/Tashkent',
    'Asia/Tbilisi',
    'Asia/Tehran',
    'Asia/Tel_Aviv',
    'Asia/Thimbu',
    'Asia/Thimphu',
    'Asia/Tokyo',
    'Asia/Tomsk',
    'Asia/Ujung_Pandang',
    'Asia/Ulaanbaatar',
    'Asia/Ulan_Bator',
    'Asia/Urumqi',
    'Asia/Ust-Nera',
    'Asia/Vientiane',
    'Asia/Vladivostok',
    'Asia/Yakutsk',
    'Asia/Yangon',
    'Asia/Yekaterinburg',
    'Asia/Yerevan',
    'Atlantic/Azores',
    'Atlantic/Bermuda',
    'Atlantic/Canary',
    'Atlantic/Cape_Verde',
    'Atlantic/Faeroe',
    'Atlantic/Faroe',
    'Atlantic/Jan_Mayen',
    'Atlantic/Madeira',
    'Atlantic/Reykjavik',
    'Atlantic/South_Georgia',
    'Atlantic/St_Helena',
    'Atlantic/Stanley',
    'Australia/ACT',
    'Australia/Adelaide',
    'Australia/Brisbane',
    'Australia/Broken_Hill',
    'Australia/Canberra',
    'Australia/Currie',
    'Australia/Darwin',
    'Australia/Eucla',
    'Australia/Hobart',
    'Australia/LHI',
    'Australia/Lindeman',
    'Australia/Lord_Howe',
    'Australia/Melbourne',
    'Australia/NSW',
    'Australia/North',
    'Australia/Perth',
    'Australia/Queensland',
    'Australia/South',
    'Australia/Sydney',
    'Australia/Tasmania',
    'Australia/Victoria',
    'Australia/West',
    'Australia/Yancowinna',
    'Brazil/Acre',
    'Brazil/DeNoronha',
    'Brazil/East',
    'Brazil/West',
    'CET',
    'CST6CDT',
    'Canada/Atlantic',
    'Canada/Central',
    'Canada/Eastern',
    'Canada/Mountain',
    'Canada/Newfoundland',
    'Canada/Pacific',
    'Canada/Saskatchewan',
    'Canada/Yukon',
    'Chile/Continental',
    'Chile/EasterIsland',
    'Cuba',
    'EET',
    'EST',
    'EST5EDT',
    'Egypt',
    'Eire',
    'Etc/GMT',
    'Etc/GMT+0',
    'Etc/GMT+1',
    'Etc/GMT+10',
    'Etc/GMT+11',
    'Etc/GMT+12',
    'Etc/GMT+2',
    'Etc/GMT+3',
    'Etc/GMT+4',
    'Etc/GMT+5',
    'Etc/GMT+6',
    'Etc/GMT+7',
    'Etc/GMT+8',
    'Etc/GMT+9',
    'Etc/GMT-0',
    'Etc/GMT-1',
    'Etc/GMT-10',
    'Etc/GMT-11',
    'Etc/GMT-12',
    'Etc/GMT-13',
    'Etc/GMT-14',
    'Etc/GMT-2',
    'Etc/GMT-3',
    'Etc/GMT-4',
    'Etc/GMT-5',
    'Etc/GMT-6',
    'Etc/GMT-7',
    'Etc/GMT-8',
    'Etc/GMT-9',
    'Etc/GMT0',
    'Etc/Greenwich',
    'Etc/UCT',
    'Etc/UTC',
    'Etc/Universal',
    'Etc/Zulu',
    'Europe/Amsterdam',
    'Europe/Andorra',
    'Europe/Astrakhan',
    'Europe/Athens',
    'Europe/Belfast',
    'Europe/Belgrade',
    'Europe/Berlin',
    'Europe/Bratislava',
    'Europe/Brussels',
    'Europe/Bucharest',
    'Europe/Budapest',
    'Europe/Busingen',
    'Europe/Chisinau',
    'Europe/Copenhagen',
    'Europe/Dublin',
    'Europe/Gibraltar',
    'Europe/Guernsey',
    'Europe/Helsinki',
    'Europe/Isle_of_Man',
    'Europe/Istanbul',
    'Europe/Jersey',
    'Europe/Kaliningrad',
    'Europe/Kiev',
    'Europe/Kirov',
    'Europe/Lisbon',
    'Europe/Ljubljana',
    'Europe/London',
    'Europe/Luxembourg',
    'Europe/Madrid',
    'Europe/Malta',
    'Europe/Mariehamn',
    'Europe/Minsk',
    'Europe/Monaco',
    'Europe/Moscow',
    'Europe/Nicosia',
    'Europe/Oslo',
    'Europe/Paris',
    'Europe/Podgorica',
    'Europe/Prague',
    'Europe/Riga',
    'Europe/Rome',
    'Europe/Samara',
    'Europe/San_Marino',
    'Europe/Sarajevo',
    'Europe/Saratov',
    'Europe/Simferopol',
    'Europe/Skopje',
    'Europe/Sofia',
    'Europe/Stockholm',
    'Europe/Tallinn',
    'Europe/Tirane',
    'Europe/Tiraspol',
    'Europe/Ulyanovsk',
    'Europe/Uzhgorod',
    'Europe/Vaduz',
    'Europe/Vatican',
    'Europe/Vienna',
    'Europe/Vilnius',
    'Europe/Volgograd',
    'Europe/Warsaw',
    'Europe/Zagreb',
    'Europe/Zaporozhye',
    'Europe/Zurich',
    'GB',
    'GB-Eire',
    'GMT',
    'GMT+0',
    'GMT-0',
    'GMT0',
    'Greenwich',
    'HST',
    'Hongkong',
    'Iceland',
    'Indian/Antananarivo',
    'Indian/Chagos',
    'Indian/Christmas',
    'Indian/Cocos',
    'Indian/Comoro',
    'Indian/Kerguelen',
    'Indian/Mahe',
    'Indian/Maldives',
    'Indian/Mauritius',
    'Indian/Mayotte',
    'Indian/Reunion',
    'Iran',
    'Israel',
    'Jamaica',
    'Japan',
    'Kwajalein',
    'Libya',
    'MET',
    'MST',
    'MST7MDT',
    'Mexico/BajaNorte',
    'Mexico/BajaSur',
    'Mexico/General',
    'NZ',
    'NZ-CHAT',
    'Navajo',
    'PRC',
    'PST8PDT',
    'Pacific/Apia',
    'Pacific/Auckland',
    'Pacific/Bougainville',
    'Pacific/Chatham',
    'Pacific/Chuuk',
    'Pacific/Easter',
    'Pacific/Efate',
    'Pacific/Enderbury',
    'Pacific/Fakaofo',
    'Pacific/Fiji',
    'Pacific/Funafuti',
    'Pacific/Galapagos',
    'Pacific/Gambier',
    'Pacific/Guadalcanal',
    'Pacific/Guam',
    'Pacific/Honolulu',
    'Pacific/Johnston',
    'Pacific/Kiritimati',
    'Pacific/Kosrae',
    'Pacific/Kwajalein',
    'Pacific/Majuro',
    'Pacific/Marquesas',
    'Pacific/Midway',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Norfolk',
    'Pacific/Noumea',
    'Pacific/Pago_Pago',
    'Pacific/Palau',
    'Pacific/Pitcairn',
    'Pacific/Pohnpei',
    'Pacific/Ponape',
    'Pacific/Port_Moresby',
    'Pacific/Rarotonga',
    'Pacific/Saipan',
    'Pacific/Samoa',
    'Pacific/Tahiti',
    'Pacific/Tarawa',
    'Pacific/Tongatapu',
    'Pacific/Truk',
    'Pacific/Wake',
    'Pacific/Wallis',
    'Pacific/Yap',
    'Poland',
    'Portugal',
    'ROC',
    'ROK',
    'Singapore',
    'Turkey',
    'UCT',
    'US/Alaska',
    'US/Aleutian',
    'US/Arizona',
    'US/Central',
    'US/East-Indiana',
    'US/Eastern',
    'US/Hawaii',
    'US/Indiana-Starke',
    'US/Michigan',
    'US/Mountain',
    'US/Pacific',
    'US/Pacific-New',
    'US/Samoa',
    'UTC',
    'Universal',
    'W-SU',
    'WET',
    'Zulu',
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
    }
}



// Mecanique d'initialisation de la rotation en fonction du tems converti en degrés



// STEP 2 - Récupérer la donnée d'heure et de minute de la BDD grâce à mon index de DONNEE  (DONNEE UPDATED --> INJECTION HTML)
/********** PARTIE 3 - CREATION DE LA LOGIQUE DE TEMPLATING ************/

// Ajout de l'heure local du user dans le HTML
const local = document.querySelector("#userTimeZone");
local.innerHTML = setDateLocal(timesZones)[0].dateLocal.dateLocal.split(":")[0];

// 1) On crée la logique de creation d'un bloc
function createBlock (city){

    if (city.status === "major") {

        // Logique nav --> marche pas forcément --> check ID undifenied
        // const nav = document.querySelector(".navDesktop");
        // const ul = document.createElement("ul"); 
        // nav.appendChild(ul);
        
        // const li = document.createElement("li");
        // li.innerHTML = `<a href="#${city.value}">${city.name}</a>`
        // ul.appendChild(li);



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


            hourHand.style.setProperty('--hour-degres', `rotate(${city.hoursDegres}deg)`);
            minuteHand.style.setProperty('--minute-degres', `rotate(${city.minutesDegres}deg)`);
            secondHand.style.setProperty('--second-degres', `rotate(${city.secondsDegres}deg)`);

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
    
    // Je réinialise le dom pour ajouter les nouvelles données de l'horloge
    getCities.innerHTML = "";
    getMinor.innerHTML = "";
    
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

