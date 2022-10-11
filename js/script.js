/* ESERCIZIO 1: Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 

ALGORITMO:
crea array con email autorizzate;
chiedi email utente tramite input;
tramite ciclo compara email utente con email presenti in array;
    SE email utente = email in array -> può accedere,
    SE email utente != email in array -> non può accedere.
Stampa esito in html. */

const container = document.querySelector('.container');

const authorized = ["giorgio.bianchi@gmail.it", "simona.verdi@gmail.it", "lucia.rossi@gmail.it", "mario.neri@gmail.it"]; 

// console.log(authorized);

let btnAccess = document.getElementById('accedi');

const tryAccess = function(){
    let authorization = false;
    let userEmail = document.getElementById('user-email').value; 
    const accessResult = document.createElement('p');
    container.append(accessResult);
    
    for(let i = 0; i < authorized.length; i++){
        if(userEmail === authorized[i]){
            authorization = true;
        }
    }

    if(authorization){
        accessResult.append("Accesso autorizzato");
    }

    else{
        accessResult.append("Accesso non consentito");
    }
}

btnAccess.addEventListener('click', tryAccess);


/* ESERCIZIO 2: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. 

ALGORITMO:
creare bottone, il quale premendolo genera 
due numeri random (da 1 a 6);
stabilire il numero più alto;
Numero più alto = vincitore. */
 
const playBtn = document.getElementById('play');
const container2 = document.querySelector('.container2');

const generateRandomNumber = function(){
    const randomNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    const randomNumberPC = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    const result = document.createElement('p');
    container2.append(result);
    // console.log(randomNumber);
    // console.log(randomNumberPC);
    result.innerHTML = `
    <br>il tuo punteggio è ${randomNumber}<br><br>
    il punteggio del PC è ${randomNumberPC}<br><br>
    `

    if(randomNumber > randomNumberPC){
        result.innerHTML += "<strong>Hai vinto!</strong>";
    }

    else if(randomNumberPC > randomNumber) {
        result.innerHTML += "<strong>Il PC ha vinto!<strong>";
    }
    else {
        result.innerHTML += "<strong>Pareggio!</strong>";
    }
}

playBtn.addEventListener('click', generateRandomNumber);


