const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#4040ff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    handleObstacles();
    handleParticles();
    bird.uptade();
    bird.draw();
    ctx.fillStyle = gradient;
    ctx.font = '90px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleColisions();
    if (handleColisions()) return;
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
    frame++;
}

animate()

window.addEventListener('keydown', function (e) {
    if (e.code=='Space') {
        spacePressed = true;
    }
})

window.addEventListener('keyup', function (e) {
    if (e.code=='Space') {
        spacePressed = false;
    }
})

const bang = new Image();
bang.src = 'images/bang.png';
bang.alt = 'none';

function handleColisions() {
    for (let i = 0; i < obstacleArray.length; i++) {
        if (bird.x < obstacleArray[i].x + obstacleArray[i].width &&
            bird.x + bird.width > obstacleArray[i].x &&
            ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height > 0) ||
            (bird.y > canvas.height - obstacleArray[i].bottom &&
                bird.y + bird.height < canvas.height))) {
            ctx.drawImage(bang, bird.x, bird.y, 50, 50);
            ctx.font = '25px Georgia';
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over, your score is: ' + score, 160, canvas.height/2 -10);
            
            return true;
        }
    }
}

const background = new Image();
background.src = '';