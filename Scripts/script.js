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
//função para o clink dos butoes 
let shuffledOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    // 
    for(let i in order) {
        let elementColor = creatElement(order[i]);
        lightColor(elementColor, Number(i + 1));
    }

}
// acender os boteos nas ordens aleatorias
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add('select');
    }, tempo - 250 );
    // remove o tempo criado em cima
    setTimeout(() => {
        element.classList.remove('select')
    })

}