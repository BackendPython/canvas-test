const obstacleArray = []

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 20;
        this.bottom = (Math.random() * caches.height/3) + 20;
        this.x = caches.width;
        this.width = 20;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
    uptade(){
        this.x -= gamespeed;
        this.draw()
    }
}

