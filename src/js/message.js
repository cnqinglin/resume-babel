! function () {

    let  view = View('section.message') //设置V

    let  model = Model({
        resourceName: 'leaveMessage'
    })

    let controller = Controller({
        init: function (view, controller) {
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.loadmessages()
        },
        loadmessages: function () {
            this.model.fetch()
                .then((messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name} : ${item.content}`
                        this.messageList.appendChild(li)
                    })
                })
        },
        bindEvents: function () {
            //把留言功能存到leanCloud数据库

            this.form.addEventListener('submit', (e) => { //监听form表单的submit事件
                e.preventDefault() //防止form表单自动刷新页面
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value //拿到用户输入的内容
            let name = myForm.querySelector('input[name=name]').value //拿到用户的名字
            this.model.save({
                    'name': name,
                    'content': content
                })
                .then(function (object) {
                    let li = document.createElement('li')
                    li.innerText = `${object.attributes.name} : ${object.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=content]').value = ''
                    myForm.querySelector('input[name=name]').value = ''
                    console.log(object)
                })
        }
    })
    controller.init(view, model)
}.call()