! function () {
    var view = document.querySelector('nav.menu')
    var controller = function(view){
        
    }
    let aTags = view.querySelectorAll('nav.menu > ul > li > a')
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
            x.preventDefault() //阻止默认动作
            let a = x.currentTarget //获取用户点的a标签
            let href = a.getAttribute('href') //'href'就是锚点+名字 获取a标签的href
            let element = document.querySelector(href) //获取元素
            let top = element.offsetTop //得到元素和最顶点的距离
            //let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop


            let currentTop = window.scrollY //onclick瞬间获取滚动条的位置
            let targetTop = top - 100 //目标滚动距离;//页面滑动到x方向不变y方向把窗口定位到元素距离顶端100px的位置
            let s = targetTop - currentTop

            var coords = {
                y: currentTop
            }; //初始值为当前高度  
            var t = Math.abs((s / 100) * 300) //每一百像素缓动时间*300
            if (t > 500) {
                t = 500
            }
            var tween = new TWEEN.Tween(coords) //输入初始值
                .to({
                    y: targetTop
                }, t) //最后到达目标高度
                .easing(TWEEN.Easing.Quadratic.InOut) //调用淡入淡（缓动）出函数
                .onUpdate(() => { //每次更新时运行代码
                    window.scrollTo(0, coords.y)
                })
                .start(); //立即运行函数
        }
    }
}.call()