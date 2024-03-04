<template>
  <ul class="goods" >
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
</template>

<style scoped>
.goods{
  @apply flex flex-wrap w-full justify-around xl:justify-center gap-y-8 gap-x-2 xl:gap-x-5 
}
.goods-item{
  @apply flex flex-col min-w-[200px] w-[300px] lg:w-[250px] xl:w-1/6 bg-gray-100 justify-between rounded-md
}
.goods-img{
  @apply min-w-[200px] rounded-t-md select-none
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
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}
.plus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}
.goods-addcar{
  @apply w-full rounded-b-md bg-slate-600 flex justify-center py-2 text-white gap-x-1 cursor-pointer hover:opacity-95 mt-2 
}
</style>