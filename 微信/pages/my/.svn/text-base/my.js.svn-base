// pages/my/my.js

Page({
  data: {
    titles: ["汤类", "凉菜", "热菜", "主食", "肉类", "冷饮"],
    logs: [{ name: "灯笼大人", adress: "河北石家庄" }, { name: "灯笼大人的雪球", adress: "山东临沂" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }],
    currentIndex: "0"
  },
  
  showHello: function (event) {
    console.log(event.target.id)
    this.setData({
      // 用block时
      // currentIndex: event.target.id
      // 不用block时
      currentIndex: event.currentTarget.dataset.idx
    });
    var name = "用户" + event.target.id;

    var log = this.data.logs
    // var log = [{ name: "灯笼大人", adress: "河北石家庄" }, { name: "灯笼大人的雪球", adress: "山东临沂" }, { name: "灯笼sama", adress: "山东青岛" }, { name: "灯笼sama", adress: "山东青岛" }]
    log[0].name = name
    log[1].name = "啦啦啦啦啦啦啦"
    this.setData({ logs: log });
    // this.data.logs = log
    console.log(this.data.logs.length)
  },
  goto: function () {
    wx.navigateTo({
      url: '../food/foodList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
  // onShareAppMessage: function () {
  //   return {
  //     title: '自定义分享标题',
  //     path: '/page/user?id=123'
  //   }
  // }
})