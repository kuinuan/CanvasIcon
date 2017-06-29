var PaintBrush = function () {
  var cvs = null;
  var ctx = null;

  var PaintBrush = function (canvasId, x, y, w, h) {
    cvs = document.getElementById(canvasId);
    cvs.style.display = "block";
    cvs.style.position = "absolute";
    cvs.style.left = x + "px";
    cvs.style.top = y + "px";
    cvs.width = w;
    cvs.height = h;
    ctx = cvs.getContext("2d");
    ctx.lineWidth = 2;
  };

  PaintBrush.prototype.getCanvas = function () {
    return cvs;
  };

  PaintBrush.prototype.getContext = function () {
    return ctx;
  };

  PaintBrush.prototype.fill = function (shape) {
    return shape.fill();
  };
  PaintBrush.prototype.stroke = function (shape) {
    return shape.stroke();
  };

  return PaintBrush;
}();

