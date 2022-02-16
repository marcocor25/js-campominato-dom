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