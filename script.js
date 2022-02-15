// console.log('ciao')

// --------------------------------------

// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// // Chiedo all'utente di inserire una parola
// let insertWord = prompt('Inserisci una parola');
// console.log(insertWord);

// let wordDiv = insertWord.split('');
// console.log(wordDiv);

// let wordInv = wordDiv.reverse();
// console.log(wordInv);

// let word = wordDiv.join('');
// console.log(word);

// // Creare una funzione per capire se la parola inserita è palindroma.
// function palindroma(str) {
//     let parolaDef = insertWord.split('').reverse().join(''); 
//     console.log(wordDef);

//     if(insertWord == wordDef) {
//         return str + 'La parola è palindroma'
//     } else {
//         return str + 'La parola non è palindroma'
//     }
// }
// console.log(palindroma(insertWord));

// --------------------------------------

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari 
let choice = prompt('Pari o Dispari?');
console.log(choice);

// L' utente nserisce un numero da 1 a 5.
let numGioc = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numGioc);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numComp = rob();
console.log(numComp);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if(isPari(numGioc, numComp)) {
    console.log('La somma è pari')
}

else 
{
    console.log('La somma è dispari')
}

// Dichiariamo chi ha vinto.
if((choice == 'pari') && (isPari(numGioc, numComp))) {
    console.log('Hai vinto');
} 

else if((choice == 'dispari') && (isPari(numGioc, numComp) == false)) {
    console.log('Hai vinto');
}

else
{
    console.log('Hai perso :(');
} 

function isPari(val1, val2) {
    let sum = val1 + val2;
    console.log(sum);
    return (sum % 2 == 0);
}

function rob() {
    return Math.floor(Math.random() * 5 ) + 1;
}