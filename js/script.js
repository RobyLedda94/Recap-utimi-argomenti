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
        // incremento
        i++;
    }
});

// metto il bottone reset in attesa di un evento click
reset_btn_lista_spesa.addEventListener('click', function () {
    // svuoto il contenuto della ul
    ul_lista_spesa.innerHTML = '';
});