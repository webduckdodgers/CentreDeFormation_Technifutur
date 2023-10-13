const DOM = {
    selectDifficulty: document.getElementById('select-difficulty'),
    btnRestart: document.getElementById('btn-restart'),
    cardsContainer: document.getElementById('cards-container'),
    timer: document.getElementById('timer'),
};

const GAME = {
    cards: [],
    flippedCard: null,
    canPlay: true,
    start: null,
    stop: null,
    idInterval: null,
    foundCards: 0,
}

const init = () => {
    // GAME.cards = [];
    // for(let i = 0; i < DOM.selectDifficulty.value; i++) {
    //   GAME.cards.push({ value: Math.floor(i / 2) + 1, random: Math.random() });
    // }
    // GAME.cards.sort((a, b) => a.random - b.random);
    GAME.cards = [...Array(parseInt(DOM.selectDifficulty.value)).keys()].map(i => ({
        value: Math.floor(i / 2) + 1,
        visible: false,
        random: Math.random()
    })).sort((a, b) => a.random - b.random);
    renderCards();
    GAME.start = new Date().getTime();
    GAME.foundCards = 0;
    GAME.idInterval = setInterval(() => {
        if(!GAME.start) {
            return;
        }
        const now = new Date().getTime();
        const duration =  now - GAME.start;

        DOM.timer.innerHTML = `${duration/1000}s`;
    });
}

const renderCards = () => {
    DOM.cardsContainer.innerHTML = '';
    for(let card of GAME.cards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        const cardElementInner = document.createElement('div');
        cardElementInner.classList.add('card-inner');
        cardElement.append(cardElementInner);
        DOM.cardsContainer.append(cardElement);
        card.element = cardElement;
        cardElement.addEventListener('click', () => flipCard(card))
    }
}

const flipCard = (card) => {
    if(card.visible || !GAME.canPlay) {
        return;
    }
    showCard(card);
    
    if(!GAME.flippedCard) {
        GAME.flippedCard = card;
    } else {

        if(GAME.flippedCard.value === card.value) {
            GAME.flippedCard.element.classList.add('found');
            card.element.classList.add('found');
            GAME.flippedCard = null;
            GAME.foundCards += 2;

            if(GAME.foundCards == DOM.selectDifficulty.value) {
                clearInterval(GAME.idInterval);
                GAME.stop = new Date().getTime();
            }

        } else {
        GAME.canPlay = false;
        setTimeout(() => {
            hideCard(card);
            hideCard(GAME.flippedCard);
            GAME.flippedCard = null;
            GAME.canPlay = true;
        }, 1000);
        }
    }
}

const showCard = (card) => {
    card.visible = true;
    const inner = card.element.querySelector('.card-inner');
    inner.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${card.value}.svg')`
    inner.classList.add('flip');
}

const hideCard = (card) => {
    card.visible = false;
    const inner = card.element.querySelector('.card-inner');
    inner.style.backgroundImage = 'unset';
    inner.classList.remove('flip');
}

DOM.selectDifficulty.addEventListener('change', init);
DOM.btnRestart.addEventListener('click', init);
