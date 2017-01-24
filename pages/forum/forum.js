Page({
    data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease-in-out',
    })

    this.animation = animation

    animation.scale(2,2).rotate(65).step()

    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      animation.translate(130).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(180).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(65).scale(2, 2).step()
    this.animation.translate(500, 500).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  }
})