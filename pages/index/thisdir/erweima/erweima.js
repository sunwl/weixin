Page({
  data: {
   url: ''
 },
 onLoad: function (options) {
   var that = this
   var url = '/image/IMG1.jpg' //这里添加图片的地址  
   that.setData({
     url: url
   })
 },
 previewImage: function (e) {
   wx.previewImage({
     current: this.data.url, // 当前显示图片的http链接   

     urls: this.data.url
     // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
   })
 } 
})
