!function () {
  var view = View('#topNavBar');
  var controller = {
    //有结构,controller对view的操作全部都放在controller的属性里面
    view: null,
    //contrller 自己的view就是空的
    init: function (view) {
      //初始化方法
      this.view = view; //controller的view就是闭包里面的view，这里的this就是controller

      this.bindEvents(); //绑定事件 等价于this.bindEvents.call(this)这里的this就是controller ;还有就是这里的bindEvents访问不到view,所以不能传进去
    },
    bindEvents: function () {
      var view = this.view; //这里的view就是第四行的view

      window.addEventListener('scroll', x => {
        //箭头函数内外this不变
        if (window.scrollY > 0) {
          this.active();
        } else {
          this.deactive();
        }
      });
    },
    active: function () {
      this.view.classList.add('stickty');
    },
    deactive: function () {
      this.view.classList.remove('stickty');
    }
  };
  controller.init(view); //等价于controller.init.call(controller,view)(这里的this就是controller)或者可以说如果用一个对象来调用一个函数，那么这个对象就是这个函数的this参数
}.call();