function makeCanvas({ document, width, height }) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  return { canvas, context };
}

CanvasRenderingContext2D.prototype.fillCircle = function (
  x,
  y,
  radius,
  color
) {
  this.fillStyle = color;
  this.beginPath();
  this.arc(x, y, radius, 0, 2 * Math.PI);
  this.fill();
};

CanvasRenderingContext2D.prototype.drawText = function ({
  x,
  y,
  text,
  style,
  color,
}) {
  this.fillStyle = color;
  this.font = style;
  this.fillText(text, x, y);
};
