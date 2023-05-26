/*Chiedi all’utentessa il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi un numero e sommalo+10
Infine scrivi sulla pagina nomecognomecolorepreferitonumero*/

const userName = document.getElementById("user-name")
const userSurname = document.getElementById("user-surname")
const userColor = document.getElementById("user-color")
const userNumber = document.getElementById("user-number")

const btnGenerates = document.querySelector("button")

const output= document.getElementById("new-password")

btnGenerates.addEventListener("click",function(){
    let sum=parseInt(userNumber.value)+10
    output.innerHTML=userName.value + userSurname.value + userColor.value + sum

    userName.value=" "
    userSurname.value=" "
    userColor.value=" "
    userNumber.value=" "
})

