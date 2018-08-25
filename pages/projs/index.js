const { getProjs } = require('./api');

var app = getApp();

Page({
    data: {
      projs: [],
    },
    onReady: function () {
    },
    onShow() {
        this.setData({projs: getProjs()});
        console.log(this.data.chart)
    },
    enterProj: (event)=>{
        app.globalData.currentProj = event.currentTarget.dataset.proj
        wx.navigateTo({
            url: '../charts/index'
        })

    }
});
