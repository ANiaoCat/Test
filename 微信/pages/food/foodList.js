// pages/food/foodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: ["饮料", "主食", "汤水", "热菜", "凉菜", "烧烤", "热销", "打折", "推荐", "优惠", "限量"],
    //  
    foodsList: [{ title: "酱香牛排", price: "50", nums: 0 }, { title: "港式奶茶", price: "12", nums: 0 }, { title: "番茄炒蛋", price: "18", nums: 0 }, { title: "鱼香肉丝", price: "22", nums: 0 }, { title: "鱼香肉丝", price: "22", nums: 0 }, { title: "红烧肉", price: "45", nums: 0 }, { title: "巴西炒饭", price: "23", nums: 0 }, { title: "糖醋里脊", price: "30", nums: 0 }, { title: "鱼香肉丝", price: "22", nums: 0 }],
    //
    currentIndex: "0",
    // 购物车总数
    totalNums: 0,
    // 购物车列表


  },

  selectCategory: function (e) {
    console.log(e.target)
    this.setData({
      currentIndex: e.currentTarget.dataset.idx
    })

    var log = this.data.foodsList
    // 获取到当前的位置，等于取id
    var index = e.currentTarget.dataset.idx
    log[0].title = "海之言"
    log[0].price = index
    this.setData({
      foodsList: log
    })

  },
  // 购物车数量减少
  minusNum: function (e) {

    var index = e.target.dataset.alphaBeta;
    var log = this.data.foodsList;



    if (log[index].nums >= 1) {
      log[index].nums--;
      this.setData({
        foodsList: log
      })
      console.log(index)

      // 改变总数
      var totalNums = this.data.totalNums;
      totalNums--
      this.setData({
        totalNums: totalNums
      })
    } else {
      console.log("不能减少啦")
    }

  },
  // 购物车增加
  addNum: function (e) {
    var log = this.data.foodsList
    var index = e.target

    var index = e.target.dataset.alphaBeta;
    var log = this.data.foodsList;
    log[index].nums++;
    this.setData({
      foodsList: log
    })

    // 改变总数
    var totalNums = this.data.totalNums;
    totalNums++
    this.setData({
      totalNums: totalNums
    })
  },
  payOrder: function () {
    wx.navigateTo({
      url: '../food/orderList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("qqqqqqqq")
    wx.request({
      method:"POST",
      url: 'https://wxdcs.cloud-fintech.com/snailf-foods-wechat-api/category/get', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'JSON'
      },
      success: function (res) {
        console.log(res.data)
        console.log("成功了")
        
      },
      fail: function (res){
        console.log("ghjkl")
      }
    })
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