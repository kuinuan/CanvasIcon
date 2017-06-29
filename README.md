# Canvas 制图系统
## 特性
1. 基于 HTML5 Canvas，纯原生 JavaScript；
2. 面向对象思想构建；
3. 代码解耦合度高，易于组件的增加、删除以及修改；
4. 易于使用。

## 项目结构
* index.html：画布容器
* css/style.css：初始化 HTML5 内元素
* js/
  * utils.js 工具函数
  * pojo/ 实体构造函数包
    * vector.js 向量对象
    * shape.js 形状，所有形状的基础
    * rect.js 矩形
    * roundedrect.js 圆角矩形
    * arc.js 圆弧
  * style.js 绘图样式
  * icon.js 需要绘制的图标
  * animate.js 动画
  * paintbrush.js 画笔
  * draw.js 绘制入口

## 更新日志
#### Version - 0.1
  * 初始化项目
  * 构建基础模块
