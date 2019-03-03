import * as PIXI from 'pixi.js';
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

  // let text0 = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Francois One', fontSize: 54, fill : 0x03aaea, align : 'center'});
  // text0.position.set(20);
  // container.addChild(text0);


  // let text1 = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Francois One', fontSize: 54, fill : 0xf9ed00, align : 'center'});
  // text1.position.set(0);
  // container.addChild(text1);

  // let text2 = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Francois One', fontSize: 54, fill : 0xe80289, align : 'center'});
  // text2.position.set(10);
  // container.addChild(text2);

  // let text3 = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Francois One', fontSize: 54, fill : 0x03aaea, align : 'center'});
  // text3.position.set(20);
  // text3.blendMode = 2;
  // container.addChild(text3);


  let els = document.querySelectorAll('.letter');
  let elsArray = Array.from(els);

  elsArray.forEach(l => {
    let coords = l.getBoundingClientRect();
    let letter = new PIXI.Text(l.innerText,{fontFamily : 'Francois One', fontSize: 108, fill : 0xf9ed00, align : 'center'});
    letter.position.x = coords.x;
    container.addChild(letter);
  
  });


  app.ticker.add( () => {
    let mouseposition = app.renderer.plugins.interaction.mouse.global;
    console.log(mouseposition);
  });
}

