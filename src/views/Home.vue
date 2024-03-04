<script>
export default{
  // components:{
  //   Keyword,
  // },

  data(){
    return{
      origin:true,
    }
  },

  // methods:{
  // },
}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold">商品列表</h1>
  <div class="flex w-full justify-end gap-x-1">
    <img src="@/assets/icon/list-one.png" alt="圖示排列" class="list-img" @click="origin=true" v-if="!origin">
    <img src="@/assets/icon/list-one-active.png" alt="圖示排列" class="list-img" @click="origin=true" v-else>
    <img src="@/assets/icon/list-two.png" alt="清單排列" class="list-img" @click="origin=false" v-if="origin">
    <img src="@/assets/icon/list-two-active.png" alt="清單排列" class="list-img" @click="origin=false" v-else>
  </div>
  <main class="main">
    <ul class="goods" v-if="origin">
      <li class="goods-item">
        <img src="https://placehold.jp/300x300.png" alt="商品圖片" class="goods-img">
        <div class="goods-scribe">
          <h3 class="text-xl">Bytecard</h3>
          <p>Immunization not carried out because of caregiver refusal</p>
          <div class="price">
            <span>價格：NT$</span>
            <span>954</span>
          </div>
        </div>
        <div class="goods-calc">
          <span class="break-keep text-lg lg:text-base">數量：</span>
          <div class="goods-calc-btns">
            <span class="minus">&ndash;</span>
            <input type="number" class="goods-input" min="1" value="1">
            <span class="plus">&plus;</span>
          </div>
        </div>
        <div class="goods-addcar">
          <img src="@\assets\icon\shopping_cart.svg" alt="加入購物車">
          <span>加入購物車</span>
        </div>
      </li>
    </ul>

    <!-- 清單顯示 -->
    <ul class="goods-second" v-else>
      <ul class="goods-second-nav">
        <li class="goods-second-img title-set">商品圖片</li>
        <li class="w-3/12 md:w-2/12 title-set">商品名稱</li>
        <li class="w-4/12 title-set hidden sm:block">商品描述</li>
        <li class="w-1/12 title-set">價錢</li>
        <li class="w-5/12 sm:w-3/12 md:w-4/12 title-set"></li>
      </ul>
      <li class="goods-second-item">
        <img src="https://placehold.jp/300x300.png" alt="商品圖片" class="goods-second-img">
        <h3 class="goods-second-title">Bytecard</h3>
        <p class="goods-second-scribe ">Immunization not carried out because of caregiver refusal</p>
        <span class="goods-second-price ">$954</span>
        <div class="goods-second-button">
          <div class="goods-second-calc">
            <span class="minus second">&ndash;</span>
            <input type="number" class="goods-second-input" min="1" value="1">
            <span class="plus second">&plus;</span>
          </div>
          <div class="goods-second-addcar">
            <img src="@\assets\icon\shopping_cart.svg" alt="加入購物車">
            <span class="hidden md:block">加入購物車</span>
            <span class="md:hidden">加入</span>
          </div>
        </div>
      </li>

    </ul>
  </main>
</template>

<style scoped>
/* 全局樣式 */
*::before,*::after{
  @apply box-border 
}
ul,li{
  @apply list-none
}
/* 共用樣式 */
.title-set{
  @apply text-center break-keep
}
/* 主要樣式 */
.list-img{
  @apply cursor-pointer
}
.main{
  @apply flex w-full h-max py-5 justify-center 
}
.goods{
  @apply flex flex-wrap w-full justify-around xl:justify-center gap-y-8 gap-x-2 xl:gap-x-5 
}
.goods-item{
  @apply flex flex-col min-w-[200px] w-[300px] lg:w-[250px] xl:w-1/6 bg-gray-100 justify-between rounded-md
}
.goods-img{
  @apply min-w-[200px] rounded-t-md
}
.goods-scribe{
  @apply w-full flex flex-col gap-y-3 py-5 px-3 mb-10
}
.goods-calc{
  @apply w-full flex gap-x-1 justify-center py-2 items-center
}
.goods-calc-btns{
  @apply w-4/6 flex flex-nowrap 
}
.goods-input{
  @apply w-7/12 border-y border-gray-300 text-lg pb-1 pl-1 text-center lg:w-3/6 
}
.minus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 
}
.plus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 
}
.goods-addcar{
  @apply w-full rounded-b-md bg-slate-600 flex justify-center py-2 text-white gap-x-1 cursor-pointer hover:opacity-95 mt-2 
}

/* 清單排列 */
.goods-second{
  width: 97%;
  @apply flex flex-col 
}
.goods-second-nav{
  @apply flex w-full border-y-2 py-3 border-gray-300 
}
.goods-second-item{
  @apply flex justify-between border-b border-gray-300 py-5 items-center
}
.goods-second-img{
  @apply min-w-[100px] w-3/12 sm:w-1/12 md:w-2/12
}
.goods-second-title{
  @apply md:text-xl w-3/12 md:w-2/12 text-center break-words md:break-keep
}
.goods-second-scribe{
  @apply w-4/12 md:w-3/12 hidden sm:block
}
.goods-second-price{
  @apply w-1/12 text-center  text-lg
}
.goods-second-button{
  @apply w-5/12 sm:w-3/12 md:w-4/12 flex flex-col justify-center items-center
}
.goods-second-calc{
  @apply w-4/6 flex flex-nowrap 
}
.goods-second-input{
  @apply min-w-[50px] w-4/6 sm:w-3/6 border-y border-gray-300  pb-1 pl-1 text-center text-base md:text-lg md:w-4/6 
}
.goods-second-addcar{
  @apply min-w-[100px] w-4/6 rounded-2xl bg-slate-600 flex justify-center py-2 text-white gap-x-1 cursor-pointer hover:opacity-95 mt-3 
}
.second{
  @apply px-3
}

</style>
