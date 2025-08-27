document.getElementById("navnForm").onsubmit = function(e) {
    e.preventDefault();
    let navn1 = document.getElementById("stedsnavn1").value;
    let navn2 = document.getElementById("stedsnavn2").value;
    let diff = Math.abs(navn1.length - navn2.length);
    document.getElementById("resultat").innerText = "Differanse: " + diff + " tegn";
};