/*Mail
Crea una lista di email di invitati ad una festa. 
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for. 
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
 Si può fare? Certo che si basta ragionare un po’. Nota: Non è necessario provvedere alla validazione delle email*/

 // creo un array con la lista degli invitati 

 const listaInvitati = [
    "pasquale@gmail.com",
    "giuliorossi@gmail.com",
    "lucaverdi@yahoo.it",
    "simonegrigi@outlook.com",
    "dehpefforza@libero.it",
    "franchinoercriminale@hotmail.com"
];

console.log( "controllo inviti")

//chiedo mail all'utente
 
const emailUtente = prompt("inserisci la tua email per verificare l'invito")

//variabile per vedere se l'email è stata trovata

let emailTrovata = false;

//creo un ciclo per controllare ogni email nella lista

for (let i = 0; i < listaInvitati.length; i++) {
    if (listaInvitati[i] === emailUtente) {
        emailTrovata = true;
        break;
    }
}

//stampo il messaggio se ci sono gli invitati o meno

if (emailTrovata){
    console.log("la tua email è nella lista invitati")
} else{
    console.log("accesso negato: la tua mail non è in lista")
}