/******** TRAVAIL A FAIRE AJOUT DE L'OPTION LOCAL POUR CALCUL HORLOGE ******** */
// Date.prototype.setHours()
/******** TRAVAIL A FAIRE faire un SET HOURS POUR RUSER L'HORLOGE (meme si faux en vrai) ******** */



      function init() {
            setRotation(setDegres());
      }
      
      // Mecanique de convertion du temps écoulé en dégrés sur l'horloge
      function setDegres () {
            const date = new Date();

            // RECUPERER HEURES ET MINUTES DE NOTRE TABLEAU DE MAJEURS !!! PENSER A BIEN RECUPERER UN NUMBER
            // date.setHours(20)
            // date.setMinutes(20)

            const seconds = date.getSeconds();
            const minutes = date.getMinutes();
            const hours = date.getHours();

            const secondsRatio = (seconds / 60);
            const minutesRatio = ((secondsRatio + minutes) / 60);
            const hoursRatio = ((minutesRatio + hours) / 12);

            const secondsDegres = (secondsRatio * 360);
            const minutesDegres = (minutesRatio * 360);
            const hourDegres = (hoursRatio * 360);

            return results = [hourDegres, minutesDegres, secondsDegres];
      };

      
      // Mecanique d'initialisation de la rotation en fonction du tems converti en degrés
      function setRotation (degres) {
            const hourHand = document.querySelector('.hour');
            const minuteHand = document.querySelector('.minute');
            const secondHand = document.querySelector('.second');

            hourHand.style.transform = `rotate(${degres[0]}deg)`;
            minuteHand.style.transform = `rotate(${degres[1]}deg)`;
            secondHand.style.transform = `rotate(${degres[2]}deg)`;
      };

      //callback de setRotation via setDegres
      // Nous devons relancer chaque second la fonction setRotation et setDegres
      setInterval(() => {
           init()
      }, 1000);

      

      


      



     

     

      
    

      
     

