// pages/food/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTitle: "",
    name: "",
    orderList: [{ foodName: "酱香牛排", price: "50.00", nums: 1 }, { foodName: "港式奶茶", price: "12.00", nums: 1 }, { foodName: "番茄炒蛋", price: "18.00", nums: 1 }, { foodName: "鱼香肉丝", price: "22.00", nums: 1 }, { foodName: "鱼香肉丝", price: "22.00", nums: 1 }, { foodName: "红烧肉", price: "45.00", nums: 1 }, { foodName: "巴西炒饭", price: "23.00", nums: 1 }, { foodName: "糖醋里脊", price: "30.00", nums: 1 }, { foodName: "鱼香肉丝", price: "44.00", nums: 2 }, { foodName: "酱香牛排", price: "50.00", nums: 1 }, { foodName: "酱香牛排", price: "50.00", nums: 1 }, { foodName: "酱香牛排", price: "50.00", nums: 1 }, { foodName: "酱香牛排", price: "50.00", nums: 1 }, { foodName: "酱香牛排", price: "50.00", nums: 1 }, { foodName: "酱香牛排", price: "50.00", nums: 1 }],
    actionSheetHidden: true,
    actionSheetItems: ['美团', '大众点评', '百度糯米'],
    voucherType: "请选择优惠券",
    showModalStatus: false
  },
  // 使用团购券
  payUseVoucher(e){
    this.setData({
      //取反
      showModalStatus: !this.data.showModalStatus
    });
  },

  selectVoucher: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  selectVoucher: function(e){
    var index = e.target.dataset.alphaBeta;
    console.log(index);

    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })

    var stringTemp = this.data.actionSheetItems[index];
    
    this.setData({
      voucherType: stringTemp
    })
  },

  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },  

  // 微信支付
  wxPay(e){
    // wx.requestPayment({
    //   'timeStamp': '',
    //   'nonceStr': '',
    //   'package': '',
    //   'signType': 'MD5',
    //   'paySign': '',
    //   'success': function (res) {
    //     console.log("成功")
    //   },
    //   'fail': function (res) {
    //     console.log("失败")
    //   }
    // })
    wx.navigateTo({
      url: '../food/paySucceed',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 以该方式取值，options.后加上个界面传值时=前的字段名
    this.setData({ navTitle: options.title })
    this.setData({ name: options.name })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})