
Page({
  data: {
    latitude: 44.90403,//纬度   
    longitude: 11.407526,//经度   
    speed: 0,//速度    
    accuracy: 5,//位置精准度
    showpass:true, 
    enable3d:true,  
    enableRotate:true,
    enableOverlooking:true,
    enableScroll:true,
    controls: [{
      id: 1,
      iconPath: '/image/green_tri.png',
      position: {
        left: 290,
        top: 480,
        width: 40,
        height: 40
      },
      clickable: true
    }]
  },

  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: "/image/location.png",
            title: "我在这"
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 1000,
            strokeWidth: 1
          }]
        });
      }
    })
  },

  controltap(e) {
   
   // console.log("000000");
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: "/image/location.png",
            title: "我在这"
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 1000,
            strokeWidth: 1
          }]
        });
      }
    });
    //console.log("000000");
  },
  getloca: function () {

    //console.log("000000");
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50,
            iconPath: "/image/location.png",
            title: "我在这"
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 1000,
            strokeWidth: 1
          }]
        });
      }
    });
    //console.log("000000");
  }
}) 
