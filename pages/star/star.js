Page({
  onShareAppMessage: function () {    
    return {      
        title: '分享快乐', 
        desc: '热爱前端',
     }  
  },
     data: {
    imgUrls: [
     '../../images/01.jpg',
      '../../images/02.jpg',
      '../../images/03.jpg'
    ],
    indicatorDots: 1,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  into:function(){
   wx.switchTab({
    url: '../index/index'
})
  }
})