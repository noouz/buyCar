<script>
import { mapState,mapActions} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';
import PublicBtn from '@/components/PublicBtn.vue';
import LabelCheck from '@/components/LabelCheck.vue';
import CheckList from '@/components/CheckList.vue';
import TotalCalc from '@/components/TotalCalc.vue';


export default {
  components: {
    PublicBtn,
    LabelCheck,
    CheckList,
    TotalCalc,
  },
  methods:{
    //交出表單時去除已結帳的項目
    ...mapActions(useShoppingCart, ['resetCart']),
    formCheck(){
      alert('成功下單!');
      this.resetCart();
      this.$router.push({ name: "buysuccess" });
    }
  }
}
</script>

<template>
  <div class="p-2 text-3xl">購物車確認</div>
  <div>
    <div class="grid grid-cols-4 w-11/12 m-auto justify-center p-2 border-y gap-2 font-bold">
      <div class="text-center">商品圖片</div>
      <div>商品名稱</div>
      <div class="text-center">價錢</div>
      <div class="text-center">數量</div>
    </div>

    <CheckList></CheckList>

    <!-- 以下表單 -->
    <form @submit.prevent="formCheck()" action="/buysuccess" >
      <LabelCheck :required="true" >
        <template #formTop></template>
        <template #formBottom></template>
      </LabelCheck>

      <!-- 商品total -->
      <totalCalc></totalCalc>
      
      <!-- 確認按鈕 -->
      <div class="flex justify-between px-5 pb-3">
        <PublicBtn :link="'/shoppingcart'" :style="'bg-rose-600'" :content="'回上頁繼續加購'"></PublicBtn>
        <button class="bg-blue-800 p-2 rounded-lg text-white" type="submit">確認送出</button>
      </div>
    </form>

  </div>
</template>

<style></style>