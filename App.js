import { Ball } from './Ball.js';
import { Block } from './Block.js';
class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.ball2 = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.ball3 = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.ball4 = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.ball5 = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300, 450);
        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.ball3.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.ball4.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.ball5.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.block.draw(this.ctx);
    }
}

window.onload = () => {
    new App();
};
