const innerAudioContext = wx.createInnerAudioContext();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    timer: '',//定时器名字
    countDownNum: '15'//倒计时初始值
  },

  onLoad: function(options){
    innerAudioContext.autoplay = true;
    innerAudioContext.src = 'http://gss0.bdstatic.com/y0s1hSulBw92lNKgpU_Z2jR7b2w6buu/data2/music/a8263e970121a7090c0ecdd7194c2189/597028659/120904831198000128.mp3?xcode=b12e282b1be383fbcc3224dc97e4d7a9'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  onShow: function () {
    //什么时候触发倒计时，就在什么地方调用这个函数
    this.countDown();
  },

  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
        //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
        //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          innerAudioContext.stop();
          wx.navigateTo({
            url: '../page1/page1',
          })
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  }
})