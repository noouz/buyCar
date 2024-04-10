<!-- 購物車清單(有增加減少數量功能) -->
<script>
import { mapState,mapActions} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';
import PublicBtn from '@/components/PublicBtn.vue';
import TotalCalc from '@/components/TotalCalc.vue';


export default{
  components:{
    PublicBtn,TotalCalc,
  },
  computed:{
      ...mapState(useShoppingCart,['cartData']),
      ...mapState(useShoppingCart,['cartAmount']),
      ...mapState(useShoppingCart,['checkedData']),
      //檢查有沒有商品打勾
      haveChecked(){
        return this.checkedData.length ? true : false
      }
  },
  methods:{
    ...mapActions(useShoppingCart,['goodsPlus']),
    ...mapActions(useShoppingCart,['goodsMinus']),
    ...mapActions(useShoppingCart,['addProduct']),
    ...mapActions(useShoppingCart, ['checkedCartData']),
    //檢查有商品打勾後跳轉
    isChecked(){
      this.checkedCartData();
      if(!this.haveChecked){
        alert('尚未選取商品!');
        this.$router.push({ name: "shoppingcart" });
      }else{
        alert('送出商品!');
        this.$router.push({ name: "shoppingcheck" });
      }
    },
  },
}
</script>
<template>
      <!-- 以下商品清單 -->
      <div class="grid grid-cols-6 w-11/12 m-auto justify-center items-center p-2 border-b gap-2 mb-5" v-for="goods in cartData" :key="goods.id">
        <div class="flex justify-center"><input type="checkbox" v-model="goods.checked" ></div>
        <div class="m-auto max-w-[100px] max-h-[100px]"><img :src=goods.pic></div>
        <div class="break-words">{{goods.name}}</div>
        <div class="text-center">${{goods.price * goods.quantity}}</div>
        <div>
          <div class="flex h-[35px]">
            <button class="w-1/4 border rounded-l-3xl"  @click="goodsMinus(goods)" >-</button>
            <label for="check-buy"></label>
            <input type="number" class="w-2/4 border text-center" id="check-buy" :value=goods.quantity @input="addProduct(goods)">
            <button class="w-1/4 border rounded-r-3xl" @click="goodsPlus(goods)">+</button>
          </div>
        </div>
        <div></div>
      </div>
      <!-- 以上商品清單 --> 

      <!-- 計算結果 -->
      <TotalCalc></TotalCalc>

      <!-- 確認按鈕 -->
      <div class="flex justify-between px-5">
        <PublicBtn :link="'/'" :style="'bg-rose-600'" :content="'回上頁繼續購買'"></PublicBtn>
        <PublicBtn :style="'bg-blue-800'" :content="'確認購買'" @click="isChecked()" ></PublicBtn>
      </div>
  </template> 
  