<template>
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
</template>

<style scoped>
.goods-img{
  @apply min-w-[80px] w-3/12 select-none
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
</style>