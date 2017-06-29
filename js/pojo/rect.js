/**
 *
 * @param ctx
 * @param sx
 * @param sy
 * @param sw
 * @param sh
 * @param vct
 * @param cx
 * @param cy
 * @constructor
 */
function Rect(ctx, sx, sy, sw, sh, vct, cx, cy) {
  if (cx == null) {
    cx = sx + sw / 2;
    cy = sy + sh / 2;
  }
  Shape.call(this, ctx, sx, sy, vct, cx, cy);
  this.sw = sw;
  this.sh = sh;
}

inheritPrototype(Rect, Shape);

Rect.prototype.fill = function () {
  var that = this;
  this.rotateAndDraw(function () {
    that.ctx.fillRect(that.dx, that.dy, that.sw, that.sh);
  });
  return this;
};

Rect.prototype.stroke = function () {
  var that = this;
  this.rotateAndDraw(function () {
    that.ctx.strokeRect(that.dx, that.dy, that.sw, that.sh);
  });
  return this;
};
