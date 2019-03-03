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

  elsArray.forEach(l => {
    let coords = l.getBoundingClientRect();
    let temp = new PIXI.Container();
    let letter = new PIXI.Text(l.innerText,{fontFamily : 'Francois One', fontSize: 108, fill : 0x000000, align : 'center'});
    letter.position.x = coords.x;
    letter.position.y = coords.y;
    // container.addChild(letter);
    temp.addChild(letter);
    container.addChild(temp);

    balls.push(
      new TheBall(coords.x, coords.y)
    );

    letters.push(temp);

  });


  app.ticker.add( () => {
    let mouseposition = app.renderer.plugins.interaction.mouse.global;

    balls.forEach((ball, j) => {
      ball.think(mouseposition);

      letters[j].position.x = ball.diffX;
      letters[j].position.y = ball.diffY;
    });
  });
}

