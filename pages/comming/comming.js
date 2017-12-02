// pages/comming/comming.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const url = app.globalData.doubanBase +
      "/v2/movie/coming_soon" 
    this.getMovies(url)
  },
  getMovies: function (url) {
    const that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        //console.log(res.data)
        that.processData(res);
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },
  processData: function (res) {
    this.setData({ movies_data: res.data.subjects })
  },
  moview_touch: function (res) {
    console.log('跳转到详情页' + res.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../detail/detail?data=' + res.currentTarget.dataset.id,
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