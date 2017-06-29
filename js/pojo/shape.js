/**
 * 图形基类
 * @param ctx 画图上下文
 * @param sx 起始绘制点 x
 * @param sy 起始绘制点 y
 * @param vct 方向向量
 * @param cx 中心点 x
 * @param cy 中心点 y
 * @constructor
 */
function Shape(ctx, sx, sy, vct, cx, cy) {
  this.ctx = ctx;
  this.sx = sx;
  this.sy = sy;
  // 旋转依据的中心点
  this.cx = cx;
  this.cy = cy;
  // 变形后的起始绘制点
  this.dx = sx - cx;
  this.dy = sx - cy;
  this.vct = vct;
}

Shape.prototype.rotateAndDraw = function (code) {
  ctx.transform(this.vct.cosValue(), this.vct.sinValue(), -this.vct.sinValue(), this.vct.cosValue(), this.cx, this.cy);
  if (code != null) code();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  return this;
};

Shape.prototype.preProcess = function () {
  return this;
};

Shape.prototype.fill = function () {
  return this;
};

Shape.prototype.stroke = function () {
  return this;
};