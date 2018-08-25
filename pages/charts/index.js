import * as echarts from '../../components/ec-canvas/echarts';
const { getChartsByProj } = require('./api');

let chart = null;
var app = getApp();

function initChart(ecComponent, options) {
    ecComponent.init((canvas, width, height) => {
        const chart = echarts.init(canvas, null, {
            width: width,
            height: height
        });
        canvas.setChart(chart);
        chart.setOption(options);
        return chart;
    });
}


Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
      ec: {
        lazyLoad: true
      },
      charts: [],
      isReady: false

  },
  onReady: function () {
      // 获取组件
      // this.ecComponent = this.selectComponent('#mychart-dom-bar');
      let revOpts = this.data.charts[0];
      revOpts.yAxis = {
          x: 'center',
          type: 'value',
          scale: true,
          axisLabel: {
              formatter: (value, index) => {
                  if ((value >= 10000 && value < 10000000) || (value >= -10000000 && value < -10000)) {
                      value = value / 10000 + "万";
                  } else if (value >= 10000000 || value <= -10000000 ) {
                      value = value / 10000000 + "千万";
                  }
                  return value;
              }
          }
      }
      initChart(this.selectComponent('#revenue-chart'), revOpts);
      initChart(this.selectComponent('#efficiency-chart'), this.data.charts[1]);
      this.setData({isReady: true});
  },
  onShow() {
    this.setData({charts: getChartsByProj(app.globalData.currentProj.id)});
    wx.setNavigationBarTitle({title: app.globalData.currentProj.proj_name})
    console.log(this.data.chart)
  },
});
