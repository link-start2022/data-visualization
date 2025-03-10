<template>
  <router-view/>
</template>

<!-- <style lang="less">
body{
  background: url("~@/assets/bg1.jpeg") top center no-repeat;
} -->
  <!-- 这边结构混乱，将script嵌入到style -->
<!--  这边script{}错了，这只是一个标签，不是这个 -->
<script>
// provide提供，inject引入，然后使用setup启动
  import { provide}  from "vue"
  // import * as $echarts from "echarts"
  // 这边需要加""" import * as echarts from [echarts]
  import * as echarts from "echarts"
  import axios from "axios"
  // 设置基准路径，这样就不需要再输入http://localhost:9999
  // axios.defaults.baseURL = "http://localhost:9999"
  // 改为公网部署项目,注意这里不是云服务器的8.154.47.116:8888
  axios.defaults.baseURL = "http://8.154.33.49:9999"
  
  export default{
    setup(){
         // provide("名字随便起","传递的内容")setup是个函数，需要setup（）
     provide("echarts",echarts)
     provide("axios",axios)
     } 
    }
  </script>
<style lang="less">
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url("~@/assets/bg3.webp") top center no-repeat;
  background-size: 120%;
}
</style>
