<template>
  <h2>产品月销</h2>
  <div class="chart" id="twoChart"></div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"
export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    let twoData = reactive({})
    async function getState() {
      twoData = await $http({ url: "/two/data" });

    }
    onMounted(() => {
      getState().then(() => {
        console.log("折线图", twoData.data.chartData.chartData);
        let myChart = $echarts.init(document.getElementById("twoChart"))
        myChart.setOption({
          tooltip:{
            trigger:"axis",
            axisPointer:{
              type:"cross",
              label:{
                // backgrounderColor:"#e6b600"
                backgroundColor:"#e6b600"
              }
            }
          },
          legend:{
            data:["日化","服饰","电子","数码","家居"]
          },
          grid:{
            left:"1%",
            right:"4%",
            bottom:"3%",
            containLabel:true
          },
          xAxis: {
            type: "category",
            boundaryGap:false,
            data: twoData.data.chartData.chartData.day,
            axisLine:{
              lineStyle:{
                color:"fff"
              }
            }
          },
          yAxis: {
            type: "value",
            axisLine:{
              lineStyle:{
                color:"fff"
              }
              }
          },
          series: [
            {
              name: "日化",
              type: "line",
              data: twoData.data.chartData.chartData.num.Chemicals,
              smooth: true, // 平滑过渡
              showSymbol: false, // 隐藏点
              stack: "Total", // 开启堆叠
              lineStyle: {
                width: 0,
              },
              // 选中的高亮
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                // 区域颜色填充
                opacity: 0.8, // 透明度
                // 设置渐变色
                color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#055aba",
                  },
                  {
                    offset: 0.5,
                    color: "#312ad2",
                  },
                  {
                    offset: 1,
                    color: "#cac349",
                  },
                ]),
              },
            },
            {
              name: "服饰",
              type: "line",
              data: twoData.data.chartData.chartData.num.Clothes,
              smooth: true, // 平滑过渡
              showSymbol: false, // 隐藏点
              stack: "Total", // 开启堆叠
              lineStyle: {
                width: 0,
              },
              // 选中的高亮
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                // 区域颜色填充
                opacity: 0.8, // 透明度
                // 设置渐变色
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#005eaa",
                  },
                  {
                    offset: 0.5,
                    color: "#339ca8",
                  },
                  {
                    offset: 1,
                    color: "#bca119",
                  },
                ])
            }
          },
            {
              name: "电子",
              type: "line",
              data: twoData.data.chartData.chartData.num.Electrical,
              smooth: true, // 平滑过渡
              showSymbol: false, // 隐藏点
              stack: "Total", // 开启堆叠
              lineStyle: {
                width: 0,
              },
              // 选中的高亮
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                // 区域颜色填充
                opacity: 0.8, // 透明度
                // 设置渐变色
                color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#01cd89",
                  },
                  {
                    offset: 0.5,
                    color: "#339ca8",
                  },
                  {
                    offset: 1,
                    color: "#cba876",
                  },
                ])
              }
            },
            {
              name: "数码",
              type: "line",
              data: twoData.data.chartData.chartData.num.digit,
              smooth: true, // 平滑过渡
              showSymbol: false, // 隐藏点
              stack: "Total", // 开启堆叠
              lineStyle: {
                width: 0,
              },
              // 选中的高亮
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                // 区域颜色填充
                opacity: 0.8, // 透明度
                // 设置渐变色
                color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#005eaa",
                  },
                  {
                    offset: 0.5,
                    color: "#339ca8",
                  },
                  {
                    offset: 1,
                    color: "#cda231",
                  },
                ]),
              }
            },
            {
              name: "家居",
              type: "line",
              data: twoData.data.chartData.chartData.num.gear,
              smooth: true, // 平滑过渡
              showSymbol: false, // 隐藏点
              stack: "Total", // 开启堆叠
              lineStyle: {
                width: 0,
              },
              // 选中的高亮
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                // 区域颜色填充
                opacity: 0.8, // 透明度
                // 设置渐变色
                color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#0eaa06",
                  },
                  {
                    offset: 0.5,
                    color: "#399ba3",
                  },
                  {
                    offset: 1,
                    color: "#cb3a6c",
                  },
                ]),
              }
            }

          ]
        })
      })
    })
    return {
      twoData, getState
    }
  },



}

</script>
<style scoped>
.chart {
  height: 4.5rem;
}

h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}
</style>