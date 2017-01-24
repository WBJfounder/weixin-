Page({
    data: {
        title:'',

    },
    onLoad(params) {
        var _this = this;
         _this.setData({
   hidden: !this.data.hidden
  });
        console.log(params)
        wx.request({
            url: 'https://app.auto.sohu.com/news/index', //仅为示例，并非真实的接口地址
            data: {

            },
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                console.log(res)
                //
                _this.setData({
                    news: res.data.feeds

                })
            }
        })
        this.setData({
            title: params.id
        })
    }
})