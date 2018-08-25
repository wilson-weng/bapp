const request = require('../../utils/request')

const getChartsByProj = proj_id => {
  let content = [
      {
          legend: {
              data: ['应收', '工资', '利润'],
              left: 'center',
              bottom: '30px',
              z: 100
          },

          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07'],
          },
          yAxis: {
              x: 'center',
              type: 'value',
              axisLabel: {
                  formatter: (value, index) => {
                      if (value >= 10000 && value < 10000000) {
                          value = value / 10000 + "万";
                      } else if (value >= 10000000) {
                          value = value / 10000000 + "千万";
                      }
                      return value;
                  }
              },
          },
          grid: {
              containLabel: true
          },
          series: [{
              name: '应收',
              type: 'line',
              smooth: true,
              data: [0, 1000, 65000, 70900, 100000, 150000, 620000]
          }, {
              name: '工资',
              type: 'line',
              smooth: true,
              data: [500, 800, 30000, 50000, 89000, 112000, 489000]
          }, {
              name: '利润',
              type: 'bar',
              smooth: true,
              data: [-500, 200, 35000, 20900, 11000, 38000, 131000]
          }]
      },
      {
          legend: {
              data: ['人效达成'],
              left: 'center',
              bottom: '30px',
              z: 100
          },

          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['week20', 'week21', 'week22', 'week23',],
          },
          yAxis: {
              x: 'center',
              type: 'value',
              axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value}%'
              },
          },
          grid: {
              containLabel: true
          },
          series: [{
              name: '人效达成',
              type: 'line',
              smooth: true,
              data: [0, 20, 56, 77]
          }]
      }
  ]
  return content


}

module.exports = {
    getChartsByProj,
}
