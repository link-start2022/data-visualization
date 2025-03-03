<template>
  <div>
    <header>
      <!-- <h1>
        数据可视化
      </h1> -->
      <h1>数据可视化</h1>
    </header>
  <!-- </div> -->
  <section class="container">
    <section class="ItemLeft">
      <itemPage>
  <itemOne/>
</itemPage>
<itemPage>
  <itemTwo/>
</itemPage>
      <!-- vue设定不允许这么写 -->
      <!-- <section class="itemOne">
      </section>
      <section class="itemTwo">
      </section> -->
    </section>
    <section class="ItemCenter">
      <mapPage/>
    </section>
    <section class="ItemRight">
       <!-- vue设定不允许这么写 -->
      <!-- <section class="itemThree">
</section>
<section class="itemFour">
</section> -->
<itemPage>
  <itemThree/>
</itemPage>
<itemPage>
  <itemFour/>
</itemPage>

    </section>
  </section>
</div>
</template>

<script>
import itemPage from '@/components/itemPage.vue';
import itemOne from '@/components/itemOne.vue';
import itemTwo from '@/components/itemTwo.vue';
import itemThree from '@/components/itemThree.vue';
import itemFour from '@/components/itemFour.vue';
import {inject} from "vue";
import mapPage from "@/components/mapPage.vue"
export default{
  components:{
    itemPage,
    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    mapPage
  },
  setup(){
    // 这边需要加"""let $echarts = inject([echarts])
   let $echarts = inject("echarts")
   let $http = inject("axios")
   console.log($echarts)
   console.log($http)
  }
}
</script>

<!-- <style> -->
 <style lang="less">
/* 测试 
div{
  font-size: 1.5625rem;
} */
 /* 原本的写法是header{左边的括号在62行，右边的在97行}
 {将66-97行括住了} 因而导致布局一直是竖直排列而不是水平排列
 这里应该出现了错误，不过浏览器自动识别处理了，很奇怪这个错误
 我这次发现了排错的最好方式不是问gpt，虽然我这次把结构和代码基本都给它了，
 但是它还是没找到问题所在。
 最终而是一行一行注释删除保存
 然后查出局部区域，最终一行一行试，才终于把问题找出来了

 需要说明这边使用的是 less语法  当然还有saas
 不过这种据说是后期项目复杂后 难以维护 所以最好不使用嵌套
 */
 header{
  height:1rem;
  width: 100%;
  background-color:rgba(0, 0, 255, 0.2);
//  }
 h1{
  font-size: 0.375rem;
  color: #fff;
  text-align: center;
  line-height:1rem;
  // width: 100%;
 }
}
 .container{
min-width: 1200px;
max-width: 2048px;
margin: 0 auto;
 border:1px solid blue; 
padding: .125rem .125rem 0;
// background-color: gray;
/* height: 500px; */
  display: flex;
  .ItemLeft,.ItemRight{
flex:3;
}
.ItemCenter{
flex:5;
height:10.5rem;
border: 1px solid blue;
padding: 0.125rem;
margin: .25rem;
}
 }

 

</style>