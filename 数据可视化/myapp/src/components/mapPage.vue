<template>
<div id="map">
<h1>地图展示</h1>
</div>
</template>

<script>
// 这里忘记引入axios了 但是不需要引入 ，不然会报错
import axios from "axios"
  import {inject,reactive,onMounted} from "vue"
export default{
setup(){
  let $echarts = inject("echarts")
  // let $axios = inject("axios")
let mapData = reactive({})
async function getState(){
  //这是赋值而不是响应式请求数据  mapData = await("localhost:8080/map/china.json")
  // mapData =await $axios.get("localhost:8080/map/china.json")
  //这边没有进行封装，所以还要写 http
  // mapData =await axios.get("http://localhost:8080/map/china.json")
  // 把数据放到后端
  // mapData =await axios.get("map/data")
  mapData =await axios.get("/map/data")
}
onMounted(()=>{
  // console.log("地图数据",mapData.data)
  // let myChart = $echarts.init(document.getElementById("map"))
  getState().then(()=>{
    console.log("地图",mapData.data)
    // 这边需要将数据注册进map
    // $echarts.registerMap("china",mapData)
    // $echarts.registerMap("china",mapData.data)
    // 地图数据放入后端,相应的地图数据也需要注册
    $echarts.registerMap("china", mapData.data.chartData);
    // $echarts.registerMap("china", mapData.data);
    let myChart = $echarts.init(document.getElementById("map"))
    myChart.setOption({
      geo:{
        map:"china",
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: "#00ffff",
              shadowColor: "rgba(230, 130, 70, 0.5)",
              shadowBlur: 30,
              emphasis: {
                focus: "self",
              },
            },
      },
      // 设置一个触发信息框
      tooltip:{
        trigger:"item",
        formatter: (params) => {
          return `${params.name}：${params.value[2]}`;
        }
      },
      visualMap:{
        type:"continuous",
        min:100,
        max:5000,
        calculable:true,
        inRange:{
          color: ["#50a3ba", "#eac736", "#d94e"]
        },
        textStyle:{
          color:"#ffff"
        }
      },
      title: {
            text: "城市销量",
            left: "45%",
            textStyle: {
                color: "#fff",
                fontSize: 20,
                textShadowBlur: 10,
                textShadowColor: "#33ffff",
            }
          },
      series:[
        // 设置散点分布
        {
          type:"scatter",
          itemStyle:{
            color:"red"
          },
//地理坐标要基于一个坐标系
          coordinateSystem:"geo",
          data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "深圳", value: [114.07, 22.62, 2461] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "西安", value: [108.45, 34, 3421] },
              ]
        }
      ]
    })
  })
})
return{
  getState,
  mapData
}
}

}

</script>

<style>
/* 这边没有设置大小，所以看不到数据 */
#map{
  width: 100%;
  height: 100%;
}
</style>