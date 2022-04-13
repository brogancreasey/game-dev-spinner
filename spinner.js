const fontFace = "Arial";

const color = {
  bg: "#02070a",
  primary: {
    main: "#206485",
    contrast: "#EFF7FB",
  },
  secondary: {
    main: "#ff8c00",
    contrast: "#140b00",
    highlight: "#FFBF70",
  },
};

const { canvas, context } = makeCanvas({
  document,
  width: window.innerWidth,
  height: window.innerHeight,
});
document.body.appendChild(canvas);

const HALF_WIDTH = canvas.width / 2;
const HALF_HEIGHT = canvas.height / 2;

const title = makeCenteredText({
  context,
  text: "What Game Should I Dev?",
  fontSize: 25,
  fontFace: fontFace,
  color: color.secondary.main,
  x: HALF_WIDTH,
  y: 40,
});

const coreMechanicLabel = makeCenteredText({
  context,
  text: "Core",
  fontSize: 20,
  fontFace: fontFace,
  color: color.primary.main,
  x: HALF_WIDTH,
  y: HALF_HEIGHT - 15,
});

const secondaryMechanicLabel = makeCenteredText({
  context,
  text: "Secondary",
  fontSize: 20,
  fontFace: fontFace,
  color: color.primary.contrast,
  x: HALF_WIDTH,
  y: HALF_HEIGHT - 150,
});

const tertiaryMechanicLabel = makeCenteredText({
  context,
  text: "Tertiary",
  fontSize: 20,
  fontFace: fontFace,
  color: color.primary.contrast,
  x: HALF_WIDTH,
  y: HALF_HEIGHT - 250,
});

const theme = makeCenteredText({
  context,
  text: themes.randomElem(),
  fontSize: 50,
  fontFace: fontFace,
  color: color.secondary.highlight,
  x: HALF_WIDTH,
  y: canvas.height - 30,
});

const themeLabel = makeCenteredText({
  context,
  text: "Theme",
  fontSize: 20,
  fontFace: fontFace,
  color: color.secondary.main,
  x: HALF_WIDTH,
  y: canvas.height - 90,
});

function drawGraphicsGenreBackground(margin, width, startX) {
  let x = startX;
  context.fillStyle = color.primary.main;
  for (let i = 0; i < 4; i++) {
    context.fillRect(x, 60, width, 60);
    x += width + margin;
  }
}

function drawGraphicsGenreText(margin, width, startX) {
  const text = [
    graphics.randomElem(),
    artStyle.randomElem(),
    genres.randomElem(),
    subGenres.randomElem(),
  ];

  let x = startX + width / 2;

  for (const t of text) {
    context.drawText(
      makeCenteredText({
        context,
        text: t,
        fontSize: 20,
        fontFace: fontFace,
        color: color.primary.contrast,
        x: x,
        y: 99,
      })
    );
    x += width + margin;
  }
}

function drawGraphicsAndGenre() {
  const margin = 2;
  const width = 170;
  const totalWidth = 4 * width + 3 * margin;
  const startX = HALF_WIDTH - totalWidth / 2;
  drawGraphicsGenreBackground(margin, width, startX);
  drawGraphicsGenreText(margin, width, startX);
}

function drawMechanicsBackground() {
  context.fillCircle(HALF_WIDTH, HALF_HEIGHT, 300, color.primary.main);
  context.fillCircle(HALF_WIDTH, HALF_HEIGHT, 200, color.secondary.main);
  context.fillCircle(HALF_WIDTH, HALF_HEIGHT, 100, color.primary.contrast);
}

function drawMechanics() {
  const mechanicsText = mechanics.sampleUnique(3);
  drawMechanicsBackground();

  context.drawText(coreMechanicLabel);
  context.drawText(secondaryMechanicLabel);
  context.drawText(tertiaryMechanicLabel);

  const core = makeCenteredText({
    context,
    text: mechanicsText[0],
    fontSize: 25,
    fontFace: fontFace,
    color: color.bg,
    x: HALF_WIDTH,
    y: HALF_HEIGHT + 15,
  });

  const secondary = makeCenteredText({
    context,
    text: mechanicsText[1],
    fontSize: 25,
    fontFace: fontFace,
    color: color.secondary.contrast,
    x: HALF_WIDTH,
    y: HALF_HEIGHT + 150,
  });

  const tertiary = makeCenteredText({
    context,
    text: mechanicsText[2],
    fontSize: 25,
    fontFace: fontFace,
    color: color.primary.contrast,
    x: HALF_WIDTH,
    y: HALF_HEIGHT + 250,
  });

  context.drawText(core);
  context.drawText(secondary);
  context.drawText(tertiary);
}

function draw() {
  context.fillStyle = color.bg;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawText(title);
  drawGraphicsAndGenre();
  drawMechanics();
  context.drawText(themeLabel);
  context.drawText(theme);
}

document.onclick = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw();
};

draw();
