/*
 百度
 Google
 Google Play
 Chrome
 Youtube
 Overwatch
 微信
 QQ
 TIM
 网易云音乐

 */
function TwoRect(ctx, x1, y1, w1, h1, x2, y2, w2, h2) {
  this.rect1 = new Rect(ctx, x1, y1, w1, h1);
  this.rect2 = new Rect(ctx, x2, y2, w2, h2);
}

inheritPrototype(TwoRect, Shape);

TwoRect.prototype.fill = function () {
  this.rect1.fill();
  this.rect2.fill();
  return this;
};
TwoRect.prototype.stroke = function () {
  this.rect1.stroke();
  this.rect2.stroke();
  return this;
};

function Clock() {

}