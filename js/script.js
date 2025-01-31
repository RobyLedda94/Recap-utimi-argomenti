// Dato un array, mostra gli elementi a video a seguito del click di un bottone attraverso l'utilizzo del ciclo While


// Dichiarazione dell'array 
let array_lista_spesa = ['Pasta', 'Pomodori', 'Melanzane', 'Salumi', 'Frutta', 'Bevande'];
console.log(array_lista_spesa);

// Recupero gli elementi dal DOM


// recupero i bottoni
let btn_lista_spesa = document.getElementById('btn-lista-spesa');
let reset_btn_lista_spesa = document.getElementById('reset-btn-lista-spesa');

// recupero l'elemento che mostra il risultato a video
let ul_lista_spesa = document.getElementById('lista-spesa');

// metto il bottone in attesa di un evento click
btn_lista_spesa.addEventListener('click', function () {
    // svuoto il contenuto della ul
    ul_lista_spesa.innerHTML = '';
    // dichiaro la variabile contatore
    let i = 0
    // ciclo while sull'array della spesa
    while (i < array_lista_spesa.length) {
        // creo i list items che conterrano gli elementi dell'array
        let list_items_spesa = document.createElement('li');
        // inietto dinamicamente il contenuto dell'array sui list items
        list_items_spesa.innerText = array_lista_spesa[i];
        // appendo i list items con il contenuto alla ul (unordered list)
        ul_lista_spesa.appendChild(list_items_spesa);
        // tramite la proprietà classList stilizzo la mia lista
        ul_lista_spesa.classList.add('list-unstyled');
        list_items_spesa.classList.add('py-2');
        // incremento
        i++;
    }
});

// metto il bottone reset in attesa di un evento click
reset_btn_lista_spesa.addEventListener('click', function () {
    // svuoto il contenuto della ul
    ul_lista_spesa.innerHTML = '';
});

// ---------------------------------------------------------------------

// Gioco dei dadi con l'utilizzo dello switch

// Dichiarazione delle variabili dove recupero gli elementi da dom

// recuperiamo i bottoni
let dice_btn_start = document.getElementById('start-btn-dice');
let dice_btn_reset = document.getElementById('reset-btn-dice');

// recupero gli elementi per mostrare del contenuto sul dom
let dice_human_icon = document.getElementById('human-dice');
let dice_pc_icon = document.getElementById('pc-dice');
let dice_game_msg = document.getElementById('game-result');

// al click del pulsante, genero dei numeri da 1 a 6
dice_btn_start.addEventListener('click', function () {
    // generiamo i numeri random con la libreria math per l'utente e il pc
    let human_number = Math.floor(Math.random() * 6 + 1);
    let pc_number = Math.floor(Math.random() * 6 + 1);
    console.log(human_number, pc_number);
});


