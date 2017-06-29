/**
 * 动画
 * @param ctx
 * @param w
 * @param h
 * @param code
 * @param delay 16ms/33ms/41ms
 */
function animate(ctx, w, h, code, delay) {
  function redraw() {
    ctx.clearRect(0, 0, w, h);
    code();
    setTimeout(arguments.callee, delay);
  }
  redraw();
}
