// Dato un array, mostra gli elementi a video a seguito del click di un bottone attraverso l'utilizzo del ciclo While


// Dichiarazione dell'array 
let array_lista_spesa = ['Pasta', 'Pomodori', 'Melanzane', 'Salumi', 'Frutta', 'Bevande'];


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

    // Reset delle classi assednate mantenedo la classe base
    dice_human_icon.className = 'fas fa-2xl';
    dice_pc_icon.className = 'fas fa-2xl';

    // il messaggio verrà stilizzato in base alla condizione, svuoto prima le classi per evitare conflitti
    dice_game_msg.classList = '';


    // tramite lo switch assegnamo le icone all'utene e al pc in base al numero random
    // Icone utente utilzzo dello switch
    switch (human_number) {
        case 1:
            dice_human_icon.classList.add('fa-dice-one');
            break;
        case 2:
            dice_human_icon.classList.add('fa-dice-two');
            break;
        case 3:
            dice_human_icon.classList.add('fa-dice-three');
            break;
        case 4:
            dice_human_icon.classList.add('fa-dice-four');
            break;
        case 5:
            dice_human_icon.classList.add('fa-dice-five');
            break;
        case 6:
            dice_human_icon.classList.add('fa-dice-six');
            break;
    };

    // Icone pc utilzzo dello switch
    switch (pc_number) {
        case 1:
            dice_pc_icon.classList.add('fa-dice-one');
            break;
        case 2:
            dice_pc_icon.classList.add('fa-dice-two');
            break;
        case 3:
            dice_pc_icon.classList.add('fa-dice-three');
            break;
        case 4:
            dice_pc_icon.classList.add('fa-dice-four');
            break;
        case 5:
            dice_pc_icon.classList.add('fa-dice-five');
            break;
        case 6:
            dice_pc_icon.classList.add('fa-dice-six');
            break;
    };

    // definiamo la logica del gioco (condizione di vittoria sconfitta e pareggio)
    // istruzioni condizionali
    if (human_number > pc_number) {
        // inietto il contenuto al messaggio tramite il template literal per l'utente
        dice_game_msg.innerText = `L'utente vince con il numero ${human_number}, contro il PC con il numero ${pc_number}`;
        // assegno una classe definita in css
        dice_game_msg.classList.add('text-green');
    } else if (human_number < pc_number) {
        dice_game_msg.innerText = `Ha vinto il pc con il numero ${pc_number}, contro l'utente con in numero ${human_number}`;
        dice_game_msg.classList.add('text-red');
    } else {
        dice_game_msg.innerText = `Pareggio!! Numero utente ${human_number}, numero pc ${pc_number}`;
        dice_game_msg.classList.add('text-cyan');
    }
});


// Logica per il reset

// evento click al bottone reset

dice_btn_reset.addEventListener('click', function () {
    // resetto il messaggio 
    dice_game_msg.innerText = '';
    // resetto le classi del messaggio 
    dice_game_msg.classList = '';

    // reset delle classi per le icone
    dice_human_icon.className = 'fas fa-2xl';
    dice_pc_icon.className = 'fas fa-2xl';

    // mostro un messaggio opzionale per il reset

    dice_game_msg.innerText = 'Gioco resettato, premi "Start", per iniziare';
    dice_game_msg.classList.add('text-primary');

});



// Film todo list

// creazione array di films

let films = ['Troy', 'Fury', 'Fight-club', 'Man on fire', 'Il Padrino', 'Quei bravi ragazzi', 'Interstellar', 'Arancia Meccanica'];

// recupero tutti gli elementi dal DOM

// bottoni
let btn_show = document.getElementById('show-film');
let btn_check = document.getElementById('check-film');
let btn_add = document.getElementById('add-film');
let btn_reset = document.getElementById('reset-list');

// elementi di visualizazzione
let films_todo_list = document.getElementById('film-todo-list');
let msg_todoList = document.getElementById('msg-film');


// evento click per al bottone che mostra la lista
btn_show.addEventListener('click', function () {
    // svuoto il contenuto della lista per evitare che venga mostrata più volte nel DOM
    films_todo_list.innerHTML = '';
    // utilizzo un ciclo for per iterare gli elementi dell'array films
    for (let i = 0; i < films.length; i++) {
        // per ogni iterazione creo un list item
        let li_todoList = document.createElement('li');
        // inietto gli elementi dell'array ai list items
        li_todoList.innerText = films[i];
        // appendo i list items alla lista 'film_todo_list'
        films_todo_list.appendChild(li_todoList);

        // classList per stilizzare la lista
        films_todo_list.classList.add('list-unstyled', 'my-2');
        li_todoList.classList.add('py-2');
    };

});

// evento click al bottone che controlla gli elementi della lista
btn_check.addEventListener('click', function () {
    // al momento del click recupero l'elemento input e catturo il valore inserito dall'utente
    let film_input = document.getElementById('input-film-list').value.toLowerCase();
    console.log(film_input);

});

// evento click al bottone che aggiunge un nuovo elemento in coda nell'array
btn_add.addEventListener('click', function () {

});


// evento click al bottone che nasconde la todo list 
btn_reset.addEventListener('click', function () {

});








