/**
 *
 * @param ctx
 * @param x
 * @param y
 * @param r
 * @param startAngle
 * @param endAngle
 * @param anticlockwise
 * @param vct
 * @constructor
 */
function Arc(ctx, x, y, r, startAngle, endAngle, anticlockwise, vct) {
  Shape.call(this, ctx, x, y, vct);
  this.r = r;
  this.startAngle = startAngle;
  this.endAngle = endAngle;
  this.anticlockwise = anticlockwise;
  this.mass = Math.PI * Math.pow(r, 2);
}

inheritPrototype(Arc, Shape);

Arc.prototype.preProcess=function () {

  return this;
};

Arc.prototype.fill=function () {

  return this;
};

Arc.prototype.stroke=function () {
  return this;
};