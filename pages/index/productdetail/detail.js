Page({
  data: {
    id:'',
    background: [
      { url:'http://img.pconline.com.cn/images/upload/upc/tx/softbbs/1011/26/c0/6000682_1290726932563_1024x1024soft.jpg', id: 100 }, 
      { url: 'http://img.pconline.com.cn/images/bbs4/20097/11/1247243516612.jpg', id: 101 }, 
      { url: 'http://img1.qq.com/gamezone/pics/14411/14411248.jpg', id: 102}
       ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 2000
  },
  onLoad: function (param) {
    //从url中获取数据
   this.data.id=param.id;
   var apppid=getApp().globalData.productid;
   console.log("这是跳转过来的值："+this.data.id);
   console.log("这是从全局变量中取出来的值：" + apppid);
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  todetail: function (e) {
    wx.navigateTo({
      // url: '/pages/index/thisdir/erweima/erweima'
      url: '/pages/index/productdetail/detail'
    })
  }

})