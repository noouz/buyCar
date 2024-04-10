<!-- 計算總數量&金額 -->
<script>
import { mapState,mapActions} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';

export default{
  computed:{
      ...mapState(useShoppingCart,['cartData']),
      //算選取商品的總價、數量
      total(){
        let total = 0;
        let price = 0;
        const checkedData = this.cartData.filter(item => item.checked);
        checkedData.forEach((item) => price += item.price * item.quantity);
        checkedData.forEach((item) => total += item.quantity );
        return {quantity:total , price:price};
      },
  },
}
</script>

<template>
  <div class="flex flex-col items-end px-5 font-bold mb-4">
    <div class="text-2xl">商品數量: {{ total.quantity }}</div>
    <div class="text-2xl">商品總金額: ${{total.price}}</div>
  </div>
</template>