let alder = prompt("Hvor gammel er du");


if (alder <16) {
    document.getElementById("forUng").innerText = "Ha deg vekk"
}

else if (alder <18){
    document.getElementById("forUng").innerText = "Moped"
}

else if (alder <21){
    document.getElementById("forUng").innerText = "Bil, moped"
}

else if (alder >=21){
    document.getElementById("forUng").innerText = "Bil, Moped, Buss"
}

else{
        document.getElementById("forUng").innerText = "Skriv gyldig tall"
}