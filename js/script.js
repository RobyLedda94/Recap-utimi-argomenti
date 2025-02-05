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
    // variabile flag impostata a false (parto con il presupposto che non ho trovato il film)
    let flag_foundFilm = false;

    // svuoto le classi del messaggio per evitare conflitti
    msg_todoList.classList = '';

    // eseguo un controllo sul dato inserito
    if (film_input === '') {
        msg_todoList.innerText = 'Per favore inserisci un dato valido';
        msg_todoList.classList.add('text-danger', 'my-2');
        return;
    };

    // ciclo for sull'array di films
    for (let i = 0; i < films.length; i++) {
        // annido nel ciclo un if di controllo che confronta gli elementi dell'array con il valore del campo input
        if (films[i].toLowerCase() === film_input.toLowerCase()) {
            // setto la variabile flag a true 
            flag_foundFilm = true;
        };
    };

    // istruzione condizionale dove indico in base alla variabile flag se il film e presente o meno
    if (flag_foundFilm) {
        // inietto del contenuto al messaggio tramite il template literal
        msg_todoList.innerText = `Il film ${film_input} è presente nella lista`;
        msg_todoList.classList.add('text-green', 'my-2');
    } else {
        msg_todoList.innerText = `Il film ${film_input} non è presente nella lista aggiungilo`;
        msg_todoList.classList.add('text-warning', 'my-2');
    }

});

// evento click al bottone che aggiunge un nuovo elemento in coda nell'array
btn_add.addEventListener('click', function () {
    // al momento del click recupero l'elemento input e catturo il valore inserito dall'utente
    let film_input = document.getElementById('input-film-list').value.toLowerCase();
    // variabile flag impostata a false (parto con il presupposto che non ho trovato il film)
    let flag_foundFilm = false;

    // svuoto le classi del messaggio per evitare conflitti
    msg_todoList.classList = '';

    // eseguo un controllo sul dato inserito
    if (film_input === '') {
        msg_todoList.innerText = 'Per favore inserisci un dato valido';
        msg_todoList.classList.add('text-danger', 'my-2');
        return;
    };

    // ciclo for sull'array di films
    for (let i = 0; i < films.length; i++) {
        // annido nel ciclo un if di controllo che confronta gli elementi dell'array con il valore del campo input
        if (films[i].toLowerCase() === film_input.toLowerCase()) {
            // setto la variabile flag a true 
            flag_foundFilm = true;
        };
    };

    // istruzione condizionale dove indico in base alla variabile flag se il film e presente o meno
    if (flag_foundFilm) {
        // inietto del contenuto al messaggio tramite il template literal
        msg_todoList.innerText = `Il film ${film_input} è gia presente nella lista`;
        msg_todoList.classList.add('text-danger', 'my-2');
    } else {
        // se non è presente faccio il push sull'array che aggiunge il nuovo elemento in coda
        films.push(film_input);
        msg_todoList.innerText = `Il film ${film_input} è stato aggiunto con successo`;
        msg_todoList.classList.add('text-green', 'my-2');
    }

});


// evento click al bottone che nasconde la todo list 
btn_reset.addEventListener('click', function () {

    msg_todoList.innerText = '';
    // svuoti tutti i contenuti della lista
    films_todo_list.innerHTML = '';

});

// ------------------------------------------------------------------------

// Controllare che una parola inserita dall'utente sia palindroma 

// recupero il bottone da dom
let btn_palindroma = document.getElementById('btn-palindroma');

// recupero l'elemento dal dom che mostra un messaggio a video
let msg_palindroma = document.getElementById('msg-palindroma');

// assegno al bototne un evento click
btn_palindroma.addEventListener('click', function () {
    // recupero l'elemento input e catturo il valore inserito dall'utente
    let input_palindroma = document.getElementById('palindroma').value.trim().toLowerCase().replace(/\s/g, '');
    // split per suddividere la parola, reverse per invertire l'ordine, e join per riunire i caratteri invertiti
    let check_word = input_palindroma.split('').reverse().join('');
    console.log(check_word);

    // svuoto le classi assegnate al messaggio per evitare conflitti
    msg_palindroma.classList = '';

    // controllo la parola inserita dall'utente, con la check word
    if (input_palindroma === check_word) {
        msg_palindroma.innerText = 'La parola inserita è palindroma';
        msg_palindroma.classList.add('text-green');
    } else {
        msg_palindroma.innerText = 'La parola inserita non è palindroma';
        msg_palindroma.classList.add('text-danger');

    }
});


// Carosello

// array di immagini del carosello

let array_img = ["./img/img_1.jpg", "./img/img_2.jpg", "./img/img_3.jpg", "./img/img_4.jpg", "./img/img_5.jpg", "./img/img_6.jpg"];
console.log(array_img);

// recupero dal dom gli elementi che dovranno contenere le immagini
let items_container = document.querySelector('.items');
let thumbs_container = document.querySelector('.thumbs');





// dichiaro 2 variabili che andranno a contenere la struttura html per ogni immagine
let itemsContent = '';
let thumbsContent = '';

// dichiaro una variabile contatore per tenere traccia degli elementi attivi
let active_image = 0;

// ciclo for sull'array di immagini
for (let i = 0; i < array_img.length; i++) {
    // per ogni iterazione creo un elemento
    itemsContent += `<div class="item">
                        <img src="${array_img[i]}" alt="img_1">
                    </div>`

    thumbsContent += `<div class="thumb">
                        <img src="${array_img[i]}" alt="img_1">
                    </div>`

};


// inietto gli elementi iterati con il ciclo for nei contenitori padre
items_container.innerHTML = itemsContent;
thumbs_container.innerHTML += thumbsContent;

// recupero tutti gli elementi con la classe item e solo al primo elemento assegno la classe active
document.querySelectorAll('.item')[active_image].classList.add('active');


// recupero tutti gli elementi con la classe thumb e solo al primo elemento assegno la classe active
document.querySelectorAll('.thumb')[active_image].classList.add('active');



// recupero gli elementi dal dom che avranno il compito di scorrere le immagini del carosello
let next_btn = document.querySelector('.next');
let prev_btn = document.querySelector('.prev');



// assegno ai bottoni un evento click

next_btn.addEventListener('click', function () {
    // logica per lo scorrimento delle immagini sul pulsante next
    if (active_image === array_img.length - 1) {
        active_image = 0;
    } else {
        active_image++;
    };

    // devo rimuovere la classe active dal primo elemento
    document.querySelector('.item.active').classList.remove('active');
    // aggiungo la classe active agli elementi sucessivi
    document.querySelectorAll('.item')[active_image].classList.add('active');

    // stesso approccio per le thumb

    // devo rimuovere la classe active dal primo elemento
    document.querySelector('.thumb.active').classList.remove('active');
    // aggiungo la classe active agli elementi sucessivi
    document.querySelectorAll('.thumb')[active_image].classList.add('active');

});


prev_btn.addEventListener('click', function () {
    // logica per lo scorrimento delle immagini sul pulsante next
    if (active_image === 0) {
        active_image = array_img.length - 1;
    } else {
        active_image--;
    };

    // devo rimuovere la classe active dal primo elemento
    document.querySelector('.item.active').classList.remove('active');
    // aggiungo la classe active agli elementi sucessivi
    document.querySelectorAll('.item')[active_image].classList.add('active');

    // stesso approccio per le thumb

    // devo rimuovere la classe active dal primo elemento
    document.querySelector('.thumb.active').classList.remove('active');
    // aggiungo la classe active agli elementi sucessivi
    document.querySelectorAll('.thumb')[active_image].classList.add('active');
});



// --------------------------------------------

// FizzBuzz

// Dichiarazione delle variabili che recuperano tutti gli elementi dal DOM

// recupero l'elemento griglia
let grid_FizzBuzz = document.getElementById('grid');

// recupero i bottoni per generare e resettare
let start_btn = document.getElementById('start-fizz');
let reset_btn = document.getElementById('reset-fizz');

// assegnamo ai bottoni un evento clik

start_btn.addEventListener('click', function () {

    // svuoto tutta la struttura della griglia per evitare di ricrearla
    grid_FizzBuzz.innerHTML = '';
    // eseguo in ciclo che genera 100 iterazioni
    for (let i = 1; i <= 100; i++) {
        // per ogni iterazione creo un elemento square
        let square = document.createElement('div');
        // assegno agli elementi creati la classe square definita in css
        square.classList.add('square');
        grid_FizzBuzz.appendChild(square);

        // controllo per stabilire i multipli di 3 e di 5
        if (i % 3 === 0 && i % 5 === 0) {
            square.innerText = 'FizzBuzz';
            square.classList.add('fizzbuzz');
        } else if (i % 3 === 0) {
            square.innerText = 'Fizz';
            square.classList.add('fizz');
        } else if (i % 5 === 0) {
            square.innerText = 'Buzz';
            square.classList.add('buzz');
        } else {
            square.innerText = `${i}`;
        }
    };

});

reset_btn.addEventListener('click', function () {
    // svuoto tutta la struttura della griglia per evitare di ricrearla
    grid_FizzBuzz.innerHTML = '';
});

// ----------------------------------

// Calcolatrice semplice, effettuo una somma, salvo il risultato in un array e lo mostro a video sotto forma di lista

// creo un array vuoto dove salvo lo storico delle operazioni

let storico_operazioni = [];

// dichiarazione delle variabili in cui recupero tutti gli elementi utili dal DOM

// bottoni
let btn_startSomma = document.getElementById('start-somma');
let btn_resetSomma = document.getElementById('reset-somma');

// elementi di visualizazzione
let risultato_somma = document.getElementById('risultato-operazione');
let msg_errore = document.getElementById('msg-errore');
let ul_operazioni = document.getElementById('storico-operazioni');

// assegno gli eventi ai bottoni

btn_startSomma.addEventListener('click', function () {
    // recupero l'elemento input e catturo il valore, converto il valore restituito in numero per la somma
    let input_NumberOne = parseInt(document.getElementById('somma-num-one').value, 10);
    let input_NumberTwo = parseInt(document.getElementById('somma-num-two').value, 10);
    // console.log(input_NumberOne, input_NumberTwo);

    // prima controllo se l'utente sta inserendo dei dati validi
    if (isNaN(input_NumberOne) || isNaN(input_NumberTwo)) {
        // svuoto il messaggio del risultato se i dati sono sbagliari
        risultato_somma.innerText = '';
        // inietto il messaggio di errore all'elemento del dom
        msg_errore.innerText = 'Inserisci un dato valido !!'
        // stile del messaggio
        msg_errore.classList.add('text-red');
    } else {
        // in caso l'input è valido svuoto il messaggio di errore
        msg_errore.innerText = '';
        // dichiaro una varibile che esegue la somma
        let somma_algebrica = input_NumberOne + input_NumberTwo;
        let operazione_completa = `${input_NumberOne} + ${input_NumberTwo} = ${somma_algebrica}`;

        // inietto il risultato della somma all'elemento recuperato in precedenza
        risultato_somma.innerText = `La somma tra ${input_NumberOne} + ${input_NumberTwo} è = ${somma_algebrica}`;
        // stile al messaggio che mostra il risultato
        risultato_somma.classList.add('text-green');

        // aggiungo nell'array storico operazioni la formula della somma 
        storico_operazioni.push(operazione_completa);
        console.log(storico_operazioni);

        // svuoto il contenuto della ul per evitare che venga ripetuto
        ul_operazioni.innerHTML = '';

        // eseguo un ciclo for sull'array dello storico operazioni
        for (let i = 0; i < storico_operazioni.length; i++) {
            // per ogni iterazione creo un elemento lista
            let li_operazioni = document.createElement('li')
            // inietto il contenuto dell'array storico operaioni in posizione i, ai list item creati dinamicamente
            li_operazioni.innerText = storico_operazioni[i];
            // appendo i list item creati alla ul recuperata in precedenza
            ul_operazioni.appendChild(li_operazioni);

            // definisco lo stile della lista
            ul_operazioni.classList.add('list-unstyled');
            li_operazioni.classList.add('py-2');

        }
    };
});

btn_resetSomma.addEventListener('click', function () {
    // nel reset svuoto l'array
    storico_operazioni = [];

    // svuoto tutto il contenuto degli elementi 
    ul_operazioni.innerHTML = '';
    risultato_somma.innerText = '';
    msg_errore.innerText = '';

    // reset dei campi input
    document.getElementById('somma-num-one').value = '';
    document.getElementById('somma-num-two').value = '';

});

// ------------------------------------------------------------------------

// Dato un array di valori numerici, troviamo il valore piu grande e il valore piu piccolo


// Array di valori numerici
let nums_array = [56, 1, 3, 6, 10, 23, 69, 90, 7, 17, 44, 100];

// definisco due variabili con un valore minimo e valore massimo
let min = nums_array[0];
let max = 0;


// eseguo un ciclo for sull'array di numeri
for (let i = 0; i < nums_array.length; i++) {
    // confronto il valore in posizione i dell'array con il valore della variabile min
    if (nums_array[i] < min) {
        min = nums_array[i];
    }

    if (nums_array[i] > max) {
        max = nums_array[i];
    }
};


console.log(min + " " + max);


// Ordine di un array numerico

nums_array.sort(function (a, b) {
    return a - b;
});

// prendo il numero più grande e il numero più piccolo

min = nums_array[0];
max = nums_array[nums_array.length - 1];

console.log(nums_array);
console.log(min, max);


















