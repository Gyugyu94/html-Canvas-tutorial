export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx) {
        const gabX = 80;
        const gabY = 60;
        ctx.fillStyle = '#123123';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
    }
}
