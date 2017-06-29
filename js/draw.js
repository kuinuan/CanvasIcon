/**
 * Created by JarenChow on 2017/6/28.
 */
var brush = new PaintBrush("myCanvas", 0, 0,
  document.body.clientWidth, document.body.clientHeight);

var cvs = brush.getCanvas();
var ctx = brush.getContext();

// var x = 450;
// var y = 450;
// var w = h = 100;
// var r1 = new Rect(ctx, x, y, w, h, new Vector(1, 0));
// var r2 = new Rect(ctx, x, y, w, h, new Vector(1, 45 * Math.PI / 180));
//
//
// brush.fill(r1);
// brush.stroke(r2);

var rect = new Rect(ctx, 150, 150, 100, 100, new Vector(1, 0));

