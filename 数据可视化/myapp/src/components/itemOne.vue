<template>
  <div>
    <h2>销售总量</h2>
    <div id ="oneChart">
      图表1
    </div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"
export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    let oneData = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])
    async function getState() {
      //http//需要：  let oneData = await $http({url:"http//localhost:9999/four/data"});
      //  let oneData = await $http({url:"http://localhost:9999/one/data"});
      // 因为在App.vue中设置了基准路径，因而可以使用了
      // let oneData = await $http({url:"/one/data"});
      oneData = await $http({ url: "/one/data" });
      // 若console.log(oneData)输出为object,则是后端res.send({msg:"我是one的路由地址",chartData:"oneData"}) 这边oneData加了""就不是数据而是字符串了
      // console.log(oneData.data.chartData.chartData)
    }
    // 这边需要接收数据
    function setData() {
      xdata = oneData.data.chartData.chartData.map((v) => { return v.title })
      ydata = oneData.data.chartData.chartData.map((v) => { return v.num })
      console.log("xdata:", xdata)
      console.log("ydata:", ydata)
    }
    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("oneChart"))//这边要么加分号要么不加
      getState().then(() => {
        setData()//这边要么加分号要么不加
        myChart.setOption({
          gird: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value"
          },
          // yXis:{ 拼写错误
          yAxis: {
            data: xdata,
            type: "category"
          },
          series: [{
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
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
                    color: "#cda819",
                  },
                ]),

              }
            },
            data: ydata,
            type: "bar"
          }]
        })
      })
      //  let myChart = $echarts.init(getElementById("onechart"))


    })
    // setup需要return
    return {
      // getState()错误
      getState,
      oneData,
      xdata,
      ydata,
      setData
    }
  }

}
</script>
<style lang="less">
//id是#
#oneChart {
  height: 4.5rem
}

h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}
</style>