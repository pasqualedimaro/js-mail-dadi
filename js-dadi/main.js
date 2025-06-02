/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

// sdtampo il titolo del gioco
console.log("gioco dei dadi");

// genero numero randomico da 1 a 6 per l'utente

const dadoUtente = Math.floor(Math.random() * 6) + 1;

// genero numero randomico da 1 a 6 per il computer

const dadoComputer = Math.floor(Math.random() * 6) + 1;

// stampo i risultati

console.log(`Utente: ${dadoUtente}`);
console.log(`Computer: ${dadoComputer}`);

// stampo e confronto i risultati e stabilisco il vincitore

if (dadoUtente > dadoComputer) {
    console.log("Hai vinto!!");
} else if (dadoComputer > dadoUtente) {
    console.log("Hai perso, putroppo ha vinto il compuiter, ritenta!!");
} else {
    console.log("Pari, ritenta!!");
}