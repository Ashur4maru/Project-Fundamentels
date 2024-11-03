import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let mijnMand = [];
let capaciteitMand;


for(let i = 0; i < Infinity; i++){
    capaciteitMand = parseFloat(await userInput.question('Hoe groot is je geschenkmand? (pas op die moet min. 3 en max. 20)'));

    if(capaciteitMand < 3 || capaciteitMand > 20){
    console.log('de grootte van de geschenkmand is fout. Probeer opnieuw. ')
    }else{
        break;
    }
}

let artiekels;

async function vulGeschenkmand(geschenkmand){
    
    geschenkmand.push(artiekels)

}

for(let i = 0; i < capaciteitMand;i++){
    artiekels = await userInput.question('Kies uit: Wijn(W), Bier(B), Fruitsap(F). ');
    if(artiekels.toLowerCase() == 'w' || artiekels.toLowerCase() == 'b' || artiekels.toLowerCase() == 'f' ){
        vulGeschenkmand(mijnMand);
        lotterij();
    }else{
        console.log('onbekende artiekel, probeer opnieuw. ');
        i--;
    }
    
}

function berekenTotaal(geschenkmand){

    let prijzen = {'w': 10, 'b' : 2, 'f' : 3}

    let totaal = 0;
    for(let item of geschenkmand){
        totaal += prijzen[item]
    }
    return totaal;


}

function berekenTotaalBTW(geschenkmand){
    let prijzenBTW = {'w': (10/100)*21 + 10, 'b' : (2/100)*6+2, 'f' : (3/100)*12+3}
    let totaalBTW = 0;
    for(let item of geschenkmand){
        totaalBTW += prijzenBTW[item]
    }
    return totaalBTW;
}

function lotterij(){
    let randomGetal = Math.floor(Math.random() * 10) + 1;
    if(randomGetal === 1){
        console.log('Gefeliciteerd!!! U heeft een gratis product gewonen.')
    }
}


let totaalPrijs = berekenTotaal(mijnMand);
let totaalPrijsMetBTW = berekenTotaalBTW(mijnMand);
console.log('De totaal prijs is ' + totaalPrijs);
console.log('De totaal prijs met BTW is ' + totaalPrijsMetBTW);

