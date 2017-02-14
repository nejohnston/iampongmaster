import { SVG_NS, KEYS } from '../settings';

import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './Winner';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.pause = false;

		this.gameElement = document.getElementById(this.element);

		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;

		this.radius = 8;

		this.board = new Board(
			this.width,
			this.height
		);

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z);

		this.player2 = new Paddle
			(this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down);

		this.ball = new Ball(
			this.radius,
			this.width,
			this.height,
		);

		this.score = new Score(
			this.x,
			this.y,
			this.size,
			this.score,
		);
		this.score1 = new Score(272, 40, 40);
		this.score2 = new Score(212, 40, 40);

		this.winner = new Winner(
			this.x,
			this.y,
			this.size,
			this.banner,
		);

		this.winner1 = new Winner(56, 150, 50, 'Player1 Wins!');
		this.winner2 = new Winner(56, 150, 50, 'Player2 Wins!');

		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
			}
		});
	}

	render() {
		if (this.pause) {
			return;
		}
		else {
			this.gameElement.innerHTML = '';

			let svg = document.createElementNS(SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
			this.gameElement.appendChild(svg);

			// Detect Winner
			const player1Win = this.player1.score >= 2;
			const player2Win = this.player2.score >= 2;

			if (player1Win) {
				return this.winner1.render(svg, this.winner1.banner);
			}
			else if (player2Win) {
				return this.winner2.render(svg, this.winner2.banner);
			}
			else {
				this.board.render(svg);
				this.player1.render(svg);
				this.player2.render(svg);
				this.ball.render(svg, this.player1, this.player2);
				this.score1.render(svg, this.player1.score);
				this.score2.render(svg, this.player2.score);
			}
		}
	}
}
