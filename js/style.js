function Style(ctx) {
  this.ctx = ctx;
}

Style.prototype.fillStyle = function (style) {
  ctx.save();
  ctx.fillStyle = style;
};

Style.prototype.strokeStyle = function (style) {
  ctx.save();
  ctx.strokeStyle = style;
};

Style.prototype.restore = function () {
  ctx.restore();
};