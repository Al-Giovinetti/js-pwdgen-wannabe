/*Chiedi all’utentessa il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

//Creo la variabile che sarà il risultato dell' interrogazione all' utente//
const userName=prompt("insert your name")

//Creo la variabile che sarà il risultato dell' interrogazione all' utente//
const userSurname=prompt("insert your surname")

//Creo la variabile che sarà il risultato dell' interrogazione all' utente//
let userBestColor=prompt("insert your favorite color")

//Creo la variabile che sarà la nuova password

let userNewPassword= userName + userSurname + userBestColor + "21" 

// stampo la variabile tramite il suo ID

document.getElementById("new-password").innerHTML= userNewPassword