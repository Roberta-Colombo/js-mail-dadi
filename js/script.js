/* Chiedi all’utente la sua email,
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



