let antallLiv = 10;
const NAVN = "Mathias";
let arrayBilder =[">Bilde1.jpg","Bilde2.jpg"];
const PI = Math.PI;

console.log("Antall liv er:" + antallLiv);
console.table(arrayBilder);
console.warn(PI)

let alder = prompt("Hvor gammel er du?");
console.log("Du er " + alder + " år gammel");

document.getElementById("utskrift").innerText = "Du er " + alder + " år gammel";

let passord = document.getElementById("viktigdata").innerHTML;
console.log(passord);