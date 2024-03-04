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
  <h1 class=" text-black text-3xl font-bold mb-5">購買確認及填寫資訊</h1>
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


    <form class="mt-6">
      <label for="name">
        <span>姓名</span>
        <input type="text" name="name" id="name" required>
      </label>
      <label for="tel">
        <span>電話</span>
        <input type="tel" name="tel" id="tel" required>
      </label>
      <label for="adress">
        <span>地址</span>
        <input type="text" name="adress" id="adress" required>
      </label>
      <label for="email">
        <span>電子信箱</span>
        <input type="email" name="email" id="email" required>
      </label>

      
      <label for="payment" class="inp-title">
        <span class="w-full">付款方式</span>
        <label for="creditCard" class="choice">
          <input type="radio" id="creditCard" required name="payment" value="creditCard">信用卡
        </label>
        <label for="cash"  class="choice">
          <input type="radio" id="cash" required name="payment" value="cash">貨到付款
        </label>
      </label>
      <label for="deliver" class="inp-title">
        <span class="w-full">運送方式</span>
        <label for="delivery"  class="choice">
          <input type="radio" id="delivery" required name="deliver" value="delivery">宅配
        </label>
        <label for="cvs"  class="choice">
          <input type="radio" id="cvs" required name="deliver" value="cvs">超商取貨
        </label>
      </label>
    </form>

    <div class="calc">
      <span>商品數量：<span>0</span></span>
      <span>商品總金額：$<span>0</span></span>
    </div>
    <div class="action">
      <RouterLink to="/shoppingcar">
        <button type="button" class="back">回上頁繼續加購</button>
      </RouterLink>
      <RouterLink to="/buysuccess">
        <button type="button" class="confirm">確認送出</button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
/* 共用樣式 */
.goods-img{
  @apply min-w-[80px] w-4/12
}
label{
  @apply font-medium text-lg w-full
}
.choice{
  @apply font-normal text-base min-w-[100px] w-[120px]
}
.inp-title{
  @apply text-lg flex flex-wrap mb-2 mt-3
}
input{
  @apply w-full border border-gray-300 pl-2 text-lg py-1 rounded-md my-3 focus:outline-gray-500 active:outline-gray-500
}
input[type="radio"]{
  @apply w-auto m-2
}
/* 主要樣式 */
.main{
  @apply w-full px-0 md:px-10 mb-8 
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
form{
  @apply w-full
}
.bottom{
  @apply w-full flex flex-col
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