/*Chiedi all’utentessa il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi un numero e sommalo+10
Infine scrivi sulla pagina nomecognomecolorepreferitonumero*/

//Creo la variabile che sarà il risultato della prompt all' utente//
const userName=prompt("insert your name");

//Creo la variabile che sarà il risultato della prompt all' utente//
const userSurname=prompt("insert your surname");

//Creo la variabile che sarà il risultato della prompt all' utente//
let userBestColor=prompt("insert your favorite color");

//Creo la variabile che sarà il risultato della prompt all'utente//
//La prompt dell' utente è una stringa e va trasformata in un intero per sommarla con 10//

let userRandomNumber= parseInt(prompt("Insert a number, we will add + 10"));
console.log(typeof(userRandomNumber));

userRandomNumber=(userRandomNumber+10);
console.log(typeof(userRandomNumber));

//Creo la variabile che sarà la nuova password

let userNewPassword= userName + userSurname + userBestColor + userRandomNumber; 
console.log(typeof(userRandomNumber));

// stampo la variabile tramite il suo ID

document.getElementById("new-password").innerHTML= userNewPassword;

console.log(userNewPassword);