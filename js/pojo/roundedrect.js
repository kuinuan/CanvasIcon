/**
 * 圆角矩形
 * @param ctx
 * @param sx
 * @param sy
 * @param sw
 * @param sh
 * @param vct
 * @param r
 * @param cx
 * @param cy
 * @constructor
 */
function RoundedRect(ctx, sx, sy, sw, sh, vct, r, cx, cy) {
  Rect.call(this, ctx, sx, sy, sw, sh, vct, cx, cy);
  this.r = r;
}

inheritPrototype(RoundedRect, Rect);

RoundedRect.prototype.preProcess = function () {
  var that = this;
  var cursorX = this.dx;
  var cursorY = this.dy;
  this.rotateAndDraw(function () {
    that.ctx.beginPath();
    that.ctx.moveTo(cursorX += that.r, cursorY);
    that.ctx.lineTo(cursorX += that.sw - 2 * that.r, cursorY);
    that.ctx.quadraticCurveTo(cursorX += that.r, cursorY, cursorX, cursorY += that.r);
    that.ctx.lineTo(cursorX, cursorY += that.sh - 2 * that.r);
    that.ctx.quadraticCurveTo(cursorX, cursorY += that.r, cursorX -= that.r, cursorY);
    that.ctx.lineTo(cursorX -= that.sw - 2 * that.r, cursorY);
    that.ctx.quadraticCurveTo(cursorX -= that.r, cursorY, cursorX, cursorY -= that.r);
    that.ctx.lineTo(cursorX, cursorY -= that.sh - 2 * that.r);
    that.ctx.quadraticCurveTo(cursorX, cursorY -= that.r, cursorX + that.r, cursorY);
  });
  return this;
};

RoundedRect.prototype.fill = function () {
  this.preProcess();
  ctx.fill();
  return this;
};

RoundedRect.prototype.stroke = function () {
  this.preProcess();
  ctx.stroke();
  return this;
};
