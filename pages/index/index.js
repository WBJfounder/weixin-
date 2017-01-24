var app = getApp()
var util =require('../../utils/utils')

Page({
  onShareAppMessage: function () {    
    return {      
        title: '分享快乐', 
        desc: '热爱前端',
     }  
  },
 onLoad: function(options) {
   var _this = this;
   _this.setData({
   hidden: !this.data.hidden
  });

  wx.request({
  url: 'https://app.auto.sohu.com/news/banners?citycode=110000', //仅为示例，并非真实的接口地址
  data: {
  
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    // console.log(res.data)
 
 
    _this.setData({
     imgUrls:res.data
    })
  }
})
wx.request({
  url: 'https://app.auto.sohu.com/news/index?last_id=1661', //仅为示例，并非真实的接口地址
  data: {
   
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    console.log(res)
//
    _this.setData({
     news:res.data.feeds
  
    })
  }
})
    this.setData({
      title: options.title
    })
  
  },
   data: {
     lis:["推荐","原创","优创+","视频","快报","游记","图片","行情","新闻","说客","测评","导购","用车","技术","文化","改装"],
    imgUrls: [
     
    ],
   news:[],
   time:'',
    indicatorDots: false,
    autoplay: true,
    interval: 2500,
    duration: 1000,
    circular:true
  },
  
   
tim:function formatTime(timestamp) {

    var date = new Date(timestamp * 1000);
    return date.getHours() + ":" + date.getMinutes();

}

    
   
      
      
 
  
})
