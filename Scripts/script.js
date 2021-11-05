let order = [];
let clickedOrder = [];
let score = 0;


//0 igual ao verde
//1 igual ao vermelhor
//2 igula ao amarelo 
//3 ogual ao azul


const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//função para o clink dos butoes aleatorios


let shuffledOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    // 
    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i + 1));
    }

}
// acender a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250 );
    // remove o tempo criado em cima
    setTimeout(() => {
        element.classList.remove('selected')
    })

}

// variavel para comprar se clicamos 
// na mesma ordem que o jogo deu 

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        } 

    }
    // comparação e alert caso acerte o que o jogo pediu.
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n voce acertou, iniciando proximo nivel`);
        nextLevel();
    }
}

// função para click do usuario
let click  = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder();
} 

// função retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3) {
        return blue;
    }
}

// função para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffledOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação ${score}!\n Voce perdeu o jogo!\n Clique em ok para iniciar um novo jogo`);
    order = []
    clickedOrder = []

    playGame();
}

let playGame = () => {
    alert('Nova rodada!');
    score = 0;

    nextLevel();
}