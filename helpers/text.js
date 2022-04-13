function getTextOffset(xPos, textWidth) {
  return xPos - textWidth / 2;
}

function makeCenteredText({ context, text, fontSize, fontFace, color, x, y }) {
  const font = context.font;
  context.font = `${fontSize}px ${fontFace}`;
  const textWidth = context.measureText(text).width;
  context.font = font;
  return {
    x: getTextOffset(x, textWidth),
    y: y,
    text: text,
    style: `${fontSize}px ${fontFace}`,
    color: color,
  };
}
