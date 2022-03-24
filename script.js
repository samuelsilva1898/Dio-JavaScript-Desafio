const dino = document.querySelector('.dino');
const backgroud = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(Event){
    if (Event.keyCode === 32){
        if(!isJumping)
        jump();
       }
    }

    function jump() {
      

        isJumping = true;
        // Subindo.
        let upInterval = setInterval(() => {
            if (position >=150) {
                clearInterval(upInterval);

        // Descendo.
        let downInterval = setInterval(() => {
            if(position <= 0){
               clearInterval(downInterval);
               isJumping = false;
            } else {
               position -= 20;
               dino.style.bottom = position + 'px';
              }
            }, 20);
            } else {
        
            position += 20;
            dino.style.bottom = position + 'px';
            }
        }, 20);
    }

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;
   
    cactus.classList.add('cactus');
    backgroud.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
    
    let leftTimer = setInterval(() =>{
        if (cactusPosition < -60){
                // cactus saiu da tela
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
    }
}, 20);

setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup' ,handleKeyUp);