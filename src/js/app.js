import * as PIXI from 'pixi.js';
import TheBall from './ball';

let WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Francois One']
  },
  active: function() {
    
    init();
  }
});

let app = new PIXI.Application({transparent: true});

document.body.appendChild(app.view);

let container = new PIXI.Container(); 
app.stage.addChild(container);

function init() {
  let count = 0;

  let els = document.querySelectorAll('.letter');
  let elsArray = Array.from(els);

  let balls = [];
  let letters = [];

  let layers = new Array(4).fill().map(x => new PIXI.Container());
  layers.forEach(l => {
    container.addChild(l);
  });
  layers[3].blendMode = 2;

  elsArray.forEach(l => {
    let coords = l.getBoundingClientRect();

    drawLetter(l.innerText, coords, 0x03aaea, balls, letters, 0.16, 0);
    drawLetter(l.innerText, coords, 0xf9ed00, balls, letters, 0.14, 1);
    drawLetter(l.innerText, coords, 0xe80289, balls, letters, 0.12, 2);
    drawLetter(l.innerText, coords, 0x03aaea, balls, letters, 0.1, 3);
  });

  function drawLetter(text, coords, color, balls, containers, power, layerIndex) {
    let temp = new PIXI.Container();
    let letter = new PIXI.Text(text,{fontFamily : 'Francois One', fontSize: 108, fill : color, align : 'center'});
    letter.position.x = coords.x;
    letter.position.y = coords.y;

    temp.addChild(letter);
    layers[layerIndex].addChild(temp);

    balls.push(
      new TheBall(coords.x + coords.width/2, coords.y + coords.height/2, power)
    );

    containers.push(temp);
  }

  app.ticker.add( () => {
    let mouseposition = app.renderer.plugins.interaction.mouse.global;

    balls.forEach((ball, j) => {
      ball.think(mouseposition);

      letters[j].position.x = ball.diffX;
      letters[j].position.y = ball.diffY;
    });
  });
}

