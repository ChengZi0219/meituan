<template>
  <div>
    <h1>商家数对比</h1>
    <div ref='bar' style="width:100%;height:500px" class="merchant"></div>
    <h1>店家数对比</h1>
    <div ref="bar1" style="width:100%;height:500px" class="merchant2"></div>
    <!-- 测试 -->
    <div class="ceshi" v-for="item in userData" :key="item.name">
      <span>{{ item.name}}</span>
      <span>{{ item.city}}</span>
      <span>{{ item.age}}</span>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
// import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      userData: [
        { name: '李佳琪', city: '北京', age: 18 },
        { name: '李琪', city: '北京', age: 18 },
        { name: '李佳', city: '北京', age: 18 },
        { name: '佳琪', city: '北京', age: 18 },
        { name: '琪', city: '北京', age: 18 }
      ]
    }
  },
  mounted () {
    this.draveltip()
    this.drave()
  },
  created () {
    this.getData()
  },
  methods: {
    draveltip () {
      const dom = this.$refs.bar
      const myEcharts = echarts.init(dom)
      const option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['今天', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['本周', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['本月', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['本年', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          { type: 'line', smooth: true, seriesLayoutBy: 'row' },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      }
      myEcharts.setOption(option)
    },
    drave () {
      const dom1 = this.$refs.bar1
      const myEcharts1 = echarts.init(dom1)
      const option1 = {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', '2015', '2016', '2017'],
          source: [
            { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
            { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
            { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
            { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      }
      myEcharts1.setOption(option1)
    },
    addWaterMarker (str) {
      var can = document.createElement('canvas')
      var body = document.body

      body.appendChild(can)

      can.width = 400
      can.height = 200
      can.style.display = 'none'

      var cans = can.getContext('2d')
      cans.rotate(-20 * Math.PI / 180)
      cans.font = '16px  Microsoft JhengHei'
      cans.fillStyle = 'rgba(17, 17, 17, 0.50)'
      cans.textAlign = 'left'
      cans.textBaseline = 'Middle'
      cans.fillText(str, can.width / 3, can.height / 2)

      body.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
    },
    async getData () {
      const data = await this.$http.get('/file/import/mt/business')
      console.log(data + '1111')
      // console.log('1111')
      // axios.get('http://192.168.5.56:8080/jtsp/ShanXiYiCaiGouServlet')
      //   .then(function (res) {
      //     console.log(res)
      //   })
      //   .catch(function (res) {
      //     if (res instanceof Error) {
      //       console.log(res.message)
      //     } else {
      //       console.log(res.data)
      //     }
      //   })
    }
  }
}
</script>
<style lang='less' scoped>
.merchant , .merchant2 {
  background-color: #f6f4f4;
  padding-top: 20px;
  box-sizing: border-box;
}
.ceshi {
  span {
    width: 40px;
    margin-right: 10px;
  }
}
</style>
