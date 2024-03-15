const timesZones = [
    'America/Mexico_City',
    'Europe/Paris',
    'Asia/Tokyo',
    'Europe/London', 
    'Europe/Madrid', 

];

// Mecanique de récupération de l'heure par timeZone
function dateLocal (timeZone) {
    const date = new Date();
    const dateLocal = new Intl.DateTimeFormat('fr-FR', {
        timeStyle: 'short',
        timeZone: timeZone,
    }).format(date);
    return dateLocal;

}

function setDateLocal() {
    const datesLocales = [];
    for (i = 0; i < timesZones.length; i++) {
        const timeZone = timesZones[i];
        datesLocales.push(dateLocal(timeZone));
    }
    return datesLocales;
}

console.log(setDateLocal());



// Données en entrée sur papier 
//Données en sortie sur papier
// idée de base : boucler --> donc focus sur elle 
// init d'une constante donc --> on affecte la valeur, ici notre date local dans la boucle















// function initialisation () {
//     timesZones.forEach(timeZone => {
//         console.log(timeZone + " " + DateLocal(timeZone));
//     });
// }


