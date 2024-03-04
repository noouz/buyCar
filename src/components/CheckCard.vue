<template>
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

</template>

<style scoped>
.goods-nav{
  @apply flex w-full border-y-2 py-3 border-gray-300 font-medium
}
.goods-img{
  @apply min-w-[80px] w-4/12 select-none
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
</style>