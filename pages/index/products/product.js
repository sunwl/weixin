//var utils = require('../../../utils/util.js')
Page({
  data: {
    background: [
      { url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3152041048,939343128&fm=15&gp=0.jpg', id: 1 },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598770619673&di=5f0dbd7866eca411b0685d3c43cdf175&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fe4dde71190ef76c6e7a087409f16fdfaaf51676e.jpg', id: 3 },
       { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598771033977&di=706fe7800cda45f61d498fa010cfb53a&imgtype=0&src=http%3A%2F%2Fwww.xixian.gov.cn%2Fd%2Ffile%2F20200319%2F1584579201591949.jpg', id: 5 }],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 2000,
    pid: '',
    dataimg:''
  },
  todetail: function (e) {
    //将商品的id赋值给productid
    var name = e.currentTarget.dataset.name;
    var id = e.currentTarget.dataset.id;
    //console.log("name="+name);
    //本地变量设置值
    this.data.pid = id;
    //全局变量设置值
    getApp().globalData.productid = id;
    wx.navigateTo({
      url: '/pages/index/productdetail/detail?id=' + getApp().globalData.productid
    })
  },
  onLoad: function () {
    //console.log(this)
    //utils.getDateswiper(this);
   // console.log("uuu")
    //console.log(this.data.background[1].id)
  },
  dError:function(){

  },
  todetail1(e) {
    //console.log(e);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/banners/banners?id=' + id
    })
  }
})