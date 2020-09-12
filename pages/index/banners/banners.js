// banners.js
var utils = require('../../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options==undefined){}else{
    if(options.id=='1')utils.getDateBanner(this,0,4);
    if(options.id=='3')utils.getDateBanner(this,5,10);
    if(options.id=='5')utils.getDateBanner(this,10,18);
  }
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

  },
  
  loadError: function (e) {
   
    
  },
  toImg: function (e) {
   
    var index = e.currentTarget.dataset.index;
    //console.log(index);
   // var imgArr = [];
    var objkeys = Object.keys(this.data.item);
   // console.log(objkeys);
  //  console.log(this.data);
    var obitm = this.data.item;
   // console.log(obitm[index].url);



   // for (var i = 0; i <objkeys.length; i++) {
     // imgArr.push(this.data.item[i]); 
     // console.log( this.data.item[i]);

   // }
    //console.log(imgArr[index].url);
    app.globalData.urld=obitm[index].url;
    wx.switchTab({
      //console.log(imgArr[index].url)
     url: '../thisdir/index',
      success:function(e){

        var page=getCurrentPages().pop();
        if(page==undefined||page==null)return;
        page.onLoad();
      }
    })
  }
  
})