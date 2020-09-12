//index.js
//获取应用实例
var utils=require('../../../utils/util.js')
var app = getApp()
Page({
  data: {
    url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598765794988&di=f4ccf891a0100b8efce09bfaa74c5912&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D724220610%2C2481216560%26fm%3D214%26gp%3D0.jpg"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (opt) {
   
    
    if (app.globalData.urld!=""){
     // console.log(app.globalData.urld + "iiiiiiiiiiiiiiiiiii")
     this.setData({
      // url: app.globalData.urld 
      url:app.globalData.urld
     })
    
    }else{
      //utils.getDate(this);
      this.setData({
        // url: app.globalData.urld 
        url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3010037823,3920856265&fm=26&gp=0.jpg"
       })
    }
  },
  click:function(e){
    // wx.navigateTo({
      //url: '/pages/index/thisdir/erweima/erweima'
   // })
   var cnumb=utils.getIndex();

    this.setData({
      // url: app.globalData.urld 
      url:cnumb
     })
  
  },
  changeImg: function (e) {
    //utils.getDate(this);
  },
  loadError:function(e){
    //utils.getDate(this);
  }
})
