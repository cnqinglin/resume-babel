//MOdel就是模板，在别的文件里只写：var modelx = Model({resourceNAme:'数据库里的className'})

/*
    model的用法：

    var model = Model({
        resourceName:'表名'
    })


*/
window.Model = function (options) {
  let resourceName = options.resourceName;
  return {
    init: function () {
      var APP_ID = 'L2qqr6Yi8ljnQ95IHsAwxFUv-9Nh9j0Va';
      var APP_KEY = 'PeoawREXvHjwgU0VQd0r2flG';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      }); //这是id和密码
    },
    fetch: function () {
      var query = new AV.Query(resourceName);
      return query.find(); //promise 对象
    },
    save: function (object) {
      var X = AV.Object.extend(resourceName); //创建textObject表

      var x = new X(); //在表中创建一行数据

      return x.save(object);
    }
  };
};