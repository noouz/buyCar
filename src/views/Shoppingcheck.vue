<script>
import { RouterLink, RouterView } from 'vue-router';
import LinkBtn from '@/components/LinkBtn.vue';
import CheckCard from '@/components/CheckCard.vue';
import Label from '@/components/Label.vue';
export default{
  components:{
    LinkBtn,CheckCard,Label,
  },
  data(){
    return{
      formData:{
        name:'Stanley',
        phone:'09123456789',
        address:'台中市',
        email:'qa@gmail.com',
      }
    }
  },
  // methods:{
    // updateNew(){
    //   this.formData.name = value,
    // }
  // }

}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold mb-5">購買確認及填寫資訊</h1>
  <main class="main">
    <CheckCard />

    <form class="mt-6">
      <Label :content="'姓名'" :type="'text'" required :value-data="formData.name" @update="(value) => formData.name = value" ></Label>
      <Label :content="'電話'" :type="'tel'" required :value-data="formData.phone" @update="(value) => formData.phone = value"></Label>
      <Label :content="'地址'" :type="'text'" required :value-data="formData.address" @update="(value) => formData.adress = value"></Label>
      <Label :content="'電子信箱'" :type="'email'" required :value-data="formData.email" @update="(value) => formData.email = value"></Label>
      <!-- <label for="name">
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
      </label> -->

      
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
      <LinkBtn :style="'back'" :link="'/shoppingcar'">回上頁繼續加購</LinkBtn>
      <LinkBtn :style="'confirm'" :link="'/buysuccess'" >確認送出</LinkBtn>
    </div>
  </main>
</template>

<style scoped>
/* 共用樣式 */

.choice{
  @apply font-normal text-base min-w-[100px] w-[120px]
}
.inp-title{
  @apply text-lg flex flex-wrap mb-2 mt-3
}

input[type="radio"]{
  @apply w-auto m-2
}
/* 主要樣式 */
.main{
  @apply w-full px-0 md:px-10 mb-8 
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

</style>