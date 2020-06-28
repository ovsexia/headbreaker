// @ts-nocheck
// ============
// Basic Canvas
// ============
const basic = new headbreaker.Canvas('basic-canvas', { width: 500, height: 300, pieceSize: 50, proximity: 10 });
basic.sketchPiece({
  structure: { right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot },
  metadata: { id: 'a', currentPosition: { x: 50, y: 50 }, color: '#B87D32' }
});
basic.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot },
  metadata: { id: 'b', currentPosition: { x: 100, y: 50 }, color: '#B83361' }
});
basic.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab },
  metadata: { id: 'g', currentPosition: { x: 100, y: 230 } }
});
basic.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot },
  metadata: { id: 'c', currentPosition: { x: 150, y: 50 }, color: '#B83361' }
});
basic.sketchPiece({
  structure: { up: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot },
  metadata: { id: 'd', currentPosition: { x: 150, y: 100 }, color: '#37AB8C' }
});
basic.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot },
  metadata: { id: 'e', currentPosition: { x: 250, y: 200 }, color: '#3934C2' }
});
basic.sketchPiece({
  structure: { up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Tab },
  metadata: { id: 'f', currentPosition: { x: 350, y: 250 }, color: '#A4C234' }
});
basic.draw();

// ===========
// Soft Canvas
// ===========

const soft = new headbreaker.Canvas('soft-canvas', {
  width: 500, height: 300,
  pieceSize: 50, proximity: 10,
  lineSoftness: 0.2
});
soft.sketchPiece({
  structure: { right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot },
  metadata: { id: 'a', currentPosition: { x: 50, y: 50 }, color: '#B87D32' }
});
soft.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot },
  metadata: { id: 'b', currentPosition: { x: 100, y: 50 }, color: '#B83361' }
});
soft.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab },
  metadata: { id: 'g', currentPosition: { x: 100, y: 230 } }
});
soft.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot },
  metadata: { id: 'c', currentPosition: { x: 150, y: 50 }, color: '#B83361' }
});
soft.sketchPiece({
  structure: { up: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot },
  metadata: { id: 'd', currentPosition: { x: 150, y: 100 }, color: '#37AB8C' }
});
soft.sketchPiece({
  structure: { up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot },
  metadata: { id: 'e', currentPosition: { x: 250, y: 200 }, color: '#3934C2' }
});
soft.sketchPiece({
  structure: { up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Tab },
  metadata: { id: 'f', currentPosition: { x: 350, y: 250 }, color: '#A4C234' }
});
soft.draw();

// ==============
// Perfect Canvas
// ==============

const perfect = new headbreaker.Canvas('perfect-canvas', {
  width: 800, height: 300,
  pieceSize: 100, proximity: 20,
  borderFill: 10,
  strokeWidth: 2, strokeColor: '#00200B',
  lineSoftness: 0.0
});

perfect.sketchPiece({
  structure: { right: headbreaker.Tab, down: headbreaker.Slot },
  metadata: { id: 'a', targetPosition: { x: 100, y: 100 }, color: '#0EC430' }
});
perfect.sketchPiece({
  structure: { right: headbreaker.Slot, left: headbreaker.Slot },
  metadata: { id: 'b', targetPosition: { x: 200, y: 100 }, color: '#098520' }
});
perfect.sketchPiece({
  structure: { down: headbreaker.Tab, left: headbreaker.Tab },
  metadata: { id: 'c', targetPosition: { x: 330, y: 80 }, color: '#04380D' }
});
perfect.sketchPiece({
  structure: { up: headbreaker.Slot },
  metadata: { id: 'd', targetPosition: { x: 480, y: 130 }, color: '#054511' }
});
perfect.sketchPiece({
  structure: { up: headbreaker.Tab },
  metadata: { id: 'e', targetPosition: { x: 530, y: 80 }, color: '#04330C' }
});

perfect.draw();

// =================
// Background Canvas
// =================

let vangogh = new Image();
vangogh.src = 'static/vangogh.jpg';
vangogh.onload = () => {
  const background = new headbreaker.Canvas('background-canvas', {
    width: 800, height: 800,
    pieceSize: 100, proximity: 20,
    borderFill: 10, strokeWidth: 2,
    lineSoftness: 0.12, image: vangogh,
  });

  background.sketchPiece({
    structure: 'TS--',
    metadata: { id: 'a', targetPosition: { x: 100, y: 100 } },
  });
  background.sketchPiece({
    structure: 'SSS-',
    metadata: { id: 'b', targetPosition: { x: 200, y: 100 } },
  });
  background.sketchPiece({
    structure: 'STT-',
    metadata: { id: 'c', targetPosition: { x: 300, y: 100 } },
  });
  background.sketchPiece({
    structure: 'STT-',
    metadata: { id: 'd', targetPosition: { x: 400, y: 100 } },
  });
  background.sketchPiece({
    structure: '-TT-',
    metadata: { id: 'e', targetPosition: { x: 500, y: 100 } },
  });
  background.sketchPiece({
    structure: 'TS-T',
    metadata: { id: 'f', targetPosition: { x: 100, y: 200 } },
  });
  background.sketchPiece({
    structure: 'SSST',
    metadata: { id: 'g', targetPosition: { x: 200, y: 200 } },
  });
  background.sketchPiece({
    structure: 'STTS',
    metadata: { id: 'h', targetPosition: { x: 300, y: 200 } },
  });
  background.sketchPiece({
    structure: 'TSTS',
    metadata: { id: 'i', targetPosition: { x: 400, y: 200 } },
  });
  background.sketchPiece({
    structure: '-SSS',
    metadata: { id: 'j', targetPosition: { x: 500, y: 200 } },
  });
  background.sketchPiece({
    structure: 'ST-T',
    metadata: { id: 'k', targetPosition: { x: 100, y: 300 } },
  });
  background.sketchPiece({
    structure: 'TSTT',
    metadata: { id: 'l', targetPosition: { x: 200, y: 300 } },
  });
  background.sketchPiece({
    structure: 'STSS',
    metadata: { id: 'm', targetPosition: { x: 300, y: 300 } },
  });
  background.sketchPiece({
    structure: 'TTTT',
    metadata: { id: 'n', targetPosition: { x: 400, y: 300 } },
  });
  background.sketchPiece({
    structure: '-SST',
    metadata: { id: 'o', targetPosition: { x: 500, y: 300 } },
  });
  background.sketchPiece({
    structure: 'ST-S',
    metadata: { id: 'p', targetPosition: { x: 100, y: 400 } },
  });
  background.sketchPiece({
    structure: 'TSTT',
    metadata: { id: 'q', targetPosition: { x: 200, y: 400 } },
  });
  background.sketchPiece({
    structure: 'TTSS',
    metadata: { id: 'r', targetPosition: { x: 300, y: 400 } },
  });
  background.sketchPiece({
    structure: 'SSSS',
    metadata: { id: 's', targetPosition: { x: 400, y: 400 } },
  });
  background.sketchPiece({
    structure: '-STT',
    metadata: { id: 't', targetPosition: { x: 500, y: 400 }, currentPosition: { x: 613, y: 386 } }
  });
  background.sketchPiece({
    structure: 'T--S',
    metadata: { id: 'u', targetPosition: { x: 100, y: 500 } }
  });
  background.sketchPiece({
    structure: 'T-ST',
    metadata: { id: 'v', targetPosition: { x: 200, y: 500 } }
  });
  background.sketchPiece({
    structure: 'T-SS',
    metadata: { id: 'w', targetPosition: { x: 300, y: 500 } }
  });
  background.sketchPiece({
    structure: 'S-ST',
    metadata: { id: 'x', targetPosition: { x: 400, y: 500 }, currentPosition: { x: 425, y: 530 } }
  });
  background.sketchPiece({
    structure: '--TT',
    metadata: { id: 'y', targetPosition: { x: 500, y: 500 }, currentPosition: { x: 570, y: 560 } }
  });
  background.draw();
}

// ====================
// Autogenerated Canvas
// ====================


let xul = new Image();
xul.src = 'static/xul.jpg';
xul.onload = () => {
  const autogen = new headbreaker.Canvas('autogen-canvas', {
    width: 800, height: 800,
    pieceSize: 100, proximity: 20,
    borderFill: 10, strokeWidth: 1.5,
    lineSoftness: 0.18, image: xul,
  });

  autogen.autogenerate({
    horizontalPiecesCount: 6,
    verticalPiecesCount: 5
  });
  autogen.draw();
}

// =================
// Randomized Canvas
// =================

let dali = new Image();
dali.src = 'static/dali.jpg';
dali.onload = () => {
  const randomized = new headbreaker.Canvas('randomized-canvas', {
    width: 800, height: 800,
    pieceSize: 100, proximity: 20,
    borderFill: 10, strokeWidth: 2,
    lineSoftness: 0.12, image: dali
  });

  randomized.autogenerate({
    insertsGenerator: headbreaker.sequence.flipflop
  });
  randomized.shuffle(0.7);
  randomized.draw();
}


// =============
// Labels Canvas
// =============

const labels = new headbreaker.Canvas('labels-canvas', {
  width: 400, height: 400,
  pieceSize: 80, proximity: 25,
  borderFill: 10, strokeWidth: 2,
  lineSoftness: 0.18,
});

labels.sketchPiece({
  structure: { right: headbreaker.Tab },
  metadata: {
    id: 'tree-kanji',
    color: '#23599E',
    strokeColor: '#18396B',
    label: { text: '木', fontSize: 70, x: -5, y: 5 }
  }
});

labels.sketchPiece({
  structure: { right: headbreaker.Tab },
  metadata: {
    id: 'fire-kanji',
    color: '#23599E',
    strokeColor: '#18396B',
    label: { text: '火', fontSize: 70, x: -5, y: 5 }
  }
});

labels.sketchPiece({
  structure: { right: headbreaker.Tab },
  metadata: {
    id: 'water-kanji',
    color: '#23599E',
    strokeColor: '#18396B',
    label: { text: '水', fontSize: 70, x: -5, y: 5 }
  }
});

labels.sketchPiece({
  structure: { left: headbreaker.Slot },
  metadata: {
    id: 'water-emoji',
    color: '#EBB34B',
    strokeColor: '#695024',
    label: { text: '💧', fontSize: 70, x: 5, y: 0 }
  }
});

labels.sketchPiece({
  structure: { left: headbreaker.Slot },
  metadata: {
    id: 'tree-emoji',
    color: '#EBB34B',
    strokeColor: '#695024',
    label: { text: '🌳', fontSize: 70, x: 5, y: 0 }
  }
});

labels.sketchPiece({
  structure: { left: headbreaker.Slot },
  metadata: {
    id: 'fire-emoji',
    color: '#EBB34B',
    strokeColor: '#695024',
    label: { text: '🔥', fontSize: 70, x: 5, y: 0 }
  }
});

labels.shuffle(0.6);
labels.draw();

// =============
// Sounds Canvas
// =============

var audio = new Audio('static/connect.wav');
let berni = new Image();
berni.src = 'static/berni.jpg';
berni.onload = () => {
  const sound = new headbreaker.Canvas('sound-canvas', {
    width: 800, height: 800,
    pieceSize: 100, proximity: 20,
    borderFill: 10, strokeWidth: 1.5,
    lineSoftness: 0.18, image: berni,
    strokeColor: 'black'
  });

  sound.autogenerate({
    horizontalPiecesCount: 6,
    insertsGenerator: headbreaker.sequence.random
  });

  sound.draw();

  sound.onConnect((_piece, figure, _target, targetFigure) => {
    figure.shape.stroke('yellow');
    targetFigure.shape.stroke('yellow');
    audio.play();
    sound.redraw();
    setTimeout(() => {
      figure.shape.stroke('black');
      targetFigure.shape.stroke('black');
      sound.redraw();
    }, 200);
  });

  sound.onDisconnect((it) => {
    audio.play();
  });
}


// ==============
// Dynamic Canvas
// ==============

function updateLabel(piece, figure, delta) {
  console.log(`BEFORE: ${piece.metadata.id}: ${piece.metadata.label.text} - ${figure.label.text()}`);

  piece.metadata.label.text = Number(piece.metadata.label.text) + delta;
  figure.label.text(piece.metadata.label.text);

  console.log(`AFTER: ${piece.metadata.id}: ${piece.metadata.label.text} - ${figure.label.text()}`);
}

const dynamic = new headbreaker.Canvas('dynamic-canvas', { width: 700, height: 700, pieceSize: 100, proximity: 20,  borderFill: 10, lineSoftness: 0.2, strokeWidth: 0 });
dynamic.defineTemplate('A', {
  structure: 'TTSS', metadata: { label: { text: '0', x: 22 }, color: '#DB7BBF' }
});
dynamic.defineTemplate('B', {
  structure: 'TTTT', metadata: { label: { text: '0', x: 22 }, color: '#438D8F' }
});
dynamic.defineTemplate('C', {
  structure: 'SSSS', metadata: { label: { text: '0', x: 22 }, color: '#DBC967' }
});
dynamic.defineTemplate('D', {
  structure: 'STTT', metadata: { label: { text: '0', x: 22 }, color: '#8F844A' }
});
dynamic.defineTemplate('E', {
  structure: 'SSTT', metadata: { label: { text: '0', x: 22 }, color: '#7DDADB' }
});

dynamic.sketchPieceUsingTemplate('a', 'A');
dynamic.sketchPieceUsingTemplate('b', 'A');
dynamic.sketchPieceUsingTemplate('c', 'B');
dynamic.sketchPieceUsingTemplate('d', 'C');
dynamic.sketchPieceUsingTemplate('e', 'C');
dynamic.sketchPieceUsingTemplate('f', 'D');
dynamic.sketchPieceUsingTemplate('g', 'E');

dynamic.onConnect((piece, figure, target, targetFigure) => {
  console.log("connecting")
    updateLabel(piece, figure, 1);
  updateLabel(target, targetFigure, 1);
  dynamic.redraw();
});
dynamic.onDisconnect((piece, figure, target, targetFigure) => {
  console.log("disconnecting")
  updateLabel(piece, figure, -1);
  updateLabel(target, targetFigure, -1);
  dynamic.redraw();
});

dynamic.shuffle(0.7);
dynamic.draw();
