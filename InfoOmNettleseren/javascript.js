function oppdaterBredde() {
    document.getElementById("Egenskaper").innerText =
    "Fanen du har åpen er " + window.innerWidth + " piksler brei og " + window.innerHeight + " høy.";
} 
    document.getElementById("Info").innerText = navigator.userAgent;


window.onresize = oppdaterBredde;
oppdaterBredde();

