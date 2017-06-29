function Vector(length, angle) {
  this.length = length;
  this.angle = angle;
}

Vector.prototype.cosValue = function () {
  return Math.cos(this.angle);
};

Vector.prototype.sinValue = function () {
  return Math.sin(this.angle);
};

Vector.prototype.setAngle = function (value) {
  this.angle = value;
};

Vector.prototype.addAngle = function (value) {
  this.angle += value;
};