/**
 * @param {Number} start_or_end
 * @param {Number} [end]
 * @param {Boolean} [containsEnd]
 * @returns {Number}
 * get a Random Number:
 * getRandom(10): 0, 1, 2, ..., 8, 9
 * getRandom(3, 10): 3, 4, 5, ..., 8, 9
 * getRandom(3, 10, true): 3, 4, 5, ..., 8, 9, 10
 * getRandom(-2, 2, true): -2, -1, 0, 1, 2
 */
function getRandom(start_or_end, end, containsEnd) {
  if (end == null) {
    end = start_or_end;
    start_or_end = 0;
  }
  if (containsEnd) {
    return Math.floor(Math.random() * (end - start_or_end + 1)) + start_or_end;
  } else {
    return Math.floor(Math.random() * (end - start_or_end)) + start_or_end;
  }
}

function getScrollBarWidth() {
  document.body.style.overflow = "hidden";
  var width = document.body.clientWidth;
  document.body.style.overflow = "scroll";
  width -= document.body.clientWidth;
  if (!width) width = document.body.offsetWidth - document.body.clientWidth;
  document.body.style.overflow = "";
  return width;
}

/**
 * 获取 ImageData 中坐标为 (x, y) 的像素的颜色值
 * @param {ImageData} imageData
 * @param {Number} x
 * @param {Number} y
 * @returns {string} rgba(r, g, b, a)
 */
function getPixelColor(imageData, x, y) {
  var data = imageData.data;
  var index = ((y - 1) * imageData.width + (x - 1)) * 4;
  return "rgba(" +
    data[index] + ", " +
    data[index + 1] + ", " +
    data[index + 2] + ", " +
    data[index + 3] + ")";
}

/**
 * 设置 ImageData 中坐标为 (x, y) 的像素的颜色值
 * @param {ImageData} imageData
 * @param {Number} x
 * @param {Number} y
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a
 */
function setPixelColor(imageData, x, y, r, g, b, a) {
  var data = imageData.data;
  var index = ((y - 1) * imageData.width + (x - 1)) * 4;
  data[index] = r;
  data[index + 1] = g;
  data[index + 2] = b;
  data[index + 3] = a;
}

/**
 * 给图片添加马赛克效果
 * @param {ImageData} imageData
 * @param {Number} sx startX
 * @param {Number} sy startY
 * @param {Number} sw startWidth
 * @param {Number} sh startHeight
 * @param {Number} t mosaicTimes
 */
function mosaic(imageData, sx, sy, sw, sh, t) {
  if (t == 1) return;
  var data = imageData.data;
  // 起始 index
  var startIndex = ((sy - 1) * imageData.width + (sx - 1)) * 4;
  // 纵向需要处理的次数（行）
  var th = Math.floor(sh / t);
  // 横向需要处理的次数（列）
  var tw = Math.floor(sw / t);
  // 注意，使用多次马赛克，可能导致边缘变白，因为余数可能为小数
  // 横向像素余数 x MOD
  var xm = sw % t;
  // 纵向像素余数 y MOD
  var ym = sh % t;
  for (var i = 0; i < th; i++) {
    for (var j = 0; j < tw; j++) {
      mosaicRect(getIndex(i, j), t, t);
    }
    // 右侧边界的处理
    mosaicRect(getIndex(i, tw), xm, t);
  }

  // 下侧边界的处理
  for (j = 0; j < tw; j++) {
    mosaicRect(getIndex(th, j), t, ym);
  }

  // 最右下角的矩形的处理
  mosaicRect(getIndex(th, tw), xm, ym);

  /**
   * 马赛克一个矩形框，求平均值
   * @param index 需要进行马赛克处理的矩形的起始索引
   * @param w 矩形宽
   * @param h 矩形高
   */
  function mosaicRect(index, w, h) {
    var red = 0,
      green = 0,
      blue = 0,
      alpha = 0;
    var temp, k, l;
    for (k = 0; k < h; k++) {
      for (l = 0; l < w; l++) {
        temp = index + (k * imageData.width + l) * 4;
        red += data[temp];
        green += data[temp + 1];
        blue += data[temp + 2];
        alpha += data[temp + 3];
      }
    }
    red /= (h * w);
    green /= (h * w);
    blue /= (h * w);
    alpha /= (h * w);
    for (k = 0; k < h; k++) {
      for (l = 0; l < w; l++) {
        temp = index + (k * imageData.width + l) * 4;
        data[temp] = red;
        data[temp + 1] = green;
        data[temp + 2] = blue;
        data[temp + 3] = alpha;
      }
    }
  }

  /**
   * 获得真实 index 的通用方法
   * @param row 第 row 行马赛克
   * @param column 第 column 列马赛克
   * @returns {number} 真实 index
   */
  function getIndex(row, column) {
    return startIndex + (row * imageData.width + column) * t * 4;
  }
}

/**
 * 反转颜色
 * @param {ImageData} imageData
 */
function reverseColor(imageData) {
  var data = imageData.data;
  var pixels = imageData.width * imageData.height;
  for (var i = 0; i < pixels; i++) {
    var index = i * 4;
    data[index] = 255 - data[index];
    data[index + 1] = 255 - data[index + 1];
    data[index + 2] = 255 - data[index + 2];
  }
}

/**
 * 灰度处理
 * @param {ImageData} imageData
 */
function greyProcessing(imageData) {
  var data = imageData.data;
  var pixels = imageData.width * imageData.height;
  for (var i = 0; i < pixels; i++) {
    var index = i * 4;
    var grey = Math.floor((data[index] + data[index + 1] + data[index + 2]) / 3);
    data[index] = grey;
    data[index + 1] = grey;
    data[index + 2] = grey;
  }
}

/**
 * 某段代码的速度测试
 * @param {Function} code
 * @param {Number} [times]
 * @param {String} [tag]
 */
function speedTest(code, times, tag) {
  if (!times) times = 100;
  if (!tag) tag = "";
  tag += " " + times + " times";
  console.time(tag);
  for (var i = 0; i < times; i++) {
    code();
  }
  console.timeEnd(tag);
}

/**
 * 判断两个矩形是否重叠
 * @param {Rect} rectA
 * @param {Rect} rectB
 * @returns {boolean}
 */
function rectCollision(rectA, rectB) {
  return rectA.sx + rectA.sw >= rectB.sx &&
    rectA.sy + rectA.sh >= rectB.sy &&
    rectB.sx + rectB.sw >= rectA.sx &&
    rectB.sy + rectB.sh >= rectA.sy;
}

/**
 * 判断两个圆形是否重叠
 * @param {Arc} arcA
 * @param {Arc} arcB
 */
function arcCollision(arcA, arcB) {
  return Math.sqrt(Math.pow(arcA.sx - arcB.sx, 2) +
      Math.pow(arcA.sy - arcB.sy, 2)) < arcA.r + arcB.r;
}

/**
 * 圆形到边界的处理
 * @param {Arc} arc
 */
function arcTouchFringe(arc) {
  var vector = arc.vct;
  if (arc.sx + arc.r >= cvs.width() ||
    arc.sx - arc.r <= 0) {
    vector.angle = Math.PI - vector.angle;
  }
  if (arc.sy + arc.radius >= cvs.height() ||
    arc.sy - arc.radius <= 0) {
    vector.angle = -vector.angle;
  }
}
/**
 * 勾股定理得出斜边长
 * @param {Number} n1
 * @param {Number} n2
 * @returns {number}
 */
function pythagorean(n1, n2) {
  return Math.sqrt(Math.pow(n1, 2) + Math.pow(n2, 2));
}

function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
