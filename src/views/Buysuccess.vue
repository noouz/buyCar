<script>
import { RouterLink, RouterView } from 'vue-router';
export default{
  // components:{
  //   Keyword,
  // },

  data(){
    return{
      // origin:true,
    }
  },

  // methods:{
  // },
}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold mb-5">完成購買</h1>
  <main class="main">
    <div class="goods-nav">
      <span class="min-w-[80px] w-4/12 text-center break-keep">商品圖片</span>
      <span class="w-4/12 break-keep pl-0 md:pl-8">商品名稱</span>
      <span class="w-2/12 break-keep">價錢</span>
      <span class="w-2/12">數量</span>
    </div>
    <ul class="goods">
      <li class="goods-img-area">
        <img src="https://placehold.jp/300x300.png" alt="商品圖片" class="goods-img">
      </li>
      <li class="goods-title">
        <h3>Ronstring</h3>
      </li>
      <li class="goods-price">
        <span>$670</span>
      </li>
      <li class="goods-count">
        <span>1</span>
      </li>
    </ul>

    <div class="customer-nav">
      <span class="w-1/12">姓名</span>
      <span class="w-2/12 ">電話</span>
      <span class="w-3/12 ">地址</span>
      <span class="w-2/12">付款方式</span>
      <span class="w-2/12">電子信箱</span>
      <span class="w-1/12">運送方式</span>
    </div>
    <ul class="customer">
      <li class="w-1/12 break-words">Wilson</li>
      <li class="w-2/12 break-words">09123456789</li>
      <li class="w-3/12 break-words">Chiayi County 625, Taiwan (R.O.C.)</li>
      <li class="w-2/12 break-words">信用卡</li>
      <li class="w-2/12 break-words">qs@gmail.com</li>
      <li class="w-1/12 break-words">宅配</li>
    </ul>
  </main>
  <RouterLink to="/">
    <button type="button" class="back">回首頁</button>
  </RouterLink>
</template>

<style scoped>
/* 共用樣式 */
.goods-img{
  @apply min-w-[80px] w-4/12
}
.customer>li{
  @apply py-5 
}
/* 主要樣式 */
.main{
  @apply w-full px-0 md:px-10 mb-20
}
.goods-nav{
  @apply flex w-full border-y-2 py-3 border-gray-300 font-medium
}
.goods{
  @apply flex w-full border-b-2 py-5 border-gray-300 items-center
}
.goods-img-area{
  @apply w-4/12 flex justify-center
}
.goods-title{
  @apply w-4/12 pl-0 md:pl-8 break-words md:break-keep 
}
.goods-price{
  @apply w-2/12
}
.goods-count{
  @apply w-2/12 pl-3
}
.customer-nav{
  @apply w-full flex border-b-2 py-3 border-gray-300 font-medium
}
.customer{
  @apply w-full flex border-b-2 border-gray-300
}



.back{
  @apply bg-sky-800 rounded-md px-4 py-2 hover:opacity-90 w-full mb-2 text-white
}
</style>