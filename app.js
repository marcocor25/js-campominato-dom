// VARIABILE COLLEGATA AL MAIN
const mainContainer = document.getElementById('main');
console.log(main);

// COLLEGO IL GRID-CONTAINER
const gridContainer = document.querySelector('.grid_container');
console.log(gridContainer);

// COLLEGO PULSANTE PLAY
const playButton = document.getElementById('play_button');
console.log(playButton);

// CREO L'ASCOLTO AL CLICK DEL PULSANTE PLAY
playButton.addEventListener('click', function () {
    
    // REGOLA PER REFRESH DEI LIVELLI DI DIFFICOLTÀ
    gridContainer.innerHTML = '';

    // CREO VARIABILE PER LA DIFFICOLTÀ
    const difficulty = document.getElementById('select_difficulty').value;
    console.log(difficulty);

    // CREO LE CELLE DENTRO IL "GRID-CONTAINER" IN BASE ALE VARIE DIFFICOLTÀ
    if (difficulty == 'Scegli') {

        alert('Scegli un livello di difficoltà!');

        console.log('Scegli un livello di difficoltà!');

        mainContainer.style.background = `#708090`;

    } else if (difficulty == 'Easy') {

        console.log(difficulty);

        for (let i = 1; i <= 100; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width = `calc(100% / 10)`;
            cellElement.innerHTML = `${i}`;
            gridContainer.append(cellElement);
        }

        mainContainer.style.background = `#87cefa`;

    } else if (difficulty == 'Hard') {

        console.log(difficulty);

        for (let i = 1; i <= 81; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width = `calc(100% / 9)`;
            cellElement.innerHTML = `${i}`;
            gridContainer.append(cellElement);
        }

        mainContainer.style.background = `#ffd700`;

    } else if (difficulty == 'Crazy') {

        console.log(difficulty);

        for (let i = 1; i <= 49; i++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.style.width = `calc(100% / 7)`;
            cellElement.innerHTML = `${i}`;
            gridContainer.append(cellElement);
        }

        mainContainer.style.background = `#ff4500`;

    }
})

// CREO L'ARRAY DI BOMBE DA ASSEGNARE ALLE CASELLE
const bombArray = [];
console.log(bombArray);

// CREO CICLO PER LA GENERAZIONE DELLE BOMBE
while (bombArray.length < 16) {
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    if(!bombArray.includes(randomNumber)) {
        bombArray.push(randomNumber);
    }
}

// CREO L'ASCOLTO AL CLICK AL GRID-CONTAINER
gridContainer.addEventListener('click', function(event) {
    console.log(event)

    const selectedCell = event.target;
    console.log(selectedCell);

    if (selectedCell.classList.contains('cell')) {
        if (bombArray.includes(parseInt(selectedCell.innerHTML))) {
            selectedCell.style.background = `#ff0000`;
        } else {
            selectedCell.style.background = `#9acd32`;
        }
    }
})