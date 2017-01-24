  var app = getApp()
Page({
   onShareAppMessage: function () {    
    return {      
        title: '分享快乐', 
        desc: '热爱前端',
     }  
  },
  data:{
   userInfo:[] 
   
  },
   onLoad:function(){
      var that = this
   that.setData({
   hidden: !this.data.hidden
  });
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo
            })
            console.log(userInfo)
        })
   }
})