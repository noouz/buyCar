<script>
import { RouterLink, RouterView } from 'vue-router';
export default{
  // components:{
  //   Keyword,
  // },

  data(){
    return{
      checked:false,
    }
  },

  // methods:{
  // },
}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold mb-5">購物車確認</h1>
  <main class="main">
    <div class="goods-nav">
      <span class="w-1/12"></span>
      <span class="min-w-[80px] w-3/12 text-center break-keep">商品圖片</span>
      <span class="w-3/12 pl-2 md:pl-0 break-keep">商品名稱</span>
      <span class="w-1/12 break-keep pl-2">價錢</span>
      <span class="w-4/12"></span>
    </div>
    <ul class="goods">
      <li class="checkbox">
        <input type="checkbox" class="sm:w-5 sm:h-5">
      </li>
      <li class="goods-img-area">
        <img src="https://placehold.jp/300x300.png" alt="商品圖片" class="goods-img">
      </li>
      <li class="goods-title">
        <h3>Ronstring</h3>
      </li>
      <li class="goods-price">
        <span>$670</span>
      </li>
      <li class="goods-calc-btns">
        <span class="minus">&ndash;</span>
        <input type="number" class="goods-input" min="1" value="1">
        <span class="plus">&plus;</span>
      </li>
    </ul>
    <div class="calc">
      <span>商品數量：<span>0</span></span>
      <span>商品總金額：$<span>0</span></span>
    </div>
    <div class="action">
      <RouterLink to="/">
        <button type="button" class="back">回上頁繼續購買</button>
      </RouterLink>
      <RouterLink to="/shoppingcheck">
        <button type="button" class="confirm">確認購買</button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
/* 共用樣式 */
.goods-img{
  @apply min-w-[80px] w-3/12 select-none
}
/* 主要樣式 */
.main{
  @apply w-full px-0 md:px-5
}
.goods-nav{
  @apply flex w-full border-y-2 py-3 border-gray-300 font-medium
}
.goods{
  @apply flex w-full border-b-2 py-5 border-gray-300 items-center
}
.checkbox{
  @apply w-1/12 flex justify-center
}
.goods-img-area{
  @apply w-3/12 flex justify-center
}
.goods-title{
  @apply w-3/12 pl-2 md:pl-0 break-words md:break-keep
}
.goods-price{
  @apply w-1/12
}
.goods-calc-btns{
  @apply w-3/12 flex flex-nowrap justify-center ml-6 md:ml-0
}
.minus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 px-2 sm:px-0 hover:bg-slate-200
}
.plus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 px-2 sm:px-0 hover:bg-slate-200
}
.goods-input{
  @apply min-w-[50px] w-4/6 sm:w-3/6 border-y border-gray-300  pb-1 pl-1 text-center text-base md:text-lg md:w-2/6
}
.calc{
  @apply flex flex-col w-full mt-8 items-end text-xl md:text-2xl font-medium
}
.action{
  @apply flex w-full justify-between text-white mt-3
}
.back{
  @apply bg-yellow-800 rounded-md px-4 py-2 hover:opacity-90
}
.confirm{
  @apply bg-sky-900 rounded-md px-4 py-2 hover:opacity-90
}
</style>
