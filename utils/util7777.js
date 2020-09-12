
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getDate (c) {
  var indexp = Math.floor(Math.random() * 20) + 9;
  var index = Math.floor(Math.random() * 20);
  var that = c;
  wx.request({
    url: 'https://www.apiopen.top/meituApi', //仅为示例，并非真实的接口地址
    data: {
      page: indexp
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      //console.log(res.data)
      var resdata = res.data.data[index].url
     // console.log(resdata)
      that.setData({
        url: resdata
      })
    }
  })
  //定时器每隔6秒执行一次
  //var timerName =setTimeout(function () {
    //getDate(c);
 // }, 6000)
}
function getDateBanner(c){
  var that=c;
  var indexp = Math.floor(Math.random() * 20) + 9;
  var index = Math.floor(Math.random() * 20);
  wx.request({
    url: 'https://www.apiopen.top/meituApi', //仅为示例，并非真实的接口地址
    data: {
      page: indexp
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      //console.log(res.data.data);
      for (var i = 0; i <res.data.data.length;i++){
        var key = 'item[' + i + '].url';
        var id = 'item[' + i + '].id';
        var chat = 'item[' + i + '].chat';
        var price = 'item[' + i + '].price';
        var urla = res.data.data[i];
        that.setData({
          // 这里使用键值对方式赋值
          [key]: urla.url,
          [id]: urla.createdAt,
          [price]: urla.createdAt,
          [chat]: urla.type
        })
      }
    }
    })

}

function getDateswiper(c) {
  var indexp = Math.floor(Math.random() * 20) + 9;
  var in1 = Math.floor(Math.random() * 20);
  var in2 = Math.floor(Math.random() * 20);
  var in3 = Math.floor(Math.random() * 20);
  var v1 = 0, v2 = 1,v3 = 2;
  var that = c;
  wx.request({
    url: 'https://www.apiopen.top/meituApi', //仅为示例，并非真实的接口地址
    data: {
      page: indexp
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
     // console.log(res.data)
      var resdata1 = res.data.data[in1]
      var resdata2 = res.data.data[in2]
      var resdata3 = res.data.data[in3]
      changeItemInArray(v1, c, resdata1);
      changeItemInArray(v2, c, resdata2);
      changeItemInArray(v3, c, resdata3);
    }
  })

}

function changeItemInArray(index, c, date) {
  // 提前准备好对象
  var that=c;
  // 依旧是根据index获取数组中的对象
  var key = 'background[' + index + '].url'
  var id = 'background[' + index + '].id'
  that.setData({
    // 这里使用键值对方式赋值
    [key]: date.url,
    [id]: date.createdAt,
    dataimg: date.url
  })
}
module.exports = {
  formatTime: formatTime,
  getDate: getDate,
  getDateswiper: getDateswiper,
  changeItemInArray:changeItemInArray,
  getDateBanner: getDateBanner
}
