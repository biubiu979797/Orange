// pages/page4/page4.js
const innerAudioContext = wx.createInnerAudioContext();
var count = 0;
var count1 = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: "../../icon1/bf1.png",
    imgPath1: "../../icon1/xin.png"
  },
 
  isPlay: function () {
    var that=this;
    count++;
    if(count%2==0){
      innerAudioContext.pause()
      that.setData({
        imgPath: "../../icon1/bf1.png"
      })
    }else{
      innerAudioContext.play()
      that.setData({
        imgPath: "../../icon1/zt.png"
      })
    }
  },
  isLike: function () {
    var that = this;
    count1++;
    if (count1 % 2 == 0) {
      that.setData({
        imgPath1: "../../icon1/xin.png"
      })
    } else {
      that.setData({
        imgPath1: "../../icon1/xin1.png"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=506094210.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})