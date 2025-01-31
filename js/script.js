// Dato un array, mostra gli elementi a video a seguito del click di un bottone attraverso l'utilizzo del ciclo While


// Dichiarazione dell'array 
let array_lista_spesa = ['Pasta', 'Pomodori', 'Melanzane', 'Salumi', 'Frutta', 'Bevande'];
console.log(array_lista_spesa);

// Recupero gli elementi dal DOM


// recupero il bottone 
let btn_lista_spesa = document.getElementById('btn-lista-spesa');

// recupero l'elemento che mostra il risultato a video
let ul_lista_spesa = document.getElementById('lista-spesa');

// metto il bottone in attesa di un evento click
btn_lista_spesa.addEventListener('click', function () {
    console.log(btn_lista_spesa);
});