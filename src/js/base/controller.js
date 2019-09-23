/*
    controller的用法
    
    Controller({
        init:(){
            this.view
            this.model
            this.xxx()
            this.yyy()
        },
        xxx(){}
        yyy(){}
    })
*/


var Controller = function (options) {
    var init = options.init

    let object = {
        view: null, //contrller 自己的view就是空的
        model: null,
        init: function (view, model) { //初始化方法
            this.view = view //controller的view就是闭包里面的view，这里的this就是controller
            this.model = model
            this.model.init()
            init.call(this, view, model)
            this.bindEvents.call(this) //绑定事件 等价于this.bindEvents.call(this)这里的this就是controller ;还有就是这里的bindEvents访问不到view,所以不能传进去
        }
    }
    console.log(object)
    console.log('object')
    debugger
    console.log(options)
    console.log('options')
    for (let key in options) {
        if (key !== 'init'  ) {
            object[key] = options[key]
        }
    }
    console.log('新的object')
    console.log(object)
    return object
}