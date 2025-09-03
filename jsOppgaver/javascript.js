let alder = prompt("Hvor gammel er du");


if (alder <16) {
    document.getElementById("tekst").innerText = "Ha deg vekk"
}

else if (alder <18){
    document.getElementById("tekst").innerText = "Moped"
}

else if (alder <21){
    document.getElementById("tekst").innerText = "Bil, moped"
}

else if (alder >=21){
    document.getElementById("tekst").innerText = "Bil, Moped, Buss"
}

else{
        document.getElementById("tekst").innerText = "Skriv gyldig tall"
}