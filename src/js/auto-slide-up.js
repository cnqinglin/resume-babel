!function(){  //加！说明这个不是函数声明，而是执行（但是注意：加！之后会改变函数返回值），或者加括号就行
    //添加offset类
    var specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    findClosestAndRemoveOffset()
    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset()
    })

    /*helper*/
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0

        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window
                    .scrollY)) {
                minIndex = i
            }
        }
        //minIndex就是离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        //id = 'siteAbout' 'a[href="#siteAbout"]' 
        //id = 'siteWorks' 'a[href="#siteWorks"]'
        //id = 'siteSkills' 'a[href="#siteSkills"]'
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    let liTags = document.querySelectorAll('nav.menu > ul >li')

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    var coords = {
        x: 0
    };
    var tween = new TWEEN.Tween(coords)
        .to({
            x: 1000
        }, 1000)
        .easing(TWEEN.Easing.Quadratic.In)
        .onUpdate(() => {
            //console.log(coords.x)
        })
        .start();

    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active')

        }
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active')
        }
    }
}.call()
/*声明一个匿名立即执行函数，避免全局变量*/