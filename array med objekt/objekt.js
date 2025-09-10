let arrayNavn = ["Ola", "Kari", "Per"];

console.log(arrayNavn);

for (let navn of arrayNavn) {
    console.log(navn);
}

console.log (arrayNavn[1]);

let person = {
        navn: "Olaien",
        alder: 31,
        yrke: "Utvikler"
    };

    console.log (person.alder);

    let arrayPersoner = [{
        navn:"Ola",
        alder: 25,
        yrke: "utvikler"
    },

    {
        navn:"Kari",
        alder: 30,
        yrke: "Lege"
    },

    {
        navn: "Per",
        alder: 28,
        yrke: "Advokat"
    }
];
console.log (arrayPersoner[1]);
console.log (arrayPersoner[1].navn);

arrayPersoner.push(person);

console.log("\nPersoner over 30")

for (let index = 0; index < arrayPersoner.length; index++){
    if(arrayPersoner[index].alder >=30)
    {
        
        console.log  (arrayPersoner[index].navn);
    }
        
}
