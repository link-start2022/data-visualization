<template>
<h2>产品类别</h2>
<div class="chart" id="fourChart"></div>
</template>

<script>
import {inject,onMounted,reactive}from "vue"
export default{
setup(){
let $echarts = inject("echarts")
let $http = inject("axios")
let fourData = reactive({})
async function getState(){
 fourData =  await $http({url:"/four/data"})
}
return{
  getState,
  fourData
},
onMounted(()=>{
  // getState().then(()=>{}) 并未调用getState,所以无数据
  getState().then(()=>{
    console.log("柱状图",fourData.data.chartData.chartData)
 let myChart = $echarts.init(document.getElementById("fourChart"))
 myChart.setOption({
  grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
  xAxis:{
    type:"category",
    data:fourData.data.chartData.chartData.day,
   axisLine:{
  lineStyle:{
    color:"#fff"
  }
  }
},
  yAxis:{
type:"value",
axisLine:{
  lineStyle:{
    color:"#fff"
  }
      
    }
  },
  legend:{

  },
  tooltip:{
    trigger:"axis",
    axisPointer:{
      type:"shadow"
    }
  },
  series:[
    {
      name:"日化",
      type:"bar",
      data:fourData.data.chartData.chartData.num.Chemicals,
      stack:"total",
      label:{
        show:true
      },
      emphasis:{
        focus:"series"
      }
    },
    {
      name:"服饰",
      type:"bar",
      data:fourData.data.chartData.chartData.num.Clothes,
      stack:"tatal",
      label:{
        show:true
      },
      emphasis:{
       focus:"series"
      }
    },
    {
      name:"电子",
      type:"bar",
      data:fourData.data.chartData.chartData.num.Electrical,
      stack:"tatal",
      label:{
        show:true
      },
      emphasis:{
        focus:"series"
      }
    },
    {
      name:"数码",
      type:"bar",
      data:fourData.data.chartData.chartData.num.digit,
      stack:"tatal",
      label:{
        show:true
      },
      emphasis:{
        focus:"series"
      }
    },
    {
      name:"家居",
      type:"bar",
      data:fourData.data.chartData.chartData.num.gear,
      stack:"tatal",
      label:{
        show:true
      },
      emphasis:{
        focus:"series"
      }
    }
  ]
 })
  })

})
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