<!-- <template>
  <div>
    <h2 id="threeChart">库存统计</h2>
  </div>
</template> -->
<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="threeChart"></div>
  </div>
</template>
<script>
import { inject, onMounted, reactive } from "vue"
export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    let threeData = reactive({})
    async function getState() {
      // threeData = await $http(url:"/three/data")
      threeData = await $http({ url: "/three/data" })
    }
    onMounted(() => {
      getState().then(()=>{
        // .then（）希望传达一个函数而不是对象
        console.log("饼状图", threeData.data.chartData.chartData);
        let myChart = $echarts.init(document.getElementById("threeChart"))
        myChart.setOption({
           // 设置图例
           legend: {
            top: "bottom",
          },
          // 提示框
          tooltip: {
            show: true,
          },
          series: [{
            type: "pie", // 类型为饼状图
            // ECharts 的 series.data 需要特定的格式，
            // 通常是一个数组，数组中的每个元素是一个对象，
            // 包含 name 和 value 属性,不能写成data: threeData嵌套结构
              data: threeData.data.chartData.chartData,
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 10
              }
          }]
        })
        window.onresize = myChart.resize;
      })
    })
    return {
      threeData,
      getState
    }

  }

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