<!-- check&success頁面上面的購買卡片清單 -->
<script>
import { mapState} from 'pinia';
import { useShoppingCart} from '@/stores/shoppingCart';

export default{
    computed:{
        ...mapState(useShoppingCart,['checkedData']),
    },
}
</script>

<template>
    <!-- 以下商品清單 -->
    <div class="grid grid-cols-4 w-11/12 m-auto justify-center items-center p-2 border-b gap-2 mb-5" v-for="goods in checkedData" :key="goods.id ">
        <div class="m-auto max-w-[100px] max-h-[100px]"><img src="https://fakeimg.pl/300/"></div>
        <div class="break-words">{{goods.name}}</div>
        <div class="text-center">${{goods.price * goods.quantity}}</div>
        <div class="text-center">{{goods.quantity}}</div>
    </div>
    <!-- 以上商品清單 -->
</template>