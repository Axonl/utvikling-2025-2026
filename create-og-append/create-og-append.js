const overskrift = document.createElement("h1");
overskrift.innerText = "Dette er en overskrift";
document.body.appendChild(overskrift);

const knapp1 = document.createElement("button");
knapp1.innerText = "Trykk på meg";
knapp1.id = "knapp1 ";
knapp1.addEventListener("click",trykk);
document.body.appendChild(knapp1);

const knapp2 = document.createElement("button");
knapp2.innerText = "Trykk på meg";
knapp2.id = "knapp2 ";
knapp2.addEventListener("click",trykk);
document.body.appendChild(knapp2);

const bilde = document.createElement("img");
bilde.src = ("mrlee2.png");
bilde.alt = ("Mrlee")
document.body.appendChild(bilde);

function trykk(evt){
    console.log(evt.target.id);
}